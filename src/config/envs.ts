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
  HARVEST_PORT: number;
  DATABASE_URL: string;
  NATS_SERVERS: string[];
}

const envsSchema = Joi.object({
  HARVEST_PORT: Joi.number().required(),
  DATABASE_URL: Joi.string().uri({ scheme: ['postgres', 'postgresql'] }).required(),
  NATS_SERVERS: Joi.array().items( Joi.string() ).required(),
}).unknown(true);

const { error, value } = envsSchema.validate({
  ...process.env,
  DATABASE_URL: expandEnvReferences(process.env.DATABASE_URL ?? ''),
  NATS_SERVERS: process.env.NATS_SERVERS?.split(','),
});

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.HARVEST_PORT,
  databaseUrl: envVars.DATABASE_URL,
  natsServers: envVars.NATS_SERVERS,
};
