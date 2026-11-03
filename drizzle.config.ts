import { defineConfig } from 'drizzle-kit';
import { envs } from './src/config/envs.js';

export default defineConfig({
  schema: './src/database/schemas/schema.ts', // Busca dinámicamente en la carpeta schema
  out: './drizzle',
  dialect: 'postgresql',
  schemaFilter: "public",
  dbCredentials: {
    url: envs.databaseUrl,
  },
});