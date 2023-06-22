import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { MantineProvider } from "@mantine/core";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Provider store={store}>{children}</Provider>
    </MantineProvider>
  );
};

export default Providers;
