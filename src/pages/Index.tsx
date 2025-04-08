
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Track Flow - Intelligent Logistics Management Platform</title>
      </Helmet>
      <MainLayout>
        <Hero />
        <Features />
        <Testimonials />
        <CallToAction />
        <Footer />
      </MainLayout>
    </>
  );
};

export default Index;
