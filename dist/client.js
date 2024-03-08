"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BuildClient_1 = require("./src/BuildClient");
var platform_sdk_1 = require("@commercetools/platform-sdk");
// Create apiRoot from the imported ClientBuilder and include your Project key
var apiRoot = (0, platform_sdk_1.createApiBuilderFromCtpClient)(BuildClient_1.ctpClient)
    .withProjectKey({ projectKey: BuildClient_1.projectKey });
// Example call to return Project information
// This code has the same effect as sending a GET request to the commercetools Composable Commerce API without any endpoints.
var getProject = function () {
    return apiRoot
        .products()
        .get()
        .execute();
};
// Retrieve Project information and output the result to the log
getProject()
    .then(console.log)
    .catch(console.error);
