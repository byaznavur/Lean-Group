import Header from "../Header";
import Intro from "./Intro";
import Footer from "./../Footer/index";
import Certification from "../certification";
const Layout = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Certification />
      <Footer />
    </div>
  );
};

export default Layout;
