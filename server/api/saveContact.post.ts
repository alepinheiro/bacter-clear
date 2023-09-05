import prisma from "@/server/database";
import { ContactForms } from "@prisma/client";

export default defineEventHandler(async (event) => {
  try {
    const body: ContactForms["contacts"][0] = await readBody(event);
    if (!body) {
      throw createError({
        statusCode: 400,
        message: "Item field is required.",
      });
    }
    await prisma.contactForms.upsert({
      where: {
        owner: "bacterClear",
      },
      update: {
        contacts: {
          push: body,
        },
      },
      create: {
        owner: "bacterClear",
        sendTo: {
          chatId: "47999493409@c.us",
          name: "Ale",
        },
        contacts: [body],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return { statusCode: 200, message: "New item has been added." };
  } catch (error: unknown) {
    console.log({ error });
    throw createError({
      statusCode: 500,
      message: "Something went wrong.",
    });
  }
});
