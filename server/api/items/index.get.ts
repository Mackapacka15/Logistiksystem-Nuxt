import itemModel, { itemType } from "~~/schemas/item";

export default defineEventHandler(async () => {
  const result = await itemModel.find({});

  return result as itemType[];
});
