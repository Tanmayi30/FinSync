import { defineConfig, env } from "@prisma/config";
import "dotenv/config"; // Forces Node to read the .env file immediately

export default defineConfig({
  schema: "./prisma/schema.prisma",
  datasource: {
    url: env("DIRECT_URL"),
  },
});