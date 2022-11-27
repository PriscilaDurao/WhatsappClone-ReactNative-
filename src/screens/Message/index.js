import React from "react";
import { ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import BG from "../../../assets/BG.png";
import { Footer } from "../../components/Footer/index.js";
import { Header } from "../../components/Header/index.js";
import msgchat from "../../../assets/msgchat.svg";
import { ImgChat } from "./style.js";

export default function Message() {
  return (
    <ImageBackground source={BG} style={{ width: "100%", height: "100%" }}>
      <Header />
      <ImgChat source={msgchat} />
      <Footer />
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
