"use client";
import { deleteTask } from "@/utils/actions";

import React, { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
type StateType = {
  message: string | null;
};

const initialState: StateType = {
  message: null,
};

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-xs btn-error" disabled={pending}>
      {pending ? "Pending...." : "delete"}
    </button>
  );
};

const DeleteForm = ({ id }: { id: string }) => {
  const [state, formAction] = useActionState(deleteTask, initialState);

  useEffect(() => {
    if (state?.message === "error") {
      toast.error("There was an error in deleting the task");
    } else if (state?.message === "success") {
      toast.success("Task is successfully deleted");
      console.log(state);
    }
  }, [state]);
  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <SubmitBtn />
    </form>
  );
};

export default DeleteForm;
