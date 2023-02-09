import mongoose, { InferSchemaType } from "mongoose";
import { orderItemSchema } from "./orderItem.js";
import { plugin } from "mongoose-auto-increment";

const orderSchema = new mongoose.Schema({
  customer: { type: String, required: true },
  items: { type: [orderItemSchema] },
  date: { type: Date, default: Date.now },
  pickedBy: { type: mongoose.Types.ObjectId, default: null },
  pickedDate: { type: Date, default: null },
  sendDate: { type: Date, default: null },
  sentBy: { type: mongoose.Types.ObjectId, default: null },
  orderNumber: { type: Number },
  orderValue: { type: Number, default: -1 },
});

orderSchema.plugin(plugin, {
  model: "orderSchema",
  field: "orderNumber",
  startAt: 0,
  incrementBy: 1,
});

export type orderType = InferSchemaType<typeof orderSchema>;

export default mongoose.model("orderSchema", orderSchema);
