import orderModel, { type orderType } from "@/schemas/order";

export default defineEventHandler(async (event) => {
  // @ts-ignore
  const orderid: string = event.context.params.orderid;
  const result = await orderModel.findOne({ orderNumber: orderid });

  return result as orderType;
});
