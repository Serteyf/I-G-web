import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Stack,
  Flex,
  useColorModeValue,
  Icon,
  Collapse,
  Text,
} from "@chakra-ui/react";
import ChakraLink from "@components/Links/ChakraLink";
import { NavItem } from "@interfaces/NavItem";

const MobileNavItem = ({ label, children, href }: NavItem): JSX.Element => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <ChakraLink
        as="flex"
        href={href ?? "#"}
        styles={{
          py: 2,
          justify: "space-between",
          align: "center",
          _hover: { textDecoration: "none" },
        }}
      >
        <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </ChakraLink>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <ChakraLink key={child.label} href={child.href} styles={{ py: 2 }}>
                {child.label}
              </ChakraLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default MobileNavItem;
