"use client";
import React, { useState } from 'react';

type Props = {
  labelReadingMode: string;
};

export default function ReadingModeControl({ labelReadingMode }: Props) {
  const [size, setSize] = useState(16);
  const [dark, setDark] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
        <span>{labelReadingMode}:</span>
        <button className="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-800" onClick={() => setSize((s) => s + 1)}>
          A+
        </button>
        <button className="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-800" onClick={() => setSize((s) => Math.max(12, s - 1))}>
          A-
        </button>
        <button className="px-2.5 py-1 bg-gray-900 text-white rounded" onClick={() => setDark((d) => !d)}>
          {dark ? 'Light ☼' : 'Dark ☾'}
        </button>
      </div>
      <div className="flex items-center gap-3 text-xs text-gray-400">
        <span>RSS Sync: Active</span>
        <span>•</span>
        <span>API Pipeline: Standard</span>
      </div>
    </div>
  );
}
