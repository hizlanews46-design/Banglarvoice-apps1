import React from 'react';
import { NewsItem } from '../types/news';

type Props = {
  news: NewsItem[];
  labelLatest: string;
};

export default function NewsGrid({ news, labelLatest }: Props) {
  return (
    <div className="lg:col-span-3 space-y-6">
      <div className="border-b border-gray-200 pb-3">
        <h2 className="text-xl font-extrabold text-[#002F6C] relative after:content-[''] after:absolute after:bottom-[-14px] after:left-0 after:w-16 after:h-[3px] after:bg-[#D32F2F]">
          {labelLatest}
        </h2>
      </div>

      {news && news.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-semibold text-[#002F6C]">
                  <span className="bg-[#002F6C]/5 px-2.5 py-0.5 rounded-md">{item.category || 'General'}</span>
                  <span className="text-gray-400">Auto-Post</span>
                </div>

                <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-[#002F6C] transition-colors duration-200 line-clamp-2">{item.title}</h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-4">{item.content}</p>
              </div>

              <div className="px-5 py-3 bg-gray-50/50 border-t border-gray-100 flex flex-col space-y-1.5 text-[10px] text-gray-400 font-normal">
                <div className="flex justify-between items-center text-gray-500 font-medium">
                  <span>{item.source || 'Desk'}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#002F6C] mx-auto mb-4"></div>
          <p className="text-gray-500">Connecting to 24/7 Automated Core Cloud Services Engine...</p>
        </div>
      )}
    </div>
  );
}
