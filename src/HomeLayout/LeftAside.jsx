import React, { Suspense } from "react";
import Cata from "./Cata";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Cata></Cata>
      </Suspense>
    </div>
  );
};

export default LeftAside;
