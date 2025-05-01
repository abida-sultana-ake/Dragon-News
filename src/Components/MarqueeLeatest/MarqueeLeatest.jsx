import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeLeatest = () => {
  return (
    <div>
      <div className="flex items-center gap-4 bg-base-200 p-4">
        <p className="text-base-100 bg-secondary px-3 py-2">Leatest</p>
        <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
          <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
            ⚽ Match Day: ULAB FC vs NSU United – May 4, 4 PM | 📍 Venue: ULAB
            Field | 🎟️ Free Entry for Students | 🏆 Inter-University Football
            League 2025 is ON!
          </p>
          <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
            🥅 Big Clash: Dhaka Strikers vs Chittagong Warriors – May 6, 6:30 PM
            | 🔥 Live Screening at Campus Canteen | 🎉 Win Team Merch in
            Halftime Quiz | 🗓️ Stay Tuned for More Match Updates!
          </p>
          <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
            🏆 Championship Alert: FC Tigers vs Red Bulls – May 8, 7 PM | ⚽
            Fans’ Night Out at the Stadium | 🎟️ Early Bird Tickets Available Now
            | 📲 Follow us for Live Updates!
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeLeatest;