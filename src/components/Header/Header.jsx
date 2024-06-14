import { Divider, Flex, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import style from './Header.module.css'
const MotionText = motion(Text)
export const Header = () => {
   return (
      <>
      <Flex alignItems={"center"}>
         <Flex position={"relative"} top={"0"} padding={"10px 15px"}>
               <MotionText className={style.MotionText}
               whileHover={{
                  color: '#251101',
                  textDecoration: 'underline',
                  fontStyle: 'italic',
                  transition: { duration: 2 },
               }}
            >
               <h2> <h2 style={{fontWeight: "bold"}}>Workshop</h2> de Fake News</h2>
            </MotionText>
         </Flex>
         <Flex>
         </Flex>
      </Flex>
      <Divider className={style.Divider} color={"black"} border={"1px solid black"}  />
      </>
   )
}