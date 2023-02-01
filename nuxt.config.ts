// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  css: ["@/assets/css/global.css"],
  runtimeConfig: {
    DB_URI: process.env.MONGODB_URI || "mongodb://localhost/logistiksystem",
  },
});
