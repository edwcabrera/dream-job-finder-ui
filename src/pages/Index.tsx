
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import JobCategories from "@/components/home/JobCategories";
import FeaturedJobs from "@/components/home/FeaturedJobs";
import PlatformBenefits from "@/components/home/PlatformBenefits";
import JobSubscription from "@/components/home/JobSubscription";
import BlogPreview from "@/components/home/BlogPreview";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <JobCategories />
      <FeaturedJobs />
      <PlatformBenefits />
      <JobSubscription />
      <BlogPreview />
      <CallToAction />
    </Layout>
  );
};

export default Index;
