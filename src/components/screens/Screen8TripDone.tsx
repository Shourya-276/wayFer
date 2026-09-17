import React from 'react';
import { CheckCircle2, Star, Zap, Receipt, ArrowRight } from 'lucide-react';

export const Screen8TripDone: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0A0A0A] text-white flex flex-col justify-between p-4 relative overflow-hidden font-sans text-xs select-none">
      <div className="text-center pt-2">
        {/* Success Icon */}
        <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-2 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          <CheckCircle2 className="w-6 h-6 text-white" />
        </div>
        <span className="px-2 py-0.5 rounded-full bg-white/10 text-white font-bold text-[9px] uppercase tracking-wider border border-white/15">
          Journey Completed
        </span>
        <h3 className="text-base font-extrabold text-white mt-1">You Arrived!</h3>
        <p className="text-[10px] text-neutral-400">Chennai International Airport (MAA)</p>
      </div>

      {/* Economics & Fare Split Card */}
      <div className="bg-[#121212] rounded-2xl p-3 border border-white/15 shadow-2xl space-y-2.5">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-1.5 text-[10px] text-neutral-300">
            <Receipt className="w-3.5 h-3.5 text-white" />
            <span className="font-semibold">Shared Fare Summary</span>
          </div>
          <span className="text-[9px] text-neutral-400">2 Riders</span>
        </div>

        <div className="space-y-1.5 text-[10px]">
          <div className="flex justify-between text-neutral-400">
            <span>Solo Cab Fare (Est.)</span>
            <span className="line-through text-neutral-600">₹1,020</span>
          </div>
          <div className="flex justify-between font-bold text-white text-xs">
            <span>Your Split (50%)</span>
            <span className="text-white">₹510</span>
          </div>
        </div>

        {/* Highlight Savings Pill */}
        <div className="p-2 rounded-xl bg-white/10 border border-white/20 flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-1 text-white font-bold">
            <Zap className="w-3.5 h-3.5 fill-white" />
            <span>You Saved</span>
          </div>
          <span className="font-extrabold text-white">₹510</span>
        </div>
      </div>

      {/* Rating & Review */}
      <div className="space-y-2">
        <div className="text-center">
          <div className="text-[10px] text-neutral-400 mb-1">Rate your co-rider Rahul</div>
          <div className="flex items-center justify-center gap-1 text-white">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 fill-white text-white" />
            ))}
          </div>
        </div>

        <button className="w-full py-2.5 rounded-xl bg-white text-black font-bold text-[11px] uppercase tracking-wider shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center justify-center gap-1">
          Done
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
