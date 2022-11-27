import colors from "../../../themes/colors.js";
import { View } from "react-native";
import {
  Up,
  Dot,
  Phone,
  VideoCam,
  Name,
  You,
  Picture,
  Arrow,
} from "./styles.js";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import foto from "../../../assets/foto.svg";
import { Feather } from "@expo/vector-icons";

export const Header = () => {
  return (
    <View>
      <Up>
        <Picture source={foto} />
        <Arrow>
          <Feather name="arrow-left" size={25} color={colors?.secondary} />
        </Arrow>
        <Name>Priscila Durão</Name>
        <You>Você</You>
        <Dot>
          <Entypo
            name="dots-three-vertical"
            size={25}
            color={colors?.secondary}
          />
        </Dot>
        <Phone>
          <FontAwesome name="phone" size={25} color={colors?.secondary} />
        </Phone>
        <VideoCam>
          <Ionicons name="videocam" size={25} color={colors?.secondary} />
        </VideoCam>
      </Up>
    </View>
  );
};
