import React from 'react';

type Props = {
  labelEPaper: string;
  labelPoll: string;
};

export default function SidebarHub({ labelEPaper, labelPoll }: Props) {
  return (
    <div className="lg:col-span-1 space-y-8">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
        <div className="border-b border-gray-100 pb-2">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#002F6C]"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
            {labelEPaper}
          </h3>
        </div>
        <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl aspect-[3/4] border border-gray-200 relative flex flex-col items-center justify-center group cursor-pointer shadow-inner">
          <div className="w-12 h-12 rounded-full bg-[#002F6C] text-white flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity shadow-md z-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604zM10.5 7.5v6m3-3h-6" /></svg>
          </div>
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors rounded-xl"></div>
        </div>
        <button className="w-full text-center bg-[#002F6C]/5 text-[#002F6C] hover:bg-[#002F6C]/10 text-xs font-bold py-2 rounded-xl border border-[#002F6C]/10 transition-colors">Browse Archived PDF Editions</button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
        <div className="border-b border-gray-100 pb-2">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">{labelPoll}</h3>
        </div>
        <div className="space-y-3">
          <p className="text-xs text-gray-700 font-medium leading-relaxed">आपनी कि मने कराें कृत्रिम बुद्धिमत्ता (AI) प्रयुक्ति ब्यबहारकी फलमा संवादमाध्यमकी निरपेक्षता बृद्धि पाबे?</p>
          <div className="space-y-2 pt-1">
            <button className="w-full text-left bg-gray-50 hover:bg-gray-100 text-xs text-gray-800 px-3 py-2.5 rounded-lg border border-gray-200/60 font-medium transition-colors flex justify-between"><span>हो (Yes)</span><span className="text-gray-400">62%</span></button>
            <button className="w-full text-left bg-gray-50 hover:bg-gray-100 text-xs text-gray-800 px-3 py-2.5 rounded-lg border border-gray-200/60 font-medium transition-colors flex justify-between"><span>होइन (No)</span><span className="text-gray-400">29%</span></button>
            <button className="w-full text-left bg-gray-50 hover:bg-gray-100 text-xs text-gray-800 px-3 py-2.5 rounded-lg border border-gray-200/60 font-medium transition-colors flex justify-between"><span>मन्तब्य नेई (No Comment)</span><span className="text-gray-400">9%</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}
