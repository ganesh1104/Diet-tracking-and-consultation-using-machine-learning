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
  67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85,
  86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103,
  104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
  119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133,
  134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148,
  149, 150,
];

const WeightChange = ({ route, navigation }) => {
  const pram = route ? route.params : null;
  const [wgt, setwgt] = useState(WEIGHTS[0]);
  const [ind, setind] = useState(null);

  useLayoutEffect(() => {
    if (pram) {
      console.log(pram.age);
    }
    const run = async () => {
      const data = JSON.parse(await getProData());
      if (data) {
        const ind = WEIGHTS.indexOf(data.wgt);
        setind(ind);
      }
    };
    run();
  }, [pram]);

  if (!pram) {
    return <Text>Error at init</Text>;
  }

  return (
    <SafeAreaView
      style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}
    >
      <Stepper count={2} />
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
            paddingHorizontal: 22,
            textAlign: "center",
            fontFamily: "Inter-Medium",
          }}
        >
          What's your current weight?
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
          initialSelectedIndex={ind ? ind : 3}
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
          You are {wgt} Kilograms
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
            navigation.navigate("heightChange", {
              age: pram.age,
              wgt: wgt,
            });
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

export default WeightChange;

// navigation.navigate("heightChange", {
//      age: pram.age,
//      wgt: wgt,
//    });
