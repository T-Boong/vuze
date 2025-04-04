import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-[30%] relative items-center hidden lg:flex">
      <input
        className="bg-[#222] w-full p-2 rounded-4xl border-1 border-[#333] placeholder:text-[#555] pl-5 outline-none text-gray-500"
        placeholder="관심 있는 스트리머를 찾아보세요"
      />
      <Search className="text-[#555] absolute right-5 cursor-pointer" />
    </div>
  );
};

export default SearchBar;
