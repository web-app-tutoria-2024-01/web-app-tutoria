import { Box, Divider, Stack, Text, VStack } from "@chakra-ui/react"
import style from './Footer.module.css'
import { Link } from "react-router-dom"

export const Footer = () => {
   return (
      <>
         <Divider color={"black"} border={"solid 1px black"}/>
         <Box  as="footer" bg="#0094C6" color="white" py={7} px={4} position={"relative"} bottom={"0"}>
            
         <VStack spacing={4} justifyContent={"space-around"} flexDirection={"row"}>
            <Text className={style.MotionText} >
               <h2> <h2 style={{fontWeight: 900}}>Workshop</h2> de Fake News</h2>
            </Text>
            <Stack
               direction={{base: "column", md:  "row"}}
               spacing={{ base: 3, md: 8 }}
               align="right"
               className={style.LinksContainer}

            >
               <Link target={"blank"} to={"https://www.instagram.com/p/DBBfffKp-cu/?igsh=MTd5czBkYnV1MTNiZQ=="} style={{ textDecoration: 'none', color: 'gray.200' }}>Saiba Mais</Link>
               <Link target={"blank"} to={"https://aranoua.ifam.edu.br/"}  style={{ textDecoration: 'none', color: 'gray.200' }}>Projeto Aranouá</Link>
               <Link target={"blank"} to={"https://www.even3.com.br/21-semana-nacional-de-ciencia-e-tecnologia-snct-501497/"} style={{ textDecoration: 'none', color: 'gray.200' }}>Workshop</Link>
            </Stack>
         </VStack>
         </Box>
      </>
   )
}