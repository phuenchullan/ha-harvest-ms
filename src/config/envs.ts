import 'dotenv/config';
import Joi from 'joi';

function expandEnvReferences(value: string): string {
  return value.replace(/\$\{([A-Za-z_][A-Za-z0-9_]*)\}/g, (_, name: string) => {
    const resolved = process.env[name];
    if (resolved === undefined) {
      throw new Error(`Config validation error: "${name}" is not defined`);
    }
    return resolved;
  });
}

interface EnvVars {
  DB_HARVEST_PORT: number;
  HARVEST_DATABASE_URL: string;
  DB_NATS_SERVERS: string[];
}

const envsSchema = Joi.object({
  DB_HARVEST_PORT: Joi.number().required(),
  HARVEST_DATABASE_URL: Joi.string().uri({ scheme: ['postgres', 'postgresql'] }).required(),
  DB_NATS_SERVERS: Joi.array().items( Joi.string() ).required(),
}).unknown(true);

const { error, value } = envsSchema.validate({
  ...process.env,
  HARVEST_DATABASE_URL: expandEnvReferences(process.env.HARVEST_DATABASE_URL ?? ''),
  DB_NATS_SERVERS: process.env.NATS_SERVERS?.split(','),
});

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.DB_HARVEST_PORT,
  databaseUrl: envVars.HARVEST_DATABASE_URL,
  natsServers: envVars.DB_NATS_SERVERS,
};
