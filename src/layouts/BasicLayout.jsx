import { Outlet } from "react-router-dom";
import { Header, Footer, Content } from "../components";
import HeroSection from "../components/HeroSection/HeroSection";


export const BasicLayout = () => {
   return (
      <>
      <Header />
      <Content>
         <HeroSection/>
         <Outlet />
      </Content>
      <Footer />
      </>
   )
}