import { getQueryClient, trpc } from "@/trpc/server";
import ClientComponent from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

export default async function Home() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return (
    <div className="text-red-500">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading...</div>}>
          <ClientComponent />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
}
