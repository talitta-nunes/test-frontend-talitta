import { Center, VStack, Heading, HStack, Text, chakra, Button } from "@chakra-ui/react";
import Input from "../../components/input";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";


const Simulation = () => {


  const formSchema = Yup.object().shape({
    sell: Yup.string().required("Campo obrigatório"),
    pieces: Yup.string()
      .required("A senha é obrigatória")
      .max(12, "Máximo de 12 parcelas"),
    percent: Yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

const [amount, setAmount] = useState();
const [parcel, setParcel] = useState();
const [percent, setPercent] = useState();
const [result, setResult] = useState()

const calculate = () => {
  const result =  (amount / parcel) * percent;
  const quanty = amount - result;
  setResult(`R$ ${quanty.toFixed(2).replace(".", ",")}`);
}
const parcela = (amount / parcel)* percent;
const oneparcel = ((amount / parcel) - parcela).toFixed(2)
console.log(oneparcel)

const day30 = (oneparcel -[(1* percent) * oneparcel]).toFixed(2)
console.log(day30)
const day15 = (oneparcel - [0.5 * percent * oneparcel]).toFixed(2)
console.log(day15);
const day90 = (oneparcel - [3 * percent * oneparcel]).toFixed(2)
console.log(day90);




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
          onSubmit={handleSubmit()}
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
            register={register}
            errors={errors.sell?.message}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Input
            name={"pieces"}
            placeholder="Parcelas"
            label="Em quantas parcelas "
            register={register}
            errors={errors.pieces?.message}
            onChange={(e) => setParcel(e.target.value)}
          />
          <chakra.span color={"gray.500"} fontSize={"13px"}>
            {" "}
            Máximo de 12 parcelas
          </chakra.span>

          <Input
            name={"percent"}
            placeholder="Percentual de MDR"
            label="Informe o percentual MDR "
            register={register}
            errors={errors.percent?.message}
            onChange={(e) => setPercent(e.target.value / 100)}
          />
          <Button onClick={() => calculate()}>Calcular</Button>
          <Text textAlign={"center"}> Valor da antecipação {result}</Text>
        </VStack>
        <VStack w={"50%"}>
          <Heading textAlign={"center"} fontSize={"16px"} color={"blue.500"}>
            VOCÊ RECEBERÁ:
          </Heading>

          <Text textAlign={"center"} p={2} color={"blue.400"}>
            {" "}
            Amanhã R$ {oneparcel}
          </Text>
          <Text textAlign={"center"} p={2} color={"blue.400"}>
            {" "}
            Em 15 dias R$ {day15}
          </Text>
          <Text textAlign={"center"} p={2} color={"blue.400"}>
            {" "}
            Em 30 dias R$ {day30}
          </Text>
          <Text textAlign={"center"} p={2} color={"blue.400"}>
            {" "}
            Em 90 dias R$ {day90}
          </Text>
        </VStack>
      </HStack>
    </Center>
  );
};

export default Simulation;
