import item from "@/schemas/item";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    try {
        const itemToCreate = {
            name: String(body.name),
            price: Number.parseInt(body.price),
        }
        const newItem = await item.create(itemToCreate);
        event.node.res.statusCode = 200;
        return `Item ${newItem.name} created successfully`;
    } catch (err) {
        console.error(err);
        throw createError({
            statusCode: 404,
            statusMessage: "Error creating item: " + err,
        });
    }
})