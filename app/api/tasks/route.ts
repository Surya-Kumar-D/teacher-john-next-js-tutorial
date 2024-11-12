import prisma from "@/utils/db";

import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
export const GET = async () => {
  const tasks = await prisma.task.findMany();
  return NextResponse.json({ data: tasks });
};

export const POST = async (request: NextRequest) => {
  const data = await request.json();
  const task = await prisma.task.create({
    data: {
      content: data.content,
    },
  });
  return Response.json({ msg: task });
};
