import styled from "styled-components";
import { colors } from "./them";

export const buttonColors = {
  delete: {
    normal: colors.lightGray,
    hover: colors.gray,
  },
  done: {
    normal: colors.lightGreen,
    hover: colors.green,
  },
  notYet: {
    normal: colors.lightNavy,
    hover: colors.navy,
  },
};

export const StButton = styled.button`
  width: ${(props) => props.width || "45%"};
  background-color: ${(props) => props.bgColor || colors.lightPurple};
  color: #fff;
  line-height: 35px;
  border: 1px solid;
  border-radius: 10px;
  transition: all 0.2s;

  &:hover {
    font-weight: 500;
    background-color: ${(props) => props.hoverBgColor || colors.purple};
  }
`;
