const CFConfig = require("cashfree-pg-sdk-nodejs").CFConfig;
const CFPaymentGateway = require("cashfree-pg-sdk-nodejs").CFPaymentGateway;
const CFEnvironment = require("cashfree-pg-sdk-nodejs").CFEnvironment;
const CFHeader = require("cashfree-pg-sdk-nodejs").CFHeader;
const CFCustomerDetails = require("cashfree-pg-sdk-nodejs").CFCustomerDetails;
const CFOrderRequest = require("cashfree-pg-sdk-nodejs").CFOrderRequest;
const db = require("../models");
const Billing = db.billing;

var cfConfig = new CFConfig(
  CFEnvironment.SANDBOX,
  "2022-01-01",
  "221667916798133b67cd0aeeee766122",
  "8b207f5aa033b278560e99a8c9fb2d87e18c6f8d"
);

var cfHeader = new CFHeader(
  "221667916798133b67cd0aeeee766122",
  "8b207f5aa033b278560e99a8c9fb2d87e18c6f8d"
);

exports.createOrder = async (req, res) => {
  var customerDetails = new CFCustomerDetails();
  customerDetails.customerId = "some_random_id";
  customerDetails.customerPhone = "9999999999";
  customerDetails.customerEmail = "b.a@cashfree.com";
  var d = {};
  d["order_tag_01"] = "TESTING IT";
  var cFOrderRequest = new CFOrderRequest();
  cFOrderRequest.orderAmount = 1;
  cFOrderRequest.orderCurrency = "INR";
  cFOrderRequest.customerDetails = customerDetails;
  cFOrderRequest.orderTags = d;
  try {
    var apiInstance = new CFPaymentGateway();

    var result = await apiInstance.orderCreate(cfConfig, cFOrderRequest);
    if (result != null) {
      console.log(result?.cfOrder?.orderToken);
      console.log(result?.cfOrder?.orderId);
      console.log(result?.cfOrder?.paymentLink);
      console.log(result?.cfHeaders);
    }
    res.send(result);
  } catch (e) {
    console.log(e);
  }
};
