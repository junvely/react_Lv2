import styled from "styled-components";

export const buttonWidth = {
  add: "200px",
};

export const buttonBgColor = {
  delete: "#ccc",
  done: "#64dc95",
  notYet: "#6736ed94",
};

export const buttonHoverBgColor = {
  delete: "#696969",
  done: "#17d164",
  notYet: "#6836ed",
};

export const StButton = styled.button`
  width: ${(props) => props.width || "45%"};
  background-color: ${(props) => props.bgColor || "#bf79f8"};
  color: #fff;
  line-height: 35px;
  border: 1px solid;
  border-radius: 10px;
  transition: all 0.2s;

  &:hover {
    font-weight: 500;
    background-color: ${(props) => props.hoverBgColor || "#a235fc"};
  }
`;
