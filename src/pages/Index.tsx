
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import RecentJobs from "@/components/home/RecentJobs";
import Testimonials from "@/components/home/Testimonials";
import Benefits from "@/components/home/Benefits";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <RecentJobs />
      <Testimonials />
      <Benefits />
    </Layout>
  );
};

export default Index;
