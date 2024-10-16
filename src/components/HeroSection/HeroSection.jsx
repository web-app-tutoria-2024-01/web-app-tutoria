import { Box, Text, Image, background } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import img from '../../assets/fake_news_icon.png'
import styles from './HeroSection.module.css'
const HeroSection = () => {
   const MotionText = motion(Text);
  return (
  <>
    <Box
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      w="95%"
      h={{base: "50vh", md: "65vh"}}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        src={img}
        alt="Hero Image"
        w={{base: "10em", md: "20em"}} // adjust the image width
        objectFit="cover"
        borderRadius="10px"
        ml={"20px"}
      />
      <Text
        fontSize={{base: "medium", md: "xx-large"}} // increase the text size
        fontWeight="bold"
        className={styles.Font}
        color="#090C02"
        ml={4}
      >
        Você sabe como identificar Fake News?
      </Text>
      
    </Box>
    <MotionText
         className={styles.MotionText}
         whileHover={{
               color: '#fff',
               textDecoration: 'underline',
               fontStyle: 'italic',
               transition: { duration: 2 },
         }}
         m={4}
         fontSize={{base: "20px", md: "35px"}}
         bg={"#A72608"}
         color={"#fff"}>
         Nesse guia simplificado, apresentamos pontos importantes a serem avaliados antes de se compartilhar alguma notícia
      </MotionText>
      </>
  );
};

export default HeroSection;