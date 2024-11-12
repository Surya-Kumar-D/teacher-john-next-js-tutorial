"use client";
import { createTaskCustom } from "@/utils/actions";
import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "Please Wait ..." : "Create Task"}
    </button>
  );
};

type StateType = {
  message: string | null;
};

const initialState: StateType = {
  message: null,
};

const TaskFormCustom = () => {
  const [state, formAction] = useActionState(createTaskCustom, initialState);

  useEffect(() => {
    if (state?.message === "error") {
      toast.error("There was error...");
      return;
    }
    if (state?.message) {
      toast.success("Task successfully Created!!!");
    }
  }, [state]);

  return (
    <form action={formAction}>
      {state?.message ? <p className="mb-2">{state.message}</p> : null}
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          name="content"
          required
        />
      </div>
      <SubmitBtn />
    </form>
  );
};

export default TaskFormCustom;