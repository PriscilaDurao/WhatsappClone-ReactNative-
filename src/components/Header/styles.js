import styled from "styled-components/native";
import colors from "../../../themes/colors.js";

export const Up = styled.View`
  width: 100%;
  height: 77px;
  background-color: ${colors.primary};
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0;
  padding-left: 50px;
  padding-right: 50px;
`;

export const Dot = styled.View`
  position: absolute;
  right: 10px;
  top: 20px;
`;

export const Phone = styled.View`
  position: absolute;
  right: 53px;
  top: 19.5px;
  opacity: 0.5;
`;

export const VideoCam = styled.View`
  position: absolute;
  right: 98px;
  top: 21px;
  opacity: 0.5;
`;

export const Name = styled.Text`
  position: absolute;
  width: 221px;
  height: 38px;
  color: ${colors.secondary};
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 21px;
  display: flex;
  left: 100px;
  top: 20px;
`;

export const You = styled.Text`
  position: absolute;
  width: 25px;
  height: 12px;
  color: ${colors.secondary};
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 12px;
  display: flex;
  left: 100px;
  top: 43px;
`;

export const Picture = styled.Image`
  position: absolute;
  width: 50px;
  height: 48.62px;
  border-radius: 100px;
  left: 38px;
`;

export const Arrow = styled.View`
  position: absolute;
  left: 10px;
  top: 22px;
`;
