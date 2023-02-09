import mongoose, { mongo } from "mongoose";
import autoIncrement from "mongoose-auto-increment";

export default defineNitroPlugin(async (nitroApp) => {
  const config = useRuntimeConfig();

  try {
    mongoose.set("strictQuery", true);
    const connection = mongoose.createConnection(config.DB_URI);
    autoIncrement.initialize(connection);
    await mongoose.connect(config.DB_URI);
    console.log("Database Connected");
  } catch (err) {
    console.error(err);
  }
});
