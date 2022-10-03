import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Legal from "../components/Legal";

const LegalPage = () => {
  return (
    <div>
      <Header />
      <Legal />
      <Footer />
    </div>
  );
};

LegalPage.Layout = Layout;
export default LegalPage;
