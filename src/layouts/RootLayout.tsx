import { AppNavbar } from "@/components/AppNavbar";
import { Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";

interface Props {
  // Props type definition here
}

const RootLayout: React.FC<Props> = ({}) => {
  return (
    <Flex>
      <AppNavbar />
      <Outlet />
    </Flex>
  );
};

export default RootLayout;
