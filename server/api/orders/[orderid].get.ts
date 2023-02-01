import orderModel, { orderSchema } from "~~/schemas/order";

export default defineEventHandler(async (event) => {
  const orderid: string = event.context.params.orderid;

  console.log(orderid);

  console.log("request");

  const result = await orderModel.findOne({ orderNumber: orderid });

  return result as orderSchema;
});
