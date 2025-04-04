import Image from "next/image";
import { ChzzLiveContent } from "@/types/chzzk/live";
interface CardProps {
  chzzLiveContent: ChzzLiveContent;
}
const ChzzkCard = ({ chzzLiveContent }: CardProps) => {
  return (
    <li
      className="cursor-pointer"
      onClick={() =>
        window.open(`https://chzzk.naver.com/live/${chzzLiveContent.channelId}`)
      }
    >
      <div
        className="w-[300px] h-[180px] bg-gray-200 rounded-lg p-2 border-1 border-gray-800"
        style={{
          backgroundImage: `url(${chzzLiveContent.liveThumbnailImageUrl.replace(
            "{type}",
            "480"
          )})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-[38px] h-[20px] bg-[rgb(224,32,32)] rounded-lg flex items-center justify-center">
            <Image src="/live.svg" alt="live" width={28} height={10} />
          </div>
          <div className="h-[20px] bg-black rounded-[6px] box-border px-2 flex items-center justify-center">
            <span className="text-sm text-gray-500">
              {chzzLiveContent.concurrentUserCount}명
            </span>
          </div>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2 w-[300px] ">
        <div
          className="w-[40px] h-[40px] bg-white rounded-full box-border shrink-0"
          style={{
            backgroundImage: `url(${chzzLiveContent.channelImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="">
          <p className="text-sm text-gray-100">{chzzLiveContent.liveTitle}</p>
          <p className="text-sm text-gray-500">{chzzLiveContent.channelName}</p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[rgb(182,157,158)] bg-[rgba(46,48,51,0.6)] rounded-lg px-2 py-1">
              {chzzLiveContent.liveCategoryValue}
            </span>
            {chzzLiveContent.tags.slice(0, 3).map((tag) => (
              <span
                className="text-[10px] text-gray-500 rounded-[5px] border-[1px] border-solid border-[rgba(255,255,255,0.15)] px-1 box-border"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ChzzkCard;
