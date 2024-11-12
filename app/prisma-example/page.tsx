import React from "react";

import { getAllTasks } from "@/utils/actions";

const PrismaExamplePage = async () => {
  const tasks = await getAllTasks();
  if (tasks.length === 0) {
    return <h2>No task to show.....</h2>;
  }
  return (
    <div>
      <h1 className="text-7xl">PrismaExample</h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-xl py-2">
            😎 {task.content}
          </h2>
        );
      })}
    </div>
  );
};

export default PrismaExamplePage;
