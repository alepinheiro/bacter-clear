import { PrismaClient } from "@/prisma/generated/client/edge";
const config = useRuntimeConfig();

const prisma = new PrismaClient({
  datasources: { db: { url: config.apiSecret.MONGODB_URI } },
});
export default prisma;
