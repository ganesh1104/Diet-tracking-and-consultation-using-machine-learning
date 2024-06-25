import { useRef, useState, useEffect, useLayoutEffect } from "react";
import {
  TouchableRipple,
  useTheme,
  BottomNavigation,
  Avatar,
  DataTable,
  IconButton,
  Button,
} from "react-native-paper";
import { Text, View, Image, Alert } from "react-native";
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
import Flame from "../../../assets/vectors/flame.gif";
import Boun from "../../../assets/vectors/boun.gif";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import { useNavigation } from "@react-navigation/native";
import {
  getDietData,
  storePlanData,
  storeProData,
} from "../../helpers/dbHelper";

const vec =
  "https://imgproxy-us-east-2-new.icons8.com/5WtGth67BQAS2wZOzdlwp-ky59qlN1PcnSCxikpG43g/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzM3/L2ZkODJlYWIxLTMx/YjItNDJhMi1hZGQz/LWE5M2UwOTI3ZDY3/ZC5wbmc.png/download?filename=bonbon-girl-cooking-a-salad-but-dreaming-about-meat.png";

const LoaderScreen = ({ route, navigation }) => {
  const pram = route ? route.params : null;
  const [plan, setPlan] = useState(true);

  useLayoutEffect(() => {
    const run = async () => {
      if (pram) {
        console.log(pram.age, pram.wgt, pram.hgt);
        if (pram.age && pram.wgt && pram.hgt) {
          storeProData(pram.age, pram.wgt, pram.hgt);
          const res = await getDietData(pram.age, pram.wgt, pram.hgt);
          if (!res.errorBool) {
            const resStr = JSON.stringify(res.data);
            if (resStr) {
              console.log("Plan ready");
              const res = await storePlanData(resStr);
              setPlan(false);
            }
          } else {
            console.log(res.errorMessage);
            Alert.alert(res.errorMessage ? res.errorMessage : "Error Occurred");
          }
        } else {
          Alert.alert("Incomplete input data");
        }
      }
    };
    run();
  }, [pram]);
  if (!pram) {
    return <Text>Error at init</Text>;
  }

  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          width: "100%",
          flex: 1,
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        {plan ? (
          <>
            <Image
              resizeMethod="resize"
              blurRadius={1}
              style={{
                width: 200,
                height: 200,
              }}
              source={Boun}
            />
          </>
        ) : (
          <>
            <Image
              resizeMethod="resize"
              blurRadius={1}
              style={{
                width: 200,
                height: 200,
              }}
              source={Flame}
            />
          </>
        )}
        <Text
          style={{
            paddingHorizontal: 42,
            textAlign: "center",
            marginTop: 22,
            fontFamily: "Inter-Bold",
            fontSize: 16,
          }}
        >
          Food Tip
        </Text>
        <Text
          style={{
            paddingHorizontal: 52,
            textAlign: "center",
            marginTop: 6,
            fontSize: 16,
          }}
        >
          Incorporate a variety of colorful fruits into your diet for optimal
          health benefits.
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          padding: 32,
        }}
      >
        <View
          style={{
            marginBottom: 16,
            padding: 12,
            borderRadius: 12,

            width: "100%",
            height: 52,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFDBB1",
          }}
        >
          <MatIcon name="information" size={22} color={"#D88524"} />
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              color: "#D88524",
              marginLeft: 8,
              fontFamily: "Inter-Medium",
            }}
          >
            {!plan ? "Your Plan is Ready" : "Preparing diet plan"}
          </Text>
        </View>
        <TouchableRipple
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "land" }],
            });
          }}
          rippleColor={"rgba(0,0,0,0.3)"}
          style={{
            width: "100%",
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
            style={{ color: "#fff", fontSize: 16, fontFamily: "Inter-Medium" }}
          >
            {!plan ? "Continue" : "Loading"}
          </Text>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default LoaderScreen;
