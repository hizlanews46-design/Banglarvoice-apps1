import React from 'react';

type Props = {
  labelSports: string;
};

export default function SportsCard({ labelSports }: Props) {
  return (
    <div className="lg:col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
          <h2 className="text-md font-bold text-[#002F6C] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
            {labelSports}
          </h2>
          <span className="text-[10px] bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-medium">LIVE</span>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 text-center space-y-3">
          <div className="text-[11px] text-gray-400 font-semibold uppercase tracking-wide">Football Premier League</div>
          <div className="flex items-center justify-between px-2">
            <span className="font-bold text-gray-800 text-sm">Abahani Limited</span>
            <span className="text-xl font-black text-[#002F6C] bg-white px-3 py-1 rounded-lg border border-gray-100">2</span>
          </div>
          <div className="text-xs text-gray-400 font-bold">VS</div>
          <div className="flex items-center justify-between px-2">
            <span className="font-bold text-gray-800 text-sm">Mohammedan SC</span>
            <span className="text-xl font-black text-[#002F6C] bg-white px-3 py-1 rounded-lg border border-gray-100">1</span>
          </div>
          <div className="text-[11px] text-red-500 font-medium animate-pulse pt-1">74' Mins Played</div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 grid grid-cols-3 text-center text-[11px] text-gray-500 font-medium">
        <div className="hover:text-[#002F6C] cursor-pointer">Scoreboard</div>
        <div className="border-x border-gray-100 hover:text-[#002F6C] cursor-pointer">Points Table</div>
        <div className="hover:text-[#002F6C] cursor-pointer">Schedules</div>
      </div>
    </div>
  );
}
