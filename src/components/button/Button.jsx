import React from "react";
import styled from "styled-components";

function Button() {
  return <StButton>Button</StButton>;
}

const StButton = styled.button`
  width: 200px;
  line-height: 40px;
  color: #fff;
  background-color: #d8b0f8;
  border-radius: 10px;
  transition: all 0.2s;
  border: 1px solid;

  &:hover {
    font-weight: 500;
    background-color: #a879e3;
  }
`;

export default Button;

// .delete {
//   width: 45%;
// }

// .delete {
//   width: 150px;
//   background-color: #ccc;

//   &:hover {
//     font-weight: 500;
//     color: #fff;
//     background-color: #696969;
//   }
// }

// .done {
//   background-color: #64dc95;

//   &:hover {
//     color: #fff;
//     background-color: #17d164;
//   }
// }

// .notYet {
//   background-color: #6736ed94;

//   &:hover {
//     color: #fff;
//     background-color: #6836ed;
//   }
// }
