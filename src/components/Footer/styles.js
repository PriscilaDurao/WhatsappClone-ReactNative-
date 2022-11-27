import styled from "styled-components/native";
import colors from "../../../themes/colors.js";

export const InputMsg = styled.TextInput`
  position: absolute;
  height: 60px;
  width: 318px;
  background-color: ${colors.secondary};
  top: 47.5rem;
  border-radius: 87.61px;
  left: 5px;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  padding: 3.5% 14.5%;
`;

export const Mic = styled.Image`
  position: absolute;
  width: 60.2px;
  height: 58.05px;
  top: 47.5rem;
  right: 1.8px;
`;

export const Money = styled.Image`
  position: absolute;
  width: 30.01px;
  height: 30.02px;
  top: 48.3rem;
  right: 7.5rem;
`;

export const Camera = styled.View`
  position: absolute;
  top: 48.2rem;
  right: 5.1rem;
`;

export const PaperClip = styled.View`
  position: absolute;
  top: 48.2rem;
  right: 10.1rem;
  transform: rotate(180deg);
  transform: scale(-1);
`;

export const Smile = styled.Image`
  position: absolute;
  width: 30.62px;
  height: 30.62px;
  top: 48.2rem;
  left: 23px;
  color: ${colors.tertiary};
`;
