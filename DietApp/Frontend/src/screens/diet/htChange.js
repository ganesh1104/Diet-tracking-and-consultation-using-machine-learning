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

import WheelPickerExpo from "react-native-wheel-picker-expo";
import { useNavigation } from "@react-navigation/native";

const FTS = [1, 2, 3, 4, 5, 6, 7];
const INS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const Stepper = ({ count }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 32,
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 42,
        justifyContent: "center",
        alignItems: "flex-end",
        gap: 12,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          height: 10,
          borderRadius: 12,
          backgroundColor: count >= 1 ? "#FF6464" : "#e0e0e0",
        }}
      ></View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          height: 10,
          borderRadius: 12,
          backgroundColor: count >= 2 ? "#FF6464" : "#e0e0e0",
        }}
      ></View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          height: 10,
          borderRadius: 12,
          backgroundColor: count >= 3 ? "#FF6464" : "#e0e0e0",
        }}
      ></View>
    </View>
  );
};

const HeightChange = ({ route, navigation }) => {
  const pram = route ? route.params : null;
  const [ft, setft] = useState(FTS[0]);
  const [ine, setin] = useState(INS[0]);

  const conv = (feet, inches) => {
    const cmTotal = feet * 30.48 + inches * 2.54;
    return cmTotal;
  };

  useLayoutEffect(() => {
    if (pram) {
      console.log(pram.age, pram.wgt);
    }
  }, [pram]);

  if (!pram) {
    return <Text>Error at init</Text>;
  }

  return (
    <SafeAreaView
      style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}
    >
      <Stepper count={3} />
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
            paddingHorizontal: 12,
            textAlign: "center",
            fontFamily: "Inter-Medium",
          }}
        >
          What's your current height?
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
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <WheelPickerExpo
            height={300}
            width={200}
            initialSelectedIndex={3}
            items={FTS.map((name) => ({ label: name, value: "" }))}
            onChange={({ item }) => setft(item.label)}
            haptics={true}
            selectedStyle={{
              borderColor: "#e0e0e0",
              borderWidth: 1,
            }}
          />
          <WheelPickerExpo
            height={300}
            width={200}
            initialSelectedIndex={3}
            items={INS.map((name) => ({ label: name, value: "" }))}
            onChange={({ item }) => setin(item.label)}
            haptics={true}
            selectedStyle={{
              borderColor: "#e0e0e0",
              borderWidth: 1,
            }}
          />
        </View>
        <Text
          style={{ fontSize: 22, color: "#3B82F6", fontFamily: "Inter-Medium" }}
        >
          {ft} ft's and {ine} inches
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
            const cm = Math.floor(conv(ft, ine));
            navigation.navigate("loader", {
              age: pram.age,
              wgt: pram.wgt,
              hgt: cm,
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
            Save
          </Text>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default HeightChange;
