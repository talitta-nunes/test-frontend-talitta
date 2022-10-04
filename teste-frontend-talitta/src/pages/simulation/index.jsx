import {
  Center,
  VStack,
  Heading,
  HStack,
  Text,
  chakra,
} from "@chakra-ui/react";
import Input from "../../components/input";
import { useState } from "react";
import { useSimulate } from "../../providers/simulator";

const Simulation = () => {
  const {
    simulation,
    tomorrow,
    fifteen,
    thirty,
    ninety,
  } = useSimulate();

   const [amount, setAmount] = useState();
   const [installments, setInstallments] = useState();
   const [mdr, setMdr] = useState();


  return (
    <Center w={"100vw"} h={"100vh"} bgColor={"#a7b3df"}>
      <HStack w={"90%"} maxW={"500px"} bgColor={"blue.100"}>
        <VStack
          w={"80%"}
          maxW={"350px"}
          border={"transparent"}
          p={3}
          bgColor={"gray.300"}
          as={"form"}
         
        >
          <Heading
            textAlign={"center"}
            fontSize={"20px"}
            textColor={"gray.500"}
          >
            Simule sua antecipação
          </Heading>

          <Input
            name={"sell"}
            placeholder="Venda"
            label="Informe o valor da venda"
            value={amount || ""}
            onChange={(e) => {
              simulation(amount, installments,  mdr)
              setAmount(e.target.value)}}
          />
          <Input
            name={"pieces"}
            placeholder="Parcelas"
            label="Em quantas parcelas "
            value={installments || ""}
            onChange={(e) => {
              simulation(amount, installments, mdr);
              setInstallments(e.target.value)}}
          />
          <chakra.span color={"gray.500"} fontSize={"13px"}>
            {" "}
            Máximo de 12 parcelas
          </chakra.span>

          <Input
            name={"percent"}
            placeholder="MDR"
            label="Informe o percentual MDR "
            value={mdr || ""}
            onChange={(e) => 
              {simulation(amount, installments, mdr);
              setMdr(e.target.value);}}
          />
        </VStack>
        <VStack w={"50%"}>
          <Heading textAlign={"center"} fontSize={"16px"} color={"blue.500"}>
            VOCÊ RECEBERÁ:
          </Heading>
      

          <Text textAlign={"center"} p={2} color={"blue.400"}>
            {" "}
            Amanhã R$ {tomorrow}
          </Text>
          <Text textAlign={"center"} p={2} color={"blue.400"}>
            {" "}
            Em 15 dias R$ {fifteen}
          </Text>
          <Text textAlign={"center"} p={2} color={"blue.400"}>
            {" "}
            Em 30 dias R$ {thirty}
          </Text>
          <Text textAlign={"center"} p={2} color={"blue.400"}>
            {" "}
            Em 90 dias R$ {ninety}
          </Text>
        </VStack>
      </HStack>
    </Center>
  );
};
export default Simulation;
