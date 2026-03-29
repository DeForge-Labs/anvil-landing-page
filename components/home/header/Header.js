"use client";

import NodeVisualizer from "@/components/NodeVisualizer";
import Container from "../../ui/container";

import HeaderTitle from "./HeaderTitle";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  const goToExternal = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="border-b border-black/30 text-black">
      <Container className="flex gap-10 flex-col pb-12 sm:pb-10 justify-center px-0!">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#DFE0E8_1.2px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
        <div className="mt-5 xl:mt-15 flex flex-col items-center text-center gap-6 md:gap-8">
          <div className="flex gap-4 items-center sm:flex-row flex-col"></div>

          <div
            className="text-xs font-medium p-1 border border-black/30 shadow-md bg-secondary/70 rounded-full px-3 flex items-center gap-2"
            aria-hidden
          >
            <div className="w-2 h-2 rounded-full bg-green-500">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
            </div>
            Now in Open-Alpha
          </div>

          <Image
            src="/icons/Avalanche_3D.png"
            alt="Coin Logo"
            width={120}
            height={120}
            className="absolute hidden md:block top-10 right-10 xl:top-30 xl:right-50 blur-[4px] opacity-50"
            aria-hidden
          />

          <Image
            src="/icons/Polygon_3D.png"
            alt="Coin Logo"
            width={120}
            height={120}
            className="absolute hidden md:block top-20 left-5 xl:top-20 xl:left-50 scale-x-[-1] blur-[4px] opacity-50"
            aria-hidden
          />

          <Image
            src="/icons/Solana_3D.png"
            alt="Coin Logo"
            width={120}
            height={120}
            className="absolute hidden md:block top-64 right-20 xl:top-72 xl:right-72 blur-[4px] opacity-50"
            aria-hidden
          />

          <Image
            src="/icons/Ethereum_3D.png"
            alt="Coin Logo"
            width={120}
            height={120}
            className="absolute hidden md:block top-72 left-20 xl:top-80 xl:left-72 scale-x-[-1] blur-[4px] opacity-50"
            aria-hidden
          />

          <HeaderTitle />

          <p className="text-sm text-gray-600 max-w-lg -mt-4 lg:-mt-6 px-4">
            Build your own Web3 Agents and Automations without writing a single
            line of code. Simply chat to build your agent and deploy it in
            minutes.
          </p>

          <div className="flex gap-3 justify-center items-center w-full">
            <Button
              size="sm"
              variant="outline"
              onClick={() => goToExternal("https://cal.com/deforge/sales")}
              className="text-sm rounded-sm p-2 px-3 border border-black/50"
            >
              Book a Demo
            </Button>
            <Button
              size="sm"
              onClick={() => goToExternal("https://app.runanvil.com")}
              className="text-sm font-normal rounded-sm p-2 px-3 shadow-lg shadow-[#6fff52]"
            >
              Get Started for Free
            </Button>
          </div>
        </div>

        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] -my-8 overflow-hidden rounded-xl">
          <NodeVisualizer />
        </div>
      </Container>
    </section>
  );
};

export default Header;
