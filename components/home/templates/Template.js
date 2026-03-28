import Image from "next/image";

import { Badge } from "../../ui/badge";
import Container from "../../ui/container";

import TemplateCard from "./TemplateCard";

const TEMPLATES = [
  {
    icon: (
      <Image src="/icons/sniper.png" alt="Sniper icon" width={60} height={60} />
    ),
    embedded: true,
    title: "Liquidity Pool Sniper",
    description:
      "Monitors DEX factory contracts for new pool creations. Instantly verifies liquidity locks and token contract safety before executing a buy transaction in the same block to secure the best entry price",
    className: "block md:hidden",
  },

  {
    icon: (
      <Image
        src="/icons/sniper.png"
        alt="Sniper icon large"
        width={200}
        height={200}
        className="absolute bottom-5 right-5 w-30 h-30"
      />
    ),
    title: "Liquidity Pool Sniper",
    description:
      "Monitors DEX factory contracts for new pool creations. Instantly verifies liquidity locks and token contract safety before executing a buy transaction in the same block to secure the best entry price.",
    className: "row-span-2 md:block hidden",
  },

  {
    icon: (
      <Image
        src="/icons/piggybank.png"
        alt="Piggy Bank icon"
        width={60}
        height={60}
      />
    ),
    embedded: true,
    title: "Airdrop Farmer",
    description:
      "Automates weekly interactions with testnets and target protocols to maintain active wallet status for potential future airdrops.",
  },

  {
    icon: (
      <Image src="/icons/health.png" alt="Health icon" width={60} height={60} />
    ),
    embedded: true,
    title: "Health Factor Protector",
    description:
      "Monitors your Aave or Compound loans. If your health factor drops below a threshold, it automatically repays debt to prevent liquidation.",
  },

  {
    icon: <Image src="/icons/eye.png" alt="Eye icon" width={60} height={60} />,
    embedded: true,
    title: "Whale Wallet Tracker",
    description:
      "Tracks specific high-value wallets. When they make a swap over a certain USD value, it sends an instant alert to your Telegram.",
  },

  {
    icon: (
      <Image
        src="/icons/templates.png"
        alt="Templates icon"
        width={200}
        height={200}
        className="absolute bottom-5 right-5 w-30 h-30"
      />
    ),
    title: "Strategy Gallery",
    description:
      "Browse what other traders have built using our platform, DCA bots, grid trading setups, impermanent loss protectors, and more. Clone and modify any public strategy.",
    className: "row-span-2 md:block hidden",
  },

  {
    icon: (
      <Image src="/icons/stocks.png" alt="Stocks icon" width={60} height={60} />
    ),
    embedded: true,
    title: "Cross-Chain Arbitrage",
    description:
      "Monitors price discrepancies between DEXs on different chains and executes profitable arbitrage trades automatically.",
  },

  {
    icon: (
      <Image src="/icons/frog.png" alt="Frog icon" width={60} height={60} />
    ),
    embedded: true,
    title: "Auto-Compound Yield",
    description:
      "Automatically harvests your farming rewards, swaps them for the underlying LP tokens, and reinvests them to maximize your APY.",
  },

  {
    icon: (
      <Image
        src="/icons/templates.png"
        alt="Templates icon"
        width={60}
        height={60}
      />
    ),
    embedded: true,
    title: "Strategy Gallery",
    description:
      "Browse what other traders have built using our platform, DCA bots, grid trading setups, impermanent loss protectors, and more. Clone and modify any public strategy.",
    className: "block md:hidden",
  },
];

export default function Template() {
  return (
    <section className="text-black border-b border-black/30">
      <Container className="flex flex-col py-12 lg:py-20 px-4! sm:px-20! gap-16">
        <div className="text-center space-y-2">
          <Badge className="bg-secondary border border-black/50 text-black/50 px-3 py-1 rounded-xl">
            Deploy Strategies Instantly
          </Badge>

          <h2 className="text-2xl lg:text-4xl font-bold mt-2">
            Deploy AI Agents using Forms
          </h2>

          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Use our pre-built templates to get started with DeFi automation and
            deploy them with a single click. Just configure your parameters and
            you're ready to go.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TEMPLATES.map((item, idx) => (
            <TemplateCard key={idx} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
