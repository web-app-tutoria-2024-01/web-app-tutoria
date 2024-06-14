import { useContext, useEffect, useState } from "react"
import { globalContext } from "../../providers/globalContext"
import { StepBox, TypeBox } from "../../components"
import { motion } from "framer-motion"
import style from './FakeNewsPage.module.css'
import { Divider, Flex, Heading, Image } from "@chakra-ui/react"
import img from '../../assets/fake_news_icon.png'
import Lottie from "react-lottie"
const splitText = (text) => text.split('');

const TextAnimation = ({ text, onAnimationComplete }) => {
  const letters = splitText(text);

  return (
    <Heading className={style.Font} fontSize={{ base: "20px", md: "45px" }}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          onAnimationComplete={() => {
            if (index === letters.length - 1) {
              onAnimationComplete();
            }
          }}
          style={{ whiteSpace: 'pre' }}
        >
          {letter}
        </motion.span>
      ))}
    </Heading>
  );
};

export const FakeNewsPage = () => {
  const { step, type } = useContext(globalContext);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

  return (
    <Flex flexDirection={"column"} backgroundColor={"#F7F2B5"}>
      <Flex 
 
        padding={{ base: "20% 5%", md: "20% 15%" }}
        flexDirection={{ base: "column-reverse", md: "row" }}
        alignItems={"center"}
        margin={"0 auto"}
      >
        <Image src={img} width={"20em"} height={"20em"} />
        <TextAnimation text="Saiba como identificar Fake News" onAnimationComplete={handleAnimationComplete} />
      </Flex>
      <Flex flexDirection={"column"} width={{base: "100%", md: "80%"}} margin={"0 auto"}>
        <Divider border={"1px double black"} />
        {step.map((e) => <StepBox key={e.id} step={e} />)} 
        <Divider border={"1px double black"} />
        <Heading textAlign={"center"} className={style.Font} margin={"2em 0"}>
            Tipos de conteúdo que podem conter informações falsas
        </Heading>
        <Divider border={"1px double black"} />
        {type.map((t) => <TypeBox key={t.id} type={t} />)}       
      </Flex>
    </Flex>
  );
};