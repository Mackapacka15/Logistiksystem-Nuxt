import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

export default defineNitroPlugin(async (nitroApp) => {
  const config = useRuntimeConfig();
  const {
    DB_URL,
    DB_Name,
    DB_User,
    DB_Password,
  }
  = config;
  const authPart = DB_User && DB_Password ? `${DB_User}:${DB_Password}@` : "";
  const DB_URI = `mongodb://${authPart}${DB_URL}/${DB_Name}`;
  console.log("Connecting to DB at:", DB_URI);
  try {
    mongoose.set("strictQuery", true);
    const connection = mongoose.createConnection(DB_URI);
    autoIncrement.initialize(connection);
    await mongoose.connect(DB_URI);
    console.log("Database Connected");
  } catch (err) {
    console.error(err);
  }
});
