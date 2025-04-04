import { YoutubeVideoItem } from "@/types/youtube/live";
import youtubeChannelData from "@/constants/mocks/youtubeChannelData";
import truncate from "@/app/utils/truncate";
import { Radio } from "lucide-react";

interface YoutubeCardProps {
  data: YoutubeVideoItem;
}

const YoutubeCard = ({ data }: YoutubeCardProps) => {
  const channelData = youtubeChannelData.items.find(
    (channel) => channel.id === data.snippet.channelId
  );
  console.log(channelData);
  return (
    <li className="cursor-pointer flex flex-col gap-2">
      <div
        className="border-1 border-gray-800 relative w-[300px] h-[180px] bg-gray-200 rounded-lg p-2 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${data.snippet.thumbnails.high.url})`,
        }}
      >
        <div className="absolute right-3 bottom-3 w-[65px] h-[20px] flex gap-x-1 rounded-sm bg-red-700 justify-center items-center">
          <Radio className="text-white text-[10px] stroke-1" size={18} />
          <span className="text-[13px] font-semibold">실시간</span>
        </div>
      </div>
      <div className="w-[300px] flex gap-2">
        <div
          className="w-[40px] h-[40px] bg-white rounded-full box-border shrink-0"
          style={{
            backgroundImage: `url(${channelData!.snippet.thumbnails.high.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <section className="flex flex-col gap-[2px]">
          <p className="text-sm text-gray-100">
            {truncate(data.snippet.title, 45)}
          </p>
          <p className="text-sm text-gray-500">{data.snippet.channelTitle}</p>
        </section>
      </div>
    </li>
  );
};

export default YoutubeCard;
