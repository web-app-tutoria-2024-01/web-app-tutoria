import { Route, Routes } from "react-router-dom"
import { BasicLayout } from "../layouts/BasicLayout"
import { FakeNewsPage } from "../pages"
export const Routers = () => {
   return (
      <Routes>
         <Route path={"/"} element={<BasicLayout/>}>
            <Route index element={<FakeNewsPage/>} />
         </Route>
      </Routes>
      
   )
}