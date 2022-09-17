const CFConfig = require("cashfree-pg-sdk-nodejs").CFConfig;
const CFPaymentGateway = require("cashfree-pg-sdk-nodejs").CFPaymentGateway;
const CFEnvironment = require("cashfree-pg-sdk-nodejs").CFEnvironment;
const CFHeader = require("cashfree-pg-sdk-nodejs").CFHeader;
const CFCustomerDetails = require("cashfree-pg-sdk-nodejs").CFCustomerDetails;
const CFOrderRequest = require("cashfree-pg-sdk-nodejs").CFOrderRequest;
const CFOrderMeta = require("cashfree-pg-sdk-nodejs").CFOrderMeta;
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
  const billing = await Billing.create(req.body);
  customerDetails.customerId = (req.body.userId).toString();
  customerDetails.customerName = req.body.firstName + " " + req.body.lastName;
  customerDetails.customerPhone = req.body.phone;
  customerDetails.customerEmail = req.body.email;
  var d = {};
  d["order_tag_01"] = "TESTING IT";
  var orderMeta = new CFOrderMeta();
  orderMeta.returnUrl = `http://localhost:3000/shop?cf_id={order_id}&cf_token={order_token}`;
  var cFOrderRequest = new CFOrderRequest();
  cFOrderRequest.orderAmount = req.body.total;
  cFOrderRequest.orderCurrency = "INR";
  cFOrderRequest.customerDetails = customerDetails;
  cFOrderRequest.orderMeta = orderMeta;
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