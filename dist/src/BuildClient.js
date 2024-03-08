"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scopes = exports.apiUrl = exports.authUrl = exports.clientSecret = exports.clientId = exports.projectKey = exports.ctpClient = void 0;
var node_fetch_1 = require("node-fetch");
var sdk_client_v2_1 = require("@commercetools/sdk-client-v2");
require("dotenv/config");
// Access environment variables and assert they are not undefined or provide default values
var projectKey = process.env.CTP_PROJECT_KEY;
exports.projectKey = projectKey;
var clientId = process.env.CTP_CLIENT_ID;
exports.clientId = clientId;
var clientSecret = process.env.CTP_CLIENT_SECRET;
exports.clientSecret = clientSecret;
var authUrl = process.env.CTP_AUTH_URL;
exports.authUrl = authUrl;
var apiUrl = process.env.CTP_API_URL;
exports.apiUrl = apiUrl;
var scopes = process.env.CTP_SCOPES ? process.env.CTP_SCOPES.split(',') : [];
exports.scopes = scopes;
var authMiddlewareOptions = {
    host: authUrl,
    projectKey: projectKey,
    credentials: {
        clientId: clientId,
        clientSecret: clientSecret,
    },
    scopes: scopes,
    fetch: node_fetch_1.default,
};
var httpMiddlewareOptions = {
    host: apiUrl,
    fetch: node_fetch_1.default,
};
exports.ctpClient = new sdk_client_v2_1.ClientBuilder()
    .withClientCredentialsFlow(authMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .withLoggerMiddleware()
    .build();
