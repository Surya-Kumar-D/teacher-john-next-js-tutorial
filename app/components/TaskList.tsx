import React from "react";

import Link from "next/link";

import { getAllTasks } from "@/utils/actions";
import DeleteForm from "./DeleteForm";

const TaskList = async () => {
  const tasks = await getAllTasks();
  if (!tasks) {
    return <h2 className="mt-8 font-medium text-lg">No tasks to show....</h2>;
  }
  console.log(tasks.map((task) => task.id));
  return (
    <div className="pl-[5rem]">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
        >
          <h2
            className={`text-lg capitalize ${
              task.completed ? "line-through " : null
            }`}
          >
            {task.content}
          </h2>
          <div className="flex items-center justify-center gap-5">
            <Link href={`/tasks/${task.id}`}>
              <button className="btn btn-accent btn-xs">EDIT</button>
            </Link>
            <DeleteForm id={task.id} />
          </div>
        </li>
      ))}
    </div>
  );
};

export default TaskList;
