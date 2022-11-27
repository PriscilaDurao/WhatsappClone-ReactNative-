import mic from "../../../assets/mic.svg";
import smile from "../../../assets/smile.svg";
import money from "../../../assets/money.svg";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../../../themes/colors.js";
import { InputMsg, Mic, Money, Camera, PaperClip, Smile } from "./styles";
import { useState } from "react";
import { View } from "react-native";

export const Footer = () => {
  const [msg, setMsg] = useState("");

  return (
    <View>
      <InputMsg
        value={msg}
        onChangeText={setMsg}
        placeholder={"Mensagem"}
        placeholderTextColor={colors?.tertiary}
        multiline={true}
      />
      <Mic source={mic} />
      <Money source={money} />
      <Camera>
        <Ionicons name={"camera"} size={32} color={colors?.tertiary} />
      </Camera>
      <PaperClip>
        <FontAwesome name="paperclip" size={32} color={colors?.tertiary} />
      </PaperClip>
      <Smile source={smile} />
    </View>
  );
};
