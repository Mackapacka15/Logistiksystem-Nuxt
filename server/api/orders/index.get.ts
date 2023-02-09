import orderModel, { orderType } from "~~/schemas/order";

export default defineEventHandler(async () => {
  const result = await orderModel.find({});

  return result as orderType[];
});
