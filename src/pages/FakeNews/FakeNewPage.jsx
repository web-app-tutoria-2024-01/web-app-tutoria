import { useContext, useState } from "react"
import { globalContext } from "../../providers/globalContext"
import { StepBox, TypeBox } from "../../components"
import { motion } from "framer-motion"
import style from './FakeNewsPage.module.css'
import { Divider, Flex, Heading, Text } from "@chakra-ui/react"

export const FakeNewsPage = () => {
   const { step, type } = useContext(globalContext);

   return (
     <Flex flexDirection={"column"} backgroundColor={"#F7F2B5"}>
       <Flex flexDirection={"column"} width={{ base: "100%", md: "80%" }} margin={"0 auto"} mt={"10vh"}>
         <Divider border={"1px double black"} />
         <Heading textAlign={"center"} className={style.Font} margin={"2em 0"}>
           O que fazer quando encontrar algum conteúdo suspeito?
         </Heading>
         <Divider border={"1px double black"} />
         {step.map((e) => <StepBox key={e.id} step={e} />)}
         <Divider border={"1px double black"} />
         <Heading textAlign={"center"} className={style.Font} margin={"2em 0"}>
           Recursos e Formas de Desinformar
         </Heading>
         <Divider border={"1px double black"} />
         {type.map((t) => (
           <Flex key={t.id} flexDirection={"column"} alignItems={"center"} margin={"2em 0"}>
             <TypeBox type={t} />
           </Flex>
         ))}
       </Flex>
     </Flex>
   );
 };