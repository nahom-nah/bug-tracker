import React from "react";
import router, { useRouter } from "next/router";
interface CallbackProps {}

const Callback: React.FC<CallbackProps> = () => {
  return (
    <div>
      <div className="text-2xl font-semibold">Loading...</div>
    </div>
  );
};

export default Callback;
