import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

// Define Props interface
interface Props extends LinkProps {
  children: ReactNode;
}

// Create a styled Link component
const NewLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

// StyledLink Component
const StyledLink = ({ children, ...other }: Props) => {
  return <NewLink {...other}>{children}</NewLink>;
};

export default StyledLink;
