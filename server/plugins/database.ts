import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const DB_Host = process.env.DB_Host || "localhost";
const DB_Name = process.env.DB_Name || "logistiksystem";
const DB_User = process.env.DB_User || "";
const DB_Password = process.env.DB_Password || "";

export default defineNitroPlugin(async () => {
  const authPart = DB_User && DB_Password ? `${DB_User}:${DB_Password}@` : "";
  const DB_URI = `mongodb://${authPart}${DB_Host}/${DB_Name}`;
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
