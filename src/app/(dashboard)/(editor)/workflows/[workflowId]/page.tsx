import { requireAuth } from "@/lib/auth-utils";

interface ParamProps {
  params: Promise<{
    workflowId: string;
  }>;
}

const page = async ({ params }: ParamProps) => {
  await requireAuth();
  const { workflowId } = await params;
  return <div>workflowId : {workflowId}</div>;
};

export default page;
