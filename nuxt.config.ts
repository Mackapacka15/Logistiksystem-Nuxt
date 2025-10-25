// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  css: ["@/assets/css/global.css"],
  runtimeConfig: {
    DB_URL: process.env.MONGODB_URL || "localhost",
    DB_Name: process.env.DB_Name || "logistiksystem",
    DB_User: process.env.DB_User || "",
    DB_Password: process.env.DB_Password || "",
  },
});
