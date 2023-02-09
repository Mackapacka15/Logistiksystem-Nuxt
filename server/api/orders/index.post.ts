import mongoose from "mongoose";
import item, { itemType } from "~~/schemas/item";
import order, { orderType } from "~~/schemas/order";

export default defineEventHandler(async (event) => {
  let body = await readBody(event);
  console.log("body: ");

  console.log(body.customer);

  let newOrderItems: {
    parentId: mongoose.Types.ObjectId;
    ammount: Number;
  }[] = [];

  let orderValue = 0;

  for (const orderItem of body.orderItems) {
    const result = await item.findOne({ name: orderItem.itemName });
    if (!result) {
      throw createError({
        statusCode: 401,
        statusMessage: orderItem.itemName + " not found",
      });
    }
    let newOrderItem = {
      parentId: result._id,
      name: orderItem.itemName,
      ammount: orderItem.ammount,
      indItemValue: result.price,
    };

    if (!newOrderItem.ammount || !newOrderItem.indItemValue) {
      return;
    }
    orderValue += newOrderItem.ammount.valueOf() * newOrderItem.indItemValue;
    newOrderItems.push(newOrderItem);
  }

  order
    .create({
      customer: body.customer,
      items: newOrderItems,
      orderValue: orderValue,
    })
    .then(() => {
      event.node.res.statusCode = 200;
      return "Order created";
    })
    .catch((err) => {
      console.log(err);

      throw createError({
        statusCode: 401,
        statusMessage: err,
      });
    });
});
