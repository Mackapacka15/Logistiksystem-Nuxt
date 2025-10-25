import type mongoose from "mongoose";
import item from "@/schemas/item";
import order from "@/schemas/order";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const newOrderItems: {
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
  try {
    await order.create({
      customer: body.customer,
      items: newOrderItems,
      orderValue: orderValue,
    });

    event.node.res.statusCode = 200;
    return "Order created";
  } catch (err) {
    console.error(err);

    throw createError({
      statusCode: 401,
      // @ts-expect-error
      statusMessage: err,
    });
  }
});
