import { Box, Flex, Heading, useBoolean, useBreakpointValue, useDisclosure, Text, Image, Icon } from "@chakra-ui/react"
import paperTexture from '../../assets/paper_texture.jpg'
import { motion } from "framer-motion";
import style from './StepBox.module.css';
import { GiClick } from "react-icons/gi";
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
           position="relative" 
           zIndex={isOpen ? "modal" : "auto"}
           mb={{ base: '50px', md: '100px' }}
         >
           {!isOpen && (
             <Icon
               as={GiClick}
               position="absolute"
               top="20px"
               right="20px"
               size="sm"
               width="25px"
               height="25px"
               aria-label="Toggle Step"
               zIndex="tooltip" 
             />
           )}

           <Flex flexDirection={"column"} alignItems="center" justifyContent="center" gap={4}>
             <Heading mt="30px" className={style.TitleStep} textAlign={"center"} flexDirection={"column"}>
               <h1 style={{ display: isOpen && "none" }}>#{step.id}</h1>{step.name}
             </Heading>

             {isOpen && (
               <>
                 <Box mt={4} textAlign="center" className={style.description}>
                   {step.description}
                 </Box>

                 {/* Verifica se a imagem existe e exibe */}
                 {step.image && (
                   <Flex flexDirection="column" alignItems="center" mt={4}>
                     <Image
                       src={step.image.src}  // Caminho da imagem
                       alt={step.name}
                       width="20em"
                       objectFit="cover"
                       borderRadius="10px"
                       border={"1px solid black"}
                     />
                     <Text textAlign="center" fontStyle="italic" mt={2}>
                       {step.image.legenda}
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