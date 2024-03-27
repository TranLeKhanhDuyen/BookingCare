export const ENV_CONFIG = {
  PORT: process.env.PORT || 8080,
  API_PREFIX: process.env.API_PREFIX || '/api/v1',

  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,

  DATABASE_URL: process.env.DATABASE_URL
};
