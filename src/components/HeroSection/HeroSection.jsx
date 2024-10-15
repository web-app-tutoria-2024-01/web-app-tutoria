import { Box, Text, Image } from '@chakra-ui/react';
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
      h="65vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        src={img}
        alt="Hero Image"
        w="20em" // adjust the image width
        objectFit="cover"
        borderRadius="10px"
      />
      <Text
        fontSize="4xl" // increase the text size
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
               color: '#E6EED6',
               textDecoration: 'underline',
               fontStyle: 'italic',
               transition: { duration: 2 },
         }}
         ml={4}
         bg={"#A72608"}
         color={"#fff"}>
         Nesse guia simplificado, apresentamos pontos importantes a serem avaliados antes de se compartilhar alguma notícia
      </MotionText>
      </>
  );
};

export default HeroSection;