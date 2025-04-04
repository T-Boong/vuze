import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function VuzeGrandOpenBanner() {
  return (
    <motion.div
      className="w-full max-w-4xl mx-auto p-4 hidden lg:block"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="rounded-2xl shadow-xl border bg-white p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="text-yellow-500 w-6 h-6" />
            <h2 className="text-2xl font-bold text-gray-800">
              VUZE 그랜드 오픈 🎉
            </h2>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            지금 바로 다양한 스트리머들을 한 눈에 만나보세요
          </p>
          <button className="rounded-full px-6 py-2 text-base font-semibold cursor-pointer hover:underline">
            둘러보기
          </button>
        </div>
      </div>
    </motion.div>
  );
}
