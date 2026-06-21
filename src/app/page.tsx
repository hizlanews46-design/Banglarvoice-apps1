import React from 'react';
import { getAutomatedNews } from '../services/newsService';
import BreakingTicker from '../components/BreakingTicker';
import SportsCard from '../components/SportsCard';
import StudioCard from '../components/StudioCard';
import ReadingModeControl from '../components/ReadingModeControl';
import NewsGrid from '../components/NewsGrid';
import SidebarHub from '../components/SidebarHub';
import { NewsItem } from '../types/news';
import { decode } from '../lib/decode';

export default async function Page() {
  const news = (await getAutomatedNews()) as NewsItem[] || [];

  // Decode labels once on the server (avoids using Buffer on client)
  const labelBreaking = decode('4Kas4KeN4Kaw4KaV4KaXIOC4quC4p+C4oeC4reC4p+C4p+C4qiA=');
  const labelStudio = decode('4Kay4Ka+4KaH4KatIOC4quC4n+C4p+C4oeC4quC4vyAoQUkp');
  const labelSports = decode('4Kay4Ka+4KaH4KatIOC4quC4leC4reC4quC4leC4reC4o+C4p+C4qiA=');
  const labelEPaper = decode('4Kah4Ka_4KaX4Ka_4Kaf4Ka+4KayIOC4eV8=');
  const labelLatest = decode('4Ka44Kaw4KeN4Kat4Ka24KeH4Ka3IOC4quC4p+C4oeC4reC4p+C4p+C4qiA=');
  const labelPoll = decode('4Kaq4Ka+4Kah4KaVIOC4ruC4reC4quC4leC4reC4o+C4p+C4qiA=');
  const labelReadingMode = decode('4Kaw4KeA4Kah4Ka_4KaCIOC4reC4quC4leC4reC4o+C4p+C4qiA=');

  return (
    <div className="space-y-8 bg-[#F8FAFC] min-h-screen pb-12 font-sans">
      <BreakingTicker labelBreaking={labelBreaking} news={news} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <SportsCard labelSports={labelSports} />
          <div className="lg:col-span-2">
            <StudioCard labelStudio={labelStudio} />
          </div>
        </div>

        <ReadingModeControl labelReadingMode={labelReadingMode} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <NewsGrid news={news} labelLatest={labelLatest} />
          <SidebarHub labelEPaper={labelEPaper} labelPoll={labelPoll} />
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </div>
  );
}
