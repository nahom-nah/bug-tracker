import { Box } from "@chakra-ui/layout";
import React from "react";

interface WrapperProps {}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      {children}
    </div>
  );
};

export default Wrapper;
