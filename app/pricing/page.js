import PricingSection from "@/components/pricing/Pricing";

export async function generateMetadata() {
  return {
    title: "Pricing | Anvil - AI Agents & Automation Plans",
    description:
      "AI Agents and automation pricing for every scale. Choose a plan that fits your workflow, from free experimentation to pro-level AI deployments.",
    keywords: [
      "AI Agents Pricing",
      "Anvil Pricing",
      "Automation Cost",
      "Build AI Agents Free",
    ],
    alternates: {
      canonical: "https://anvil.io/pricing",
    },
    openGraph: {
      title: "Pricing | Anvil - AI Agents & Automation Plans",
      description:
        "AI Agents and automation pricing for every scale. Get started with Anvil today.",
      images: ["/logo/Pricing.jpg"],
    },
  };
}

const Pricing = () => {
  return <PricingSection />;
};

export default Pricing;
