"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BuildClient_1 = require("./src/BuildClient");
var platform_sdk_1 = require("@commercetools/platform-sdk");
// Create apiRoot from the imported ClientBuilder and include your Project key
var apiRoot = (0, platform_sdk_1.createApiBuilderFromCtpClient)(BuildClient_1.ctpClient)
    .withProjectKey({ projectKey: BuildClient_1.projectKey });
// Plug-in your function here
var getOrders = function () {
    return apiRoot
        .orders()
        .get()
        .execute();
};
getOrders()
    .then(function (response) {
    var orders = response.body.results;
    orders.forEach(function (order) {
        // Assuming the structure of totalPrice is something like: { currencyCode: 'USD', centAmount: 1000 }
        var currency = order.totalPrice.currencyCode;
        var amount = order.totalPrice.centAmount; // Convert to a more standard currency format if needed
        console.log("Order ID: ".concat(order.id, ", Total Price: ").concat(currency, " ").concat(amount));
    });
});
// Call your function such as:
// getProject()
//   .then(console.log)
//   .catch(console.error);
