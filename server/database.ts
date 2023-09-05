import { PrismaClient } from "@/prisma/generated/client/edge";
const config = useRuntimeConfig();

const prisma = new PrismaClient();
export default prisma;
