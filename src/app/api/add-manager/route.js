import { PrismaClient } from "@prisma/client";
import prisma from "../../../../lib/prisma";
export async function POST(req, res) {
  console.log("handle call");

  if (req.method === "POST") {
    const { managerid, firstname } = req.body;
    console.log(managerid, firstname);
    try {
      const newManager = await prisma.leave.create({
        data: {
          managerid,
          firstname,
        },
      });
      console.log("New leave entry added:", newManager);
      return { status: 200, body: newManager };
    } catch (error) {
      return { status: 500, body: { message: error.message } };
    }
  } else {
    return { status: 405, body: { message: "Method not allowed" } };
  }
}
