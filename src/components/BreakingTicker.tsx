import React from 'react';
import { NewsItem } from '../types/news';

type Props = {
  labelBreaking: string;
  news: NewsItem[];
};

export default function BreakingTicker({ labelBreaking, news }: Props) {
  return (
    <div className="bg-[#D32F2F] text-white py-2.5 px-4 shadow-md overflow-hidden flex items-center z-50">
      <span className="bg-white text-[#D32F2F] font-bold text-xs sm:text-sm px-3 py-1 rounded-md uppercase tracking-wider shrink-0 mr-4 animate-pulse">
        {labelBreaking}
      </span>
      <div className="relative w-full overflow-hidden whitespace-nowrap text-xs sm:text-sm font-medium">
        <div className="inline-block animate-[marquee_30s_linear_infinite] hover:pause">
          {news && news.length > 0 ? news.map((n) => ` • ${n.title} `) : '২৪/৭ নিরবিচ্ছিন্ন সংবাদ পরিবেশনায় স্বাগতম... '}
        </div>
      </div>
    </div>
  );
}
