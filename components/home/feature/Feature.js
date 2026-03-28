import Image from "next/image";

import { Badge } from "../../ui/badge";
import Container from "../../ui/container";
import FeatureCard from "./FeatureCard";

const FEATURES = [
  {
    icon: "/icons/nodes.svg",
    title: "Visual Strategy Builder",
    description:
      "Drag, drop, and connect nodes to build your trading logic and DeFi workflows with our intuitive visual editor.",
  },

  {
    icon: "/icons/chains.svg",
    title: "Multi-Chain Support",
    description:
      "Execute transactions seamlessly across Ethereum, Arbitrum, Optimism, Base, and Polygon from a unified interface.",
  },

  {
    icon: "/icons/puzzle.svg",
    title: "Pre-built Templates",
    description:
      "Choose from dozens of pre-built strategies like yield auto-compounding and deploy them with a single click.",
  },

  {
    icon: "/icons/settings.svg",
    title: "Custom Contract Calls",
    description:
      "Interact with any verified smart contract. Just paste the address and we'll parse the ABI for you automatically.",
  },

  {
    icon: "/icons/message.png",
    title: "AI Strategy Generation",
    description:
      "Describe your ideal trading strategy in plain English and let our AI assemble the node workflow for you.",
  },

  {
    icon: "/icons/lock.svg",
    title: "Secure Execution",
    description:
      "Non-custodial architecture. We use secure enclaves and smart accounts so you never give up control of your funds.",
  },
];

export default function Features() {
  return (
    <section id="features" className="border-b border-black/30">
      <Container className="flex flex-col gap-16 py-12 sm:py-20 sm:px-20! px-4!">
        <div className="text-center space-y-2">
          <Badge className="bg-secondary border border-black/50 text-black/50 px-3 py-1 rounded-xl">
            Features
          </Badge>

          <h2 className="text-2xl lg:text-4xl font-bold mt-2">
            Feature packed, yet intuitive
          </h2>

          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Create AI workflows in minutes, search through your wallets and
            protocols, have AI interface with your smart contracts, too.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURES.map((f) => (
            <FeatureCard
              key={f.title}
              title={f.title}
              description={f.description}
              icon={<Image width={40} height={40} src={f.icon} alt={f.title} />}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
