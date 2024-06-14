import { Box, Flex, Heading, useBoolean, useBreakpointValue, useDisclosure } from "@chakra-ui/react"
import paperTexture from '../../assets/paper_texture.jpg'
import { motion } from "framer-motion";
import style from './StepBox.module.css'
import Lottie from "react-lottie";
import animationData from '../../assets/animation_click.json'
const MotionBox = motion(Box);

export const StepBox = (props) => {
  const { step } = props;
  const { isOpen, onToggle } = useDisclosure();
  const [isBackdropVisible, setIsBackdropVisible] = useBoolean();

  const handleClick = () => {
    onToggle();
    setIsBackdropVisible.toggle();
  };

  const boxWidth = useBreakpointValue({ base: '90%', md: isOpen ? '65%' : '50%' });

  return (
    <>
      {isBackdropVisible && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="blackAlpha.600"
          zIndex="overlay"
          onClick={handleClick}
        />
      )}
      <Flex justify="center" align="center" mt={10} mb={10}>
        <MotionBox
          width={boxWidth}
          height={isOpen ? "auto" : "350px"}
          backgroundImage={paperTexture}
          p={5}
          borderRadius="20px"
          cursor="pointer"
          onClick={handleClick}
          initial={{ height: '350px' }}
          animate={{ height: isOpen ? 'auto' : '350px', width: boxWidth }}
          overflow="hidden"
          position={isOpen ? 'relative' : 'static'}
          zIndex={isOpen ? 'modal' : 'auto'}
          mb={{ base: '50px', md: '100px' }} // Ajuste da margem inferior para diferentes tamanhos de tela
        >
          {/* <Lottie  animationData={animationData} style={{position: "relative", top: "5px", right: "10px"}} /> */}
          <Flex flexDirection="column" alignItems="center" justifyContent="center" gap={4}>
            <Heading mt="30px" className={style.TitleStep} textAlign={"center"} flexDirection={"column"}>
               <h1 style={{display: isOpen && "none"}}>#{step.id}</h1>{step.name}
            </Heading>
            {isOpen && (
              <Box mt={4} textAlign="center" className={style.description}>
                {step.description}
              </Box>
            )}
          </Flex>
        </MotionBox>
      </Flex>
    </>
  );
};