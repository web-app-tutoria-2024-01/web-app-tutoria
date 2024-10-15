import { Box, Flex, Heading, useBoolean, useBreakpointValue, useDisclosure, Text, Image } from "@chakra-ui/react";
import paperTexture from '../../assets/paper_texture.jpg';
import { motion } from "framer-motion";
import style from './TypesBox.module.css'

const MotionBox = motion(Box);

export const TypeBox = (props) => {
  const { type } = props;
  const { isOpen, onToggle } = useDisclosure();
  const [isBackdropVisible, setIsBackdropVisible] = useBoolean();

  const handleClick = () => {
    onToggle();
    setIsBackdropVisible.toggle();
  };

  const boxWidth = useBreakpointValue({ base: '90%', md: isOpen ? '75%' : '70%' })

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
          <Flex flexDirection="column" alignItems="center" justifyContent="center" gap={4}>
            <Heading mt="30px" className={style.TitleStep} textAlign={"center"} flexDirection={"column"}>
              <h1 style={{ display: isOpen && "none" }}>#{type.id}</h1>
              {type.name}
            </Heading>
            
            {isOpen && (
              <>
                <Box mt={4} textAlign="center" className={style.description}>
                  {type.description}
                </Box>
                {console.log(type)}
                {type.image && (
                  <Flex flexDirection="column" alignItems="center" mt={4}>
                    <Image
                      src={type.image.src}
                      alt={type.name}
                      width="20em"
                      borderRadius="10px"
                      mb={4}
                      border={"1px solid black"}
                    />
                    <Text textAlign="center" fontStyle="italic">
                      {type.image.legenda}
                    </Text>
                  </Flex>
                )}
              </>
            )}
          </Flex>
        </MotionBox>
      </Flex>
    </>
  );
};