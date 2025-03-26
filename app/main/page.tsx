"use client";

import Card from "@/components/card/Card";
import { useLive } from "@/query/useLive";

const MainPage = () => {
  const { data, isLoading, error } = useLive();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full h-[calc(100vh-60px)] flex flex-col items-center justify-center">
      <div className="flex flex-wrap gap-4">
        {data?.content.data.map((item) => (
          <Card key={item.liveId} chzzLiveContent={item} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
