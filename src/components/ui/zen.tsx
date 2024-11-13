import React from 'react';
import CreateAccount from './create-account';
import { BackgroundBeams } from "../ui/background-beams";

const Zen: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
      <BackgroundBeams />
      <div className="relative z-10">
        <CreateAccount />
      </div>
    </div>
  );
};

export default Zen;