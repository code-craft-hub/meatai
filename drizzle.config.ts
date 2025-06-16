import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: (() => {
      if (!process.env.DATABASE_URL)
        throw new Error("DATABASE_URL env var is required for Drizzle config");
      return process.env.DATABASE_URL!;
    })(),
  },
});
