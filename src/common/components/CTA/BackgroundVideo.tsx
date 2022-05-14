import { Box } from "@chakra-ui/react";

const BackgroundVideo = (props): JSX.Element => {
  return (
    <Box
      {...props.opts}
      as={"video"}
      position={"absolute"}
      w="100%"
      left={"50%"}
      top={"50%"}
      h="100%"
      objectFit={"cover"}
      transform={"translate(-50%, -50%)"}
      zIndex={"-2"}
    >
      <source src={props.src} type={props.type} />
    </Box>
  );
};

export default BackgroundVideo;
