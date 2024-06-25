import React, {
  useMemo,
  useCallback,
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import {
  TouchableRipple,
  useTheme,
  BottomNavigation,
  Avatar,
  DataTable,
  IconButton,
  Button,
} from "react-native-paper";
import { Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import LandScreen from "../land";
import DietScreen from "../diet";
import IonIcon from "react-native-vector-icons/Ionicons";
import MatIcon from "react-native-vector-icons/MaterialCommunityIcons";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";

import { Stepper } from "./htChange";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import { useNavigation } from "@react-navigation/native";
import { getProData } from "../../helpers/dbHelper";

const WEIGHTS = [
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
  29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
  67, 68, 69, 70,
];

const AgeChange = ({}) => {
  const navigation = useNavigation();
  const [wgt, setwgt] = useState(null);
  const [ind, setind] = useState(null);

  useLayoutEffect(() => {
    const run = async () => {
      const data = JSON.parse(await getProData());
      if (data) {
        const ind = WEIGHTS.indexOf(data.age);
        setind(ind);
      }
    };
    run();
  }, []);

  return (
    <SafeAreaView
      style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}
    >
      <Stepper count={1} />
      <View
        style={{
          width: "100%",
          flex: 1,
          display: "flex",
          paddingTop: 32,
          // justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Text
          style={{
            fontSize: 28,
            paddingHorizontal: 32,
            textAlign: "center",
            fontFamily: "Inter-Medium",
          }}
        >
          What's your current age?
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Inter-Regular",
            paddingHorizontal: 56,
            marginTop: 22,
            textAlign: "center",
          }}
        >
          This will help us determine your goal and monitor your progress
          overtime
        </Text>
        <WheelPickerExpo
          height={300}
          width={250}
          initialSelectedIndex={ind ? ind : 12}
          items={WEIGHTS.map((name) => ({ label: name, value: "" }))}
          onChange={({ item }) => setwgt(item.label)}
          haptics={true}
          selectedStyle={{
            borderColor: "#e0e0e0",
            borderWidth: 1,
          }}
        />
        <Text
          style={{ fontSize: 22, color: "#3B82F6", fontFamily: "Inter-Medium" }}
        >
          You are {wgt} Years Old
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 22,
          paddingVertical: 22,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <TouchableRipple
          onPress={() => {
            navigation.goBack();
          }}
          rippleColor={"rgba(0,0,0,0.3)"}
          style={{
            // width: 100,
            height: 52,
            borderRadius: 120,
            paddingHorizontal: 22,
            backgroundColor: "#f7f7f7",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontFamily: "Inter-Medium" }}>Back</Text>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            navigation.navigate("weightChange", {
              age: wgt,
            });
            // navigation.navigate("heightChange");
          }}
          rippleColor={"rgba(0,0,0,0.3)"}
          style={{
            paddingHorizontal: 22,
            height: 52,
            backgroundColor: "#9470FF",
            borderRadius: 120,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            elevation: 3,
          }}
        >
          <Text
            style={{ fontSize: 18, color: "#fff", fontFamily: "Inter-Medium" }}
          >
            Next
          </Text>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default AgeChange;

// navigation.navigate("weightChange", {
//   age: wgt,
// });
