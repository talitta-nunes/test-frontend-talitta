
import { Center, VStack, Button, HStack, Text} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Center w={"100vw"} h={"100vh"} bgColor={"#445699"}>
      <VStack w={"80%"}>
        <VStack>
          <Text fontWeight={"bold"} fontSize={"30px"}>
            Percent Simulator
          </Text>
          <Text
            textColor={"white"}
            fontWeight={"bold"}
            textAlign={"center"}
            fontSize={"20px"}
          >
            {" "}
            Calcule o valor da sua antecipação
          </Text>
          <HStack>
            <Button
              onClick={() => navigate("/simulation")}
              w={"80%"}
              colorScheme={"pink"}
            >
              Simular dados
            </Button>
          
          </HStack>
        </VStack>
      </VStack>
    </Center>
  );
};
export default Home;
