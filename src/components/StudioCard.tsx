import React from 'react';

type Props = {
  labelStudio: string;
};

export default function StudioCard({ labelStudio }: Props) {
  return (
    <div className="lg:col-span-2 bg-gradient-to-br from-[#001f4d] to-[#002F6C] rounded-2xl shadow-xl p-5 text-white flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black select-none pointer-events-none">TV</div>
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <h2 className="text-md font-bold flex items-center gap-2 tracking-wide text-amber-400">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
          {labelStudio}
        </h2>
        <span className="text-[10px] bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2.5 py-0.5 rounded-full font-bold">HOURLY UPDATE</span>
      </div>

      <div className="relative aspect-video w-full bg-black/40 rounded-xl overflow-hidden border border-white/5 flex flex-col items-center justify-center group-hover:border-white/20 transition-all duration-300">
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-[10px] px-2 py-0.5 rounded border border-white/10 text-gray-300">
          Anchor Node: AI-04 (Premium Presenter Portfolio)
        </div>

        <div className="w-14 h-14 rounded-full bg-white text-[#002F6C] flex items-center justify-center shadow-lg cursor-pointer transform group-hover:scale-110 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 ml-1"><path d="M8 5v14l11-7z"/></svg>
        </div>

        <div className="absolute bottom-3 right-3 left-3 bg-black/60 backdrop-blur-md p-2 rounded-lg border border-white/10 text-center text-xs text-gray-200 line-clamp-1">
          सर्वश्रेष्ठ गुरु���्वपूर्ण संवाद उपस्थापना कर्रहें कृत्रिम बुद्धिमत्ता की सुदर्शन एशीय मडेल प्रतिनिधि।
        </div>
      </div>
    </div>
  );
}
