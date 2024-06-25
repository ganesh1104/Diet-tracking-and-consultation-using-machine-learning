import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Toast,
  ToastAndroid,
  FlatList,
} from "react-native";
import { RefreshControl } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import TinaPng from "../../../assets/avatars/mina.png";
import IonIcon from "react-native-vector-icons/Ionicons";
import MatComIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MatIcon from "react-native-vector-icons/MaterialIcons";
import {
  Button,
  SegmentedButtons,
  TextInput,
  TouchableRipple,
  useTheme,
  Avatar,
  Modal,
  Divider,
  Menu,
  Portal,
  Provider,
  RadioButton,
} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useCallback,
} from "react";
import { landStyle } from "./diet.style";
import { getDietData, getItemData, getPlanData } from "../../helpers/dbHelper";
import { cos } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const banVec =
  "https://imgproxy-us-east-2-new.icons8.com/2aI82zcbnVcpVwnyYlq0x6iRVD0nSE31UeTlkUIwvWU/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzc4/LzdiZmE4Y2YxLWRi/NmMtNDdiZi1iMmNk/LTQ4ZjdkODM4Yzc1/MS5zdmc.png";

const vecArr = [
  "https://imgproxy-us-east-2-new.icons8.com/sx8At_KBqagXqVnKX0uuJX1YMLmqZKV2JWsz9LG9C6Q/rs:fit:256:273/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTkw/LzJmYzA1NDE0LTVh/NTEtNDhjNC1hODcx/LWUzMzgxNTZlY2M3/ZS5wbmc.png",
  "https://imgproxy-us-east-2-new.icons8.com/FTOD-kC_6RPZItdQo1IFA0sRVdsiOl7VCqnomtdxreo/rs:fit:256:237/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODMy/LzE1MTdhNDQ1LTg5/MjMtNGJjZC1hZmJh/LTBmMjQzMTY5NTQx/MC5wbmc.png",
  "https://imgproxy-us-east-2-new.icons8.com/D7i9mmPyfRu16ksSg5erE9iX5gZEeXzrij5s3yOFnSs/rs:fit:256:225/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzAz/LzI4ZmQzM2I0LTQx/MTItNDc0Zi1iMTVk/LWQxMjVlYjQ5N2I3/Mi5wbmc.png",
  "https://imgproxy-us-east-2-new.icons8.com/M5h0QTiCqL_bKGkqZXke8YLc9IMJ05E4dOA8wnNrXJU/rs:fit:256:336/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTky/L2YxYmZkOWJiLWI2/ODYtNDljNC1hOTJm/LTEwMGE0ZmJmMDUw/Mi5wbmc.png",
  "https://imgproxy-us-east-2-new.icons8.com/uoDaVtHkTnhWBIIDF8GhdNNvZGFflYT6Igq0WD7HlNA/rs:fit:256:228/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTQ2/L2M1MGJkNjY2LTFj/NTItNGNlOC05Yzg4/LTlkNjUwMmFhM2Ux/OC5wbmc.png",
  "https://imgproxy-us-east-2-new.icons8.com/kn-etlb-4P-yzhqcANvNZDad34NXPvMki5u492oE-QY/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODcv/ZmE2NTM0MzMtOGRm/OC00NDQ3LWIxMTYt/MjZlZTQ1MTRkMGY0/LnBuZw.png",
  "https://imgproxy-us-east-2-new.icons8.com/mA_dmkBMQXAmND1wTgjmvYi3tpvh0402IF8-WfWH6Nk/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTUy/LzBmMTM3MTVlLWNi/ZGEtNDVlNS04NDg1/LWNjNjJkYTAzMDlj/OC5wbmc.png",
  "https://imgproxy-us-east-2-new.icons8.com/L3YLTtZOxaA6qoSpwbpWUHqCeMshyMtkdlkRopUvyWQ/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjY3/L2JhNzI1YTlhLTJh/ODYtNDZlMC05NTFi/LWY5MTA5ZDI3Mjcw/Mi5wbmc.png",
  "https://imgproxy-us-east-2-new.icons8.com/tEXP3Hgy7yLRWIZ7AK0YLPUmOoFpwBhYvRO_TzuENy4/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDg2/Lzk3Zjk4OGRlLTQ5/NDYtNDVjYi04OTM1/LTdlZjFkNjUwN2Nk/ZS5wbmc.png",
  "https://imgproxy-us-east-2-new.icons8.com/0D4B7zDBR5RbiiwkFCROyMhqn8XO_B3Z2-pZdEZZKwc/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTUz/Lzc0MGJhZmY0LTU4/ZmQtNDhjNy1hNzFl/LThiNWMwMDhiZjE3/ZS5wbmc.png",
  "https://imgproxy-us-east-2-new.icons8.com/2PnAkhEvd0iuxfrU4s67p7kbqgWEcd5pq7dZ1szjVpw/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjMw/L2E2MzYwZDdhLWI0/ODctNDY0My05NWMx/LTBiOTBjYzhkMDc3/My5wbmc.png",
  "https://imgproxy-us-east-2-new.icons8.com/hMFWUm6YqX0d6zXW0grApXbN2q6Ptj2ZQJ5yTQEXo78/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzE5/LzI4OTA4NTgyLTM4/ZWQtNGE1MC04YTFj/LWFhNDk5OTQzNWI4/NS5wbmc.png",
  "https://imgproxy-us-east-2-new.icons8.com/cNQ1_3D7HGpfNjQpODWWBscgf3eUXgVkZoUEiLLCY_M/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjc0/L2FiMGE1MGIxLTBh/MTEtNGFhNi1iNGIz/LWMyMzNkMGZmZWVk/Yy5wbmc.png",
  "https://imgproxy-us-east-2-new.icons8.com/i0R15YynQoZh8P1C33Rg3RrjuYaCHxqM0VZmz-enyHQ/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzg5/LzhlODg1ZGYxLTZh/M2UtNGU1NS04YTY4/LTQ3NGNhOTkwOGZl/NC5wbmc.png",
  "https://imgproxy-us-east-2-new.icons8.com/W3ixlEks87xuN4-fWtA4woFkEwv2RgdDmcyXfZOmcx0/rs:fit:256:168/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODIw/LzgyYTlkNTkxLTk1/YTgtNDhlZi04MTY4/LTcxMmE5ZjFkMWQz/YS5wbmc.png",
];

const Header = ({
  profileModal,
  menu,
  openMenu,
  closeMenu,
  navigation,
  showModal,
}) => {
  return (
    <LinearGradient
      colors={["#fff", "#fff"]}
      start={{ x: 0.5, y: -15.0 }}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // marginHorizontal: 22,
        paddingHorizontal: 32,
        // paddingVertical: 32,
        paddingTop: 72,
        paddingBottom: 0,
      }}
    >
      <View>
        <Text style={{ fontFamily: "Bebas", fontSize: 62, color: "#000" }}>
          MEALS
        </Text>
      </View>
    </LinearGradient>
  );
};

const SubHeader = ({
  profileModal,
  menu,
  type,
  openMenu,
  closeMenu,
  navigation,
  showModal,
}) => {
  return (
    <View style={{ width: "100%", height: 72 }}>
      <View
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomWidth: 1,
          marginHorizontal: 32,
          borderBottomColor: "#e0e0e0",
        }}
      >
        <View
          style={{
            display: "flex",
            // flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            height: 42,
          }}
        >
          <Text
            style={{ color: "#000", fontSize: 18, fontFamily: "Inter-Medium" }}
          >
            Weight {type == 0 ? "Loss" : "Gain"} Plan
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 10,
              color: "#767676",
              fontFamily: "Inter-Medium",
            }}
          >
            MEAL PLAN
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 8,
          }}
        >
          <TouchableRipple
            rippleColor="rgba(0,0,0,0.3)"
            onPress={() => {
              showModal();
              closeMenu();
            }}
            style={{
              width: 42,
              height: 42,
              backgroundColor: "#f5f5f5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 120,
            }}
          >
            <IonIcon name="options-outline" size={26} color="#000" />
          </TouchableRipple>
          <TouchableRipple
            rippleColor="rgba(0,0,0,0.3)"
            onPress={() => {
              navigation.navigate("ageChange");
            }}
            style={{
              width: 42,
              height: 42,
              backgroundColor: "#f5f5f5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 120,
            }}
          >
            <IonIcon name="person-circle-outline" size={26} color="#000" />
          </TouchableRipple>
        </View>
      </View>
    </View>
  );
};

const TimePicker = ({ time, setTime }) => {
  return (
    <View
      style={{
        height: 46,
        marginTop: 12,
      }}
    >
      <View
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          // justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 22,

          borderRadius: 12,
        }}
      >
        <TouchableRipple
          onPress={() => {
            setTime(0);
          }}
          rippleColor={"rgba(0,0,0,0.1)"}
          style={{
            display: "flex",
            paddingHorizontal: 22,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            borderRadius: 120,

            backgroundColor: time == 0 ? "#f2f2f2" : "transparent",
          }}
        >
          <Text style={{ fontSize: 13, color: "#000" }}>Breakfast</Text>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            setTime(1);
          }}
          rippleColor={"rgba(0,0,0,0.1)"}
          style={{
            display: "flex",
            paddingHorizontal: 22,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            borderRadius: 120,
            backgroundColor: time == 1 ? "#f2f2f2" : "transparent",
          }}
        >
          <Text style={{ fontSize: 13, color: "#000" }}>Lunch</Text>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            setTime(2);
          }}
          rippleColor={"rgba(0,0,0,0.1)"}
          style={{
            display: "flex",
            paddingHorizontal: 22,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            borderRadius: 120,

            backgroundColor: time == 2 ? "#f2f2f2" : "transparent",
          }}
        >
          <Text style={{ fontSize: 13, color: "#000" }}>Dinner</Text>
        </TouchableRipple>
      </View>
    </View>
  );
};

const MealRow = ({ id, i, item, food, cal, wgt, sheetRef, setitemData }) => {
  const handlePress = async () => {
    if (item) {
      sheetRef.current.present();
      setitemData(item);
    }
  };

  return (
    <TouchableRipple
      rippleColor="rgba(0,0,0,0.25)"
      onPress={handlePress}
      style={{
        // height: 72,
        borderRadius: 24,
        marginBottom: 2,
        overflow: "hidden",
        backgroundColor: "#f6f6f6",
      }}
    >
      <View
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            overflow: "visible",
            paddingLeft: 8,
            marginRight: 8,
            width: 12,
            height: 100,
          }}
        >
          {/* <Image
            resizeMethod="auto"
            blurRadius={1}
            style={{
              width: 32,
              height: 32,
              overflow: "visible",
            }}
            source={{
              uri: vecArr[i % vecArr.length],
            }}
          /> */}
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            height: "100%",
            justifyContent: "space-between",
            gap: 12,
            paddingVertical: 12,
          }}
        >
          <Text
            style={{
              fontFamily: "Inter-Medium",
              fontSize: 23,
              paddingRight: 100,
              color: "#000",
            }}
          >
            {food.substring(0, 32)}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              marginTop: 0,
            }}
          >
            <Text style={{ color: "#000", fontSize: 13 }}>{item[2]} KCAL</Text>
            {/* <View
              style={{
                width: 4,
                height: 4,
                borderRadius: 120,
                backgroundColor: "#000",
              }}
            />
            <Text style={{ color: "#000", fontSize: 13 }}>15 MIN</Text> */}
          </View>
        </View>
        <View
          style={{
            display: "flex",
            paddingRight: 12,
            paddingTop: 12,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableRipple
            style={{
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MatComIcon name="heart-outline" size={23} color="#656565" />
          </TouchableRipple>
        </View>
      </View>
    </TouchableRipple>
  );
};

const MealRender = ({ type, time, dietData, sheetRef, setitemData }) => {
  const [mealArr, setmealarr] = useState(null);
  useLayoutEffect(() => {
    const data = dietData;
    if (data) {
      let rData = null;
      if (type == 0) {
        rData = data.LOSS;
      } else if (type == 1) {
        rData = data.GAIN;
      } else {
        rData = data.GAIN;
      }

      switch (time) {
        case 0: {
          setmealarr(rData.BREAKFAST);
          break;
        }
        case 1: {
          setmealarr(rData.LUNCH);
          break;
        }
        case 2: {
          setmealarr(rData.DINNER);
          break;
        }
      }
    }
  }, [time, type, dietData]);

  if (!mealArr) {
    return (
      <Text style={{ width: "100%", textAlign: "center", marginTop: 32 }}>
        No meal data
      </Text>
    );
  }

  return (
    <FlatList
      data={mealArr}
      style={{
        paddingHorizontal: 22,
      }}
      renderItem={({ index, item }) => {
        return (
          <MealRow
            key={index}
            i={item[0]}
            item={item}
            food={item[1]}
            cal={100}
            wgt={200}
            sheetRef={sheetRef}
            setitemData={setitemData}
          />
        );
      }}
      keyExtractor={(e) => e[0]}
    />
  );
};

export default function DietScreen({ sheetRef, setitemData, profileModal }) {
  const navigation = useNavigation();

  const [dietData, setdietData] = useState(null);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const [ind, setind] = useState(0);
  const theme = useTheme();
  const [time, setTime] = useState(0);
  const [type, settype] = useState(0);
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [menu, setmenu] = useState(false);
  const openMenu = () => setmenu(true);

  const closeMenu = () => setmenu(false);

  const handleDataGather = async () => {
    const planData = JSON.parse(await getPlanData());
    if (planData) {
      setdietData(planData);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    handleDataGather().then(() => {
      setRefreshing(false);
    });
    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  }, []);

  useLayoutEffect(() => {
    handleDataGather().then(() => setLoading(false));
  }, []);

  if (loading || !dietData) {
    return (
      <View
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <Text
          style={{
            fontSize: 19,
            width: "100%",
            display: "flex",
            textAlign: "center",
            paddingTop: 52,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading
        </Text>
      </View>
    );
  }

  return (
    <>
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={{
              backgroundColor: "white",
              margin: 32,
              padding: 22,
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#000",
                fontFamily: "Inter-Medium",
                marginBottom: 12,
              }}
            >
              Select Meal Type
            </Text>
            <TouchableRipple onPress={() => settype(0)}>
              <View
                style={{
                  height: 52,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <RadioButton
                  status={type === 0 ? "checked" : "unchecked"}
                  onPress={() => settype(0)}
                />
                <Text
                  style={{
                    fontSize: 18,
                    marginLeft: 7,
                    fontFamily: "Inter-Medium",
                  }}
                >
                  Weight Loss
                </Text>
              </View>
            </TouchableRipple>
            <TouchableRipple
              onPress={() => settype(1)}
              style={{ width: "100%" }}
            >
              <View
                style={{
                  height: 52,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <RadioButton
                  status={type === 1 ? "checked" : "unchecked"}
                  onPress={() => settype(1)}
                />
                <Text
                  style={{
                    fontSize: 18,
                    marginLeft: 7,
                    fontFamily: "Inter-Medium",
                  }}
                >
                  Weight Gain
                </Text>
              </View>
            </TouchableRipple>
          </Modal>
        </Portal>
        <View
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#fff",
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "column",
              paddingBottom: 12,
            }}
          >
            <Header />
            <SubHeader
              profileModal={profileModal}
              menu={menu}
              type={type}
              openMenu={openMenu}
              closeMenu={closeMenu}
              navigation={navigation}
              showModal={showModal}
            />
            <TimePicker time={time} setTime={setTime} />
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              flex: 1,
            }}
          >
            <MealRender
              type={type}
              ind={ind}
              time={time}
              dietData={dietData}
              sheetRef={sheetRef}
              setitemData={setitemData}
            />
          </View>
        </View>
      </Provider>
    </>
  );
}
