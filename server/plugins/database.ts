import mongoose, { mongo } from "mongoose";

export default defineNitroPlugin(async (nitroApp) => {
  const config = useRuntimeConfig();

  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(config.DB_URI);
    console.log("Database Connected");
  } catch (err) {
    console.error(err);
  }
});
