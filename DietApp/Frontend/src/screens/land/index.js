import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { landStyle } from "./land.style";
import { StatusBar } from "expo-status-bar";

import TinaPng from "../../../assets/avatars/mina.png";
import FeaIcon from "react-native-vector-icons/Feather";
import IonIcon from "react-native-vector-icons/Ionicons";
import MatIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar, TouchableRipple, ActivityIndicator } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  getProData,
  getUserDatabyUID,
  remoreProData,
} from "../../helpers/dbHelper";
import RunPng from "../../../assets/vectors/running.png";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import Svg, { Circle, Rect, Text as SVGText } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { getAuthData } from "../../helpers/authHelper";
import { useNavigation } from "@react-navigation/native";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgress = (props) => {
  const { size, strokeWidth, text } = props;
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = 100 - props.progressPercent;

  const invertedCompletion = (100 - props.progressPercent) / 100;
  const theta = useSharedValue(2 * Math.PI);
  const animateTo = useDerivedValue(() => 2 * Math.PI * invertedCompletion);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: withTiming(theta.value * radius, {
        duration: 1700,
      }),
    };
  });

  useLayoutEffect(() => {
    theta.value = animateTo.value;
  }, [props.progressPercent]);

  return (
    <Svg width={size} height={size}>
      <AnimatedCircle
        stroke={props.bgColor ? props.bgColor : "#2B1A41"}
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        {...{ strokeWidth }}
      />
      <AnimatedCircle
        animatedProps={animatedProps}
        stroke={props.pgColor ? props.pgColor : "#BB86FC"}
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeDasharray={`${circum} ${circum}`}
        strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
        strokeLinecap="round"
        transform={`rotate(-90, ${size / 2}, ${size / 2})`}
        {...{ strokeWidth }}
      />

      <SVGText
        fontSize={props.textSize ? props.textSize : "10"}
        x={size / 2}
        y={size / 2 + (props.textSize ? props.textSize / 2 - 1 : 15)}
        textAnchor="middle"
        fill={props.textColor ? props.textColor : "#fff"}
      >
        {text}
      </SVGText>
    </Svg>
  );
};

function SvgComponent({}) {
  return (
    <View
      style={{
        display: "flex",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        height: 300,
      }}
    >
      <View style={{ position: "absolute" }}>
        <CircularProgress
          size={250}
          strokeWidth={22}
          progressPercent={60}
          text="30% Done"
          textSize={18}
        />
      </View>
      <View style={{ position: "absolute" }}>
        <CircularProgress
          bgColor="#e0e0e0"
          pgColor="#FFA439"
          size={190}
          strokeWidth={22}
          progressPercent={50}
        />
      </View>
    </View>
  );
}
const Header = ({ profileModal, userData }) => {
  return (
    <LinearGradient
      colors={["#bb86fc", "#fff"]}
      start={{ x: 0.5, y: -10.0 }}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        // elevation: 4,
        // zIndex: 100,
        padding: 26,
        paddingTop: 62,
        paddingHorizontal: 26,
      }}
    >
      <View style={landStyle.headerProfile}>
        <Text style={landStyle.headerName}>Hey, {userData.fname}</Text>
      </View>

      <TouchableRipple
        rippleColor="rgba(0,0,0,0.1)"
        onPress={() => {
          profileModal.current.present();
        }}
      >
        {/* <IonIcon name="cog" size={32} /> */}
        <Avatar.Text label={userData.fname[0]} size={42} />
        {/* <Image source={TinaPng} style={{ width: 52, height: 52 }} /> */}
      </TouchableRipple>
    </LinearGradient>
  );
};
const BannerData = ({ pData }) => {
  useEffect(() => {
    console.log(pData);
  }, [pData]);

  return (
    <>
      <View style={landStyle.bannerDataCont}>
        <View style={landStyle.bannerDataCardCont}>
          <MatIcon name="face-man" size={22} color="#656565" />
          <Text style={landStyle.bannerDataCardName}>
            {pData ? pData.age : "--"} Years
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#868686",
              fontFamily: "Inter-Medium",
            }}
          >
            Age
          </Text>
        </View>
        <View style={landStyle.bannerDataCardCont}>
          <MatIcon name="human-male-height" size={22} color="#656565" />
          <Text style={landStyle.bannerDataCardName}>
            {pData ? pData.hgt : "--"} cm
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#868686",
              fontFamily: "Inter-Medium",
            }}
          >
            Height
          </Text>
        </View>
        <View style={landStyle.bannerDataCardCont}>
          <MatIcon name="weight" size={22} color="#656565" />
          <Text style={landStyle.bannerDataCardName}>
            {pData ? pData.wgt : "--"} kgs
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#868686",
              fontFamily: "Inter-Medium",
            }}
          >
            Weight
          </Text>
        </View>
      </View>
    </>
  );
};
const CalorySection = ({}) => {
  const target = 1099;
  const max = 1500;
  const [cot, setcot] = useState(0);
  const [barWidth, setBarWid] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (cot != target || cot < target) {
        let cc = cot;
        let inc = Math.floor((target - cot) / 7);
        let lst = cc + inc;
        setcot(lst);
        let per = (lst / max) * 100;
        setBarWid(per);
      }
    }, 2);
  }, [cot]);

  return (
    <View style={landStyle.calorySectionCard}>
      <Text
        style={{ fontFamily: "Inter-Medium", fontSize: 16, color: "#757575" }}
      >
        Calorie Left
      </Text>
      <View style={landStyle.calorySectionData}>
        <Text style={{ fontSize: 62, fontFamily: "Bebas", color: "#000" }}>
          {cot}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Inter-Medium",
            color: "#000",
            marginLeft: 4,
          }}
        >
          cal
        </Text>
      </View>
      <View style={landStyle.calorySectionBarCont}>
        <LinearGradient
          // Button Linear Gradient
          colors={["#4784F6", "#FFA8FC", "#FFE976"]}
          start={{ x: 0, y: 0.75 }}
          end={{ x: 1, y: 0.25 }}
          style={{
            position: "absolute",
            height: "100%",
            width: `${barWidth.toString() + "%"}`,
            borderRadius: 8,
          }}
        ></LinearGradient>
      </View>
      <View
        style={{
          borderRadius: 12,
          backgroundColor: "#f3f3f3",
          marginTop: 22,
        }}
      >
        <View
          style={{
            ...landStyle.calorySectionCountRowCont,
            borderBottomColor: "#e0e0e0",
            borderBottomWidth: 1,
          }}
        >
          <View style={landStyle.calorySectionCountRowDataCont}>
            <View style={landStyle.calorySectionCountRowCIndi} />
            <Text style={landStyle.calorySectionCountRowDataName}>
              Carbohydrates
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              color: "#000",
              fontFamily: "Inter-Medium",
            }}
          >
            150 gr
          </Text>
        </View>
        <View
          style={{
            ...landStyle.calorySectionCountRowCont,
            borderBottomColor: "#e0e0e0",
            borderBottomWidth: 1,
          }}
        >
          <View style={landStyle.calorySectionCountRowDataCont}>
            <View style={landStyle.calorySectionCountRowPIndi} />
            <Text style={landStyle.calorySectionCountRowDataName}>Protein</Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              color: "#000",
              fontFamily: "Inter-Medium",
            }}
          >
            60 gr
          </Text>
        </View>
        <View
          style={{
            ...landStyle.calorySectionCountRowCont,
          }}
        >
          <View style={landStyle.calorySectionCountRowDataCont}>
            <View style={landStyle.calorySectionCountRowFIndi} />
            <Text style={landStyle.calorySectionCountRowDataName}>Fat</Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              color: "#000",
              fontFamily: "Inter-Medium",
            }}
          >
            32 gr
          </Text>
        </View>
      </View>
      <View style={landStyle.caloryNotiCont}>
        <MatIcon name="trophy" size={22} style={{ color: "#FFD337" }} />
        <Text style={landStyle.caloryNotiIco}>Great! You are almost there</Text>
      </View>
    </View>
  );
};

const WeeklyDataCard = ({ day, check }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: 8,
        alignItems: "center",
      }}
    >
      <Text style={landStyle.weekWeekName}>{day}</Text>
      {check ? (
        <View style={landStyle.weekWeekCheckIndi}>
          <IonIcon name="checkmark" size={32} color="#fff" />
        </View>
      ) : (
        <View style={landStyle.weekWeekIndi}></View>
      )}

      <Text
        style={{
          ...landStyle.weekStepCount,
          color: check ? "#3B82F6" : "#bdbdbd",
        }}
      >
        {Math.floor(Math.random() * 10000)}
      </Text>
    </View>
  );
};

const WeeklyStepSection = ({}) => {
  return (
    <View style={landStyle.weeklySectionCont}>
      <Text
        style={{
          fontFamily: "Inter-Bold",
          color: "#000",
          fontSize: 18,
        }}
      >
        Weekly Step Count
      </Text>
      <Text
        style={{
          fontFamily: "Inter-SemiBold",
          fontSize: 14,
          color: "#959595",
        }}
      >
        5000 steps every day in one week
      </Text>
      <ScrollView horizontal={true}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 16,
            marginTop: 22,
          }}
        >
          <WeeklyDataCard day={"MON"} check={true} />
          <WeeklyDataCard day={"TUE"} check={true} />
          <WeeklyDataCard day={"WED"} check={true} />
          <WeeklyDataCard day={"THU"} check={true} />
          <WeeklyDataCard day={"FRI"} />
          <WeeklyDataCard day={"SAT"} />
          <WeeklyDataCard day={"SUN"} />
        </View>
      </ScrollView>
    </View>
  );
};

const Signature = ({}) => {
  return (
    <View
      style={{
        marginTop: 52,
        marginBottom: 32,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 16, fontFamily: "Inter-Medium", color: "#000" }}>
        Made with ❤️
      </Text>
    </View>
  );
};

const BMIDisp = ({ pData }) => {
  const [sbmi, setbmi] = useState(null);
  const [lvl, setlvl] = useState(0);

  useEffect(() => {
    if (pData) {
      bmi = (pData.wgt / Math.pow(pData.hgt / 100, 2)).toFixed(1);

      if (bmi < 18.5) {
        setbmi("Underweight");
        setlvl(1);
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setbmi("Normal Weight");
        setlvl(2);
      } else if (bmi >= 25 && bmi <= 29.9) {
        setbmi("Overweight");
        setlvl(3);
      } else {
        setbmi("Obese");
        setlvl(4);
      }
    }
  }, [pData]);

  return (
    <View
      style={{
        paddingHorizontal: 22,
        marginTop: 12,
      }}
    >
      <View
        style={{
          height: 52,
          backgroundColor: `${
            lvl == 1
              ? "#FFA6A6"
              : lvl == 2
              ? "#E1FFB0"
              : lvl == 3
              ? "#FFEBA6"
              : lvl == 4
              ? "#cf6679"
              : "#cf6679"
          }`,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 16,
          paddingLeft: 22,
        }}
      >
        <FeaIcon name="info" size={18} />
        <Text
          style={{
            marginLeft: 8,
            fontSize: 16,
            fontFamily: "Inter-Medium",
            color: "#000",
          }}
        >
          You are {sbmi}
        </Text>
      </View>
    </View>
  );
};

export default function LandScreen({ profileModal }) {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [pData, setPData] = useState(null);
  const [userData, setUserData] = useState(null);

  useLayoutEffect(() => {
    const run = async () => {
      const data = await getProData();
      setPData(JSON.parse(data));
      let authData = await getAuthData();
      authData = JSON.parse(authData);
      console.log(authData.uid)
      const userDataRes = await getUserDatabyUID(authData.uid);
      if (!userDataRes.errorBool) {
        const userDataPar = userDataRes.response;
        if (!userDataPar.initiated) {
          navigation.reset({
            index: 0,
            routes: [{ name: "profileedit", params: { uid: userDataPar.uid } }],
          });
        }
        setUserData(userDataPar);
      }
      setLoading(false);
    };
    run();
  }, []);
  if (loading) {
    return (
      <SafeAreaView
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={"large"} color="#000" />
      </SafeAreaView>
    );
  }

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      <StatusBar animated backgroundColor="transparent" style="light" />
      <ScrollView
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <Header profileModal={profileModal} userData={userData} />
        {/* <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <SvgComponent />
        </View> */}
        <BannerData pData={pData} />
        <BMIDisp pData={pData} />
        <CalorySection />
        {/* <BannerDeco /> */}
        {/* <WeeklyStepSection /> */}
        <Signature />
      </ScrollView>
    </View>
  );
}
