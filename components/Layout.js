import Header from "./Header";
import Nav from "./Nav";
import { Sora } from "next/font/google";
import TopLeftImg from "./TopLeftImg";

const sora = Sora({
  subsets: ["latin"],
  variable: ["--font-sore"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <>
      <div className="body-overlay"></div>
      <Nav />
      <Header />
      {children}
    </>
  );
};

export default Layout;
