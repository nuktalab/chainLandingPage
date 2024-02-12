import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | SafeChain - Your digital healthcare passport",
  description: "Contact Page for SafeChain",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      

      <Contact />
    </>
  );
};

export default ContactPage;
