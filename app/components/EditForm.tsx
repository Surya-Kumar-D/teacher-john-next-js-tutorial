"use client";

import { editTask } from "@/utils/actions";
import React from "react";

export type Form = {
  id?: string;
  createdAt?: Date;
  content: string;
  completed?: boolean;
};

const EditForm = ({ task }: { task: Form }) => {
  const { id, completed, content } = task;
  console.log(task);
  return (
    <form
      className="join flex w-auto justify-center items-center"
      action={editTask}
    >
      <input type="hidden" name="id" value={id} />
      <input
        type="input"
        required
        className="input join-item input-bordered w-full "
        defaultValue={content}
        name="content"
      />
      <div className="form-control">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text px-1 ">Completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox mx-4 checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button className="btn join-item btn-primary">EDIT</button>
    </form>
  );
};

export default EditForm;
