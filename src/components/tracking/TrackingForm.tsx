"use client";

import { useState } from "react";
import Script from "next/script";
import { Search, Loader2 } from "lucide-react";

declare global {
  interface Window {
    YQV5: {
      trackSingle: (opts: {
        YQ_ContainerId: string;
        YQ_Height: number;
        YQ_Lang: string;
        YQ_Num: string;
      }) => void;
    };
  }
}

export function TrackingForm() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [tracked, setTracked] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const num = trackingNumber.trim();
    if (num.length < 5) return;

    if (window.YQV5) {
      setLoading(true);
      setTracked(true);
      window.YQV5.trackSingle({
        YQ_ContainerId: "YQContainer",
        YQ_Height: 560,
        YQ_Lang: "en",
        YQ_Num: num,
      });
      setTimeout(() => setLoading(false), 2000);
    }
  };

  return (
    <>
      <Script
        src="//www.17track.net/externalcall.js"
        strategy="lazyOnload"
        onLoad={() => setScriptLoaded(true)}
      />

      <form onSubmit={handleTrack} className="mx-auto max-w-2xl">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Enter your tracking number"
              className="w-full rounded-lg border border-slate-300 bg-white py-3.5 pl-12 pr-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            />
          </div>
          <button
            type="submit"
            disabled={trackingNumber.trim().length < 5 || !scriptLoaded}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              "Track Package"
            )}
          </button>
        </div>
        <p className="mt-3 text-center text-sm text-slate-500">
          You can find your tracking number in your order confirmation email.
        </p>
      </form>

      {/* Results container */}
      {tracked && (
        <div className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div id="YQContainer" className="min-h-[200px]" />
        </div>
      )}
    </>
  );
}
