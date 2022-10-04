import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input as ChakraInput,
} from "@chakra-ui/react";

const Input = ({ name, label, errors, ...rest }) => {
  return (
    <FormControl isRequired w={"85%"}>
      <FormLabel textAlign={"start"} color={"black"} fontSize={"13px"}>
        {label}
      </FormLabel>
      <ChakraInput
        
        {...rest}
        name={name}
        border={"1px solid blue"}
        bgColor={"white"}
      />
      <FormHelperText
        fontSize={"11px"}
        color={"red"}
        my={"1"}
        fontWeight={"bold"}
      >
        {errors}
      </FormHelperText>
    </FormControl>
  );
};
export default Input;
