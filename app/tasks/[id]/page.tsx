import EditForm, { Form } from "@/app/components/EditForm";
import { getTask } from "@/utils/actions";
import { GetStaticPropsContext } from "next";
import Link from "next/link";
import React from "react";

// Define the page props according to Next.js expectations
type PageProps = GetStaticPropsContext<{ id: string }>;

const SingleTaskPage = async ({ params }: PageProps) => {
  if (!params?.id) {
    return <p>Error: No task ID provided.</p>;
  }
  const task = (await getTask(params.id)) as Form;

  return (
    <>
      <Link href="/tasks" className="btn btn-link">
        back to task
      </Link>
      <EditForm task={task} />
    </>
  );
};

export default SingleTaskPage;
