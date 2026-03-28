"use client";

import Image from "next/image";

import { Button } from "../ui/button";
import Container from "../ui/container";

const PreCTA = () => {
  const handleLaunch = () => {
    window.open("https://app.deforge.io", "_blank");
  };

  const handleBrowse = () => {
    window.open("/agents");
  };

  return (
    <section
      id="pre-cta"
      className="bg-linear-to-t from-[#ecffe8] to-background"
    >
      <Container
        className="flex flex-col gap-4 py-12 sm:py-20! px-4! items-center"
        showGlow={false}
      >
        <div className="p-4 h-24 w-24 bg-black shadow-lg shadow-[#6fff52] flex items-center justify-center rounded-3xl opacity-80">
          <Image
            src="/logo/logo-black.svg"
            alt="Deforge"
            width={50}
            height={50}
            className="invert"
          />
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-2xl lg:text-4xl font-bold mt-2">
            Less Chaos, More Alpha
          </h2>

          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Connect your wallets, automate your DeFi workflows, and build
            unstoppable strategies with Anvil.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button
            size="lg"
            variant="outline"
            className="w-40 py-4 gap-2 border border-black"
            onClick={handleBrowse}
          >
            Browse Agents
          </Button>

          <Button
            size="lg"
            onClick={handleLaunch}
            className="w-40 py-4 gap-2 text-background bg-black/80"
          >
            Launch App
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PreCTA;
