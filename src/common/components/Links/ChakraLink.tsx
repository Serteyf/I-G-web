import { Button, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { ChakraLinkInterface } from "@interfaces/ChakraLink";

export default function ChakraLink(props: ChakraLinkInterface): JSX.Element {
  const linkAs = (): JSX.Element => {
    switch (props.as) {
      case "button":
        return (
          <Button as={"a"} _focus={{ boxShadow: "none" }} {...props.styles}>
            {props.children}
          </Button>
        );
      case "flex":
        return (
          <Flex as={"a"} _focus={{ boxShadow: "none" }} {...props.styles}>
            {props.children}
          </Flex>
        );
      default:
        return (
          <Link
            isExternal={props.isExternal}
            _focus={{ boxShadow: "none" }}
            {...props.styles}
          >
            {props.children}
          </Link>
        );
    }
  };
  return (
    <NextLink href={props.href} passHref>
      {linkAs()}
    </NextLink>
  );
}
