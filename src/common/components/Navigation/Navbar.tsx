import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger as OrigPopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  theme,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";
// import { Blob } from "react-blob";

export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "¿Quién es I&G?",
    href: "/",
  },
  {
    label: "Educación",
    href: "/",
    children: [
      {
        label: "Lorem",
        subLabel: "dolor sit amet",
        href: "#",
      },
      {
        label: "Ipsum",
        subLabel: "consectetur adipiscing elit",
        href: "#",
      },
    ],
  },
  {
    label: "Soluciones de mercado",
    href: "#",
  },
  {
    label: "Productos",
    href: "#",
  },
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [height, setHeight] = useState("100px");
  const [fontSize, setFontSize] = useState(theme.fontSizes.md);

  const isActive = useRouter().pathname === "/";
  // console.log(useRouter().pathname);

  useEffect(() => {
    window.onscroll = () => {
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
          <Logo color={useColorModeValue("gray.700", "white")} />
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
          <NextLink href={"#"} passHref>
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={fontSize}
              fontWeight={600}
              color={"white"}
              bg={"cyan.400"}
              _hover={{
                bg: "cyan.300",
              }}
            >
              Contacto
            </Button>
          </NextLink>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ fontSize }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              {/* <NextLink href={navItem.href ?? "#"} passHref> */}
              <Link
                className="nav-link"
                href={navItem.href ?? "#"}
                p={2}
                fontWeight={500}
                fontSize={fontSize}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                transition={"height 0.5s, font-size 0.5s"}
              >
                {navItem.label}
              </Link>
              {/* </NextLink> */}
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <NextLink href={href} passHref>
      <Link
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "pink.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </NextLink>
  );
};

const MobileNav = () => {
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

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <NextLink href={href ?? "#"} passHref>
        <Flex
          py={2}
          as={"a"}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
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
        </Flex>
      </NextLink>

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
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
