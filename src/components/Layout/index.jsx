import Header from "../Header";
import Intro from "./Intro";
import Footer from "./../Footer/index";
import Certification from "../certification";
import OurProducts from "../ourproducts";
import InfoProducts from "../info";
import TeamOur from "../team";
import Product from "../newProducts";
const Layout = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Certification />
      <OurProducts />
      <InfoProducts />
      <TeamOur />
      <Product />
      <Footer />
    </div>
  );
};

export default Layout;
