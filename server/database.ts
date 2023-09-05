import { PrismaClient } from "@/prisma/generated/client";
const config = useRuntimeConfig();

const prisma = new PrismaClient();
export default prisma;
