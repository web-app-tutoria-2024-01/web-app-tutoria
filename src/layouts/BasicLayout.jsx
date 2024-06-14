import { Outlet } from "react-router-dom";
import { Header, Footer, Content } from "../components";


export const BasicLayout = () => {
   return (
      <>
      <Header />
      <Content>
         <Outlet />
      </Content>
      <Footer />
      </>
   )
}