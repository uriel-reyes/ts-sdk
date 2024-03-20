import fetch from 'node-fetch';
import {
    ClientBuilder,
    type AuthMiddlewareOptions,
    type HttpMiddlewareOptions
} from '@commercetools/sdk-client-v2';
import 'dotenv/config';

// Access environment variables and assert they are not undefined or provide default values
const projectKey = process.env.CTP_PROJECT_KEY!;
const clientId = process.env.CTP_CLIENT_ID!;
const clientSecret = process.env.CTP_CLIENT_SECRET!;
const authUrl = process.env.CTP_AUTH_URL!;
const apiUrl = process.env.CTP_API_URL!;
const scopes = process.env.CTP_SCOPES ? process.env.CTP_SCOPES.split(',') : [];

const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: authUrl,
  projectKey,
  credentials: {
    clientId,
    clientSecret,
  },
  scopes,
  fetch,
};

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: apiUrl,
  fetch,
};

export const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();

export {
    projectKey,
    clientId,
    clientSecret,
    authUrl,
    apiUrl,
    scopes
};