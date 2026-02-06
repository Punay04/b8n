"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { ToastRoot } from "@base-ui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function Home() {
  const trpc = useTRPC();
  const querClient = useQueryClient();

  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        toast.success("Job queued");
      },
    }),
  );

  const testAi = useMutation(
    trpc.testAi.mutationOptions({
      onSuccess: (data) => {
        toast.success("AI Job queued");
      },
    }),
  );

  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-5">
        <p className="text-center">
          {data?.map((d) => (
            <p>{d.name}</p>
          ))}
        </p>

        <Button disabled={create.isPending} onClick={() => create.mutate()}>
          Create
        </Button>

        <Button disabled={testAi.isPending} onClick={() => testAi.mutate()}>
          Test ai
        </Button>
      </div>
    </div>
  );
}
