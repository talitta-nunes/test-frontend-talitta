import { SimulateProvider } from "./simulator";

const Providers = ({ children }) => {
  return <SimulateProvider>{children}</SimulateProvider>;
};

export default Providers;
