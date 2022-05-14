import {
  useColorModeValue,
  Stack,
  Box,
  Popover,
  PopoverTrigger as OrigPopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import ChakraLink from "@components/Links/ChakraLink";
import NAV_ITEMS from "../NavItems";
import DesktopSubNav from "./DesktopSubnav";
export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

const DesktopNav = ({ fontSize }): JSX.Element => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <div>
                <ChakraLink
                  as="button"
                  href={navItem.href}
                  styles={{
                    p: 2,
                    fontWeight: 500,
                    fontSize,
                    color: linkColor,
                    bg: "none",
                    _hover: {
                      textDecoration: "none",
                      color: linkHoverColor,
                    },
                  }}
                >
                  {navItem.label}
                </ChakraLink>
              </div>
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

export default DesktopNav;
