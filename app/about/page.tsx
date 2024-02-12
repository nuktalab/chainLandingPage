import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | SafeChain - Your digital healthcare passport",
  description: "This is About Page for SafeChain",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
