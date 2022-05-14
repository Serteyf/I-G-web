import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  theme,
  Box,
  Flex,
  useColorModeValue,
  IconButton,
  Stack,
  Collapse,
} from "@chakra-ui/react";
import ChakraLink from "@components/Links/ChakraLink";
import { useState, useEffect } from "react";
import Logo from "../Logo";
import DesktopNav from "./Desktop/DesktopNav";
import MobileNav from "./Mobile/MobileNav";

export default function Navbar(): JSX.Element {
  const { isOpen, onToggle } = useDisclosure();
  const [height, setHeight] = useState("100px");
  const [fontSize, setFontSize] = useState(theme.fontSizes.md);

  useEffect(() => {
    window.onscroll = (): void => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        setHeight("60px");
        setFontSize(theme.fontSizes.sm);
      } else {
        setHeight("100px");
        setFontSize(theme.fontSizes.md);
      }
    };
  });

  return (
    <Box>
      <Flex
        as={"nav"}
        w={"100%"}
        h={["60px", height]}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        position={"fixed"}
        zIndex={10}
        top={0}
        backdropFilter={"saturate(180%) blur(20px)"}
        transition={"height 0.5s, font-size 0.5s, z-index 0.5s"}
      >
        {/* <Blob size="100px" src={src} alt={alt} /> */}
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Box>
          <ChakraLink href={"/"}>
            <Logo color={useColorModeValue("gray.700", "white")} />
          </ChakraLink>
        </Box>
        <Flex flex={{ base: 1 }} justify={{ base: "center" }}>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav fontSize={fontSize} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <ChakraLink
            as="button"
            href="/contact"
            styles={{
              display: { base: "none", md: "inline-flex" },
              fontSize: fontSize,
              fontWeight: 600,
              color: "white",
              bg: "green.400",
              _hover: {
                bg: "green.300",
              },
            }}
          >
            Contacto
          </ChakraLink>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
