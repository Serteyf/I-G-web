import { Stack, useColorModeValue } from "@chakra-ui/react";
import NAV_ITEMS from "../NavItems";
import MobileNavItem from "./MobileNavItem";

const MobileNav = (): JSX.Element => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
      position="fixed"
      zIndex={"1"}
      top={"60px"}
      w={"100%"}
      transition={"z-index 0.5s"}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNav;
