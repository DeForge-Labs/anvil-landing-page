import Enterprise from "@/components/home/enterprise/Enterprise";
import Features from "@/components/home/feature/Feature";
import Header from "@/components/home/header/Header";
import PreCTA from "@/components/home/PreCTA";
import Template from "@/components/home/templates/Template";

const Home = () => {
  return (
    <>
      <Header />
      <Features />
      <Template />
      <Enterprise />
      <PreCTA />
    </>
  );
};

export default Home;
