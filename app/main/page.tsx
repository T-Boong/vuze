"use client";

import ChzzkCard from "@/components/card/ChzzkCard";
import VuzeGrandOpenBanner from "@/components/card/OpenBanner";
import YoutubeCard from "@/components/card/YoutubeCard";
import ItemsWrapper from "@/components/wrapper/ItemsWrapper";
import youtubeData from "@/constants/mocks/youtubeData";
import { useLive } from "@/queries/chzzk/useLive";

const MainPage = () => {
  const { data } = useLive();

  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-8">
      <VuzeGrandOpenBanner />
      {/* 치지직 */}
      <section className="flex flex-col gap-y-4">
        <span className="font-gmarket font-bold ml-8 text-[21px]">
          치지직 인기 스트리밍 🔥
        </span>
        <ItemsWrapper platform="chzzk">
          {data?.content.data?.map((item) => (
            <ChzzkCard key={item.liveId} chzzLiveContent={item} />
          ))}
        </ItemsWrapper>
      </section>
      {/* 유튜브 */}
      <section className="flex flex-col gap-y-4">
        <span className="font-gmarket font-bold ml-8 text-[21px]">
          유튜브 인기 스트리밍 🔥
        </span>
        <ItemsWrapper platform="youtube">
          {youtubeData.items.map((item) => (
            <YoutubeCard key={item.id.videoId} data={item} />
          ))}
        </ItemsWrapper>
      </section>
    </div>
  );
};

export default MainPage;
