import { createContext, useState, useContext } from "react";
import { api } from "../../services/api";
import { useEffect } from "react";

const SimulatorContext = createContext();

export const SimulateProvider = ({ children }) => {
  const [tomorrow, setTomorrowDayAmount] = useState();
  const [fifteen, setfifteenDayAmount] = useState();
  const [thirty, setthirtyDayAmount] = useState();
  const [ninety, setninetyDayAmount] = useState();

  useEffect(() => {
    simulation();
  }, []);

  const simulation = async (amount, installments, mdr) => {
    const data = {
      amount: amount,
      installments: installments,
      mdr: mdr,
    };
    console.log(data);
    api
      .post("", data)
      .then((response) => {
        console.log(response);
        setTomorrowDayAmount(response.data[1]),
          setfifteenDayAmount(response.data[15]),
          setthirtyDayAmount(response.data[30]),
          setninetyDayAmount(response.data[90]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SimulatorContext.Provider
      value={{
        simulation,
        tomorrow,
        fifteen,
        thirty,
        ninety,
        setTomorrowDayAmount,
        setfifteenDayAmount,
        setthirtyDayAmount,
        setninetyDayAmount,
      }}
    >
      {children}
    </SimulatorContext.Provider>
  );
};

export const useSimulate = () => useContext(SimulatorContext);
