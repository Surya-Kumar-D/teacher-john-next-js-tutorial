"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
import { z } from "zod";

export const createTask = async (formData: FormData) => {
  const content = formData.get("content") as string;
  if (content) {
    await prisma.task.create({
      data: {
        content: content,
      },
    });
    revalidatePath("/tasks");
  }
};

export const createTaskCustom = async (prevState, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const content = formData.get("content") as string;
  const Task = z.object({
    content: z.string().min(5),
  });
  try {
    Task.parse({ content });
    if (content) {
      await prisma.task.create({
        data: {
          content: content,
        },
      });
      revalidatePath("/tasks");
      return { message: "Success" };
    }
  } catch (err) {
    console.log(err);
    return { message: "error" };
  }
};

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const deleteTask = async (prevState, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const id = formData.get("id") as string;
  try {
    if (id) {
      await prisma.task.delete({
        where: {
          id: id,
        },
      });
      revalidatePath("/tasks");

      return { message: "success" };
    }
  } catch (error) {
    console.log(error);
    return { message: "error" };
  }
};

export const getTask = async (id: string) => {
  return await prisma.task.findUnique({
    where: {
      id: id,
    },
  });
};

export const editTask = async (formData: FormData) => {
  const id = formData.get("id") as string;
  const completed = formData.get("completed");
  const content = formData.get("content") as string;
  await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      completed: completed === "on" ? true : false,

      content: content,
    },
  });
  redirect("/tasks");
};
