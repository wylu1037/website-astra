import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Props {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="flex w-full flex-col items-center">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default MarketingLayout;
