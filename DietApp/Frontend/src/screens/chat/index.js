import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import TinaPng from "../../../assets/avatars/mina.png";
import FeaIcon from "react-native-vector-icons/Feather";
import IonIcon from "react-native-vector-icons/Ionicons";
import MatIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar, TouchableRipple } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useLayoutEffect, useState } from "react";
import { API_URL, getProData, remoreProData } from "../../helpers/dbHelper";
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
import { FlatList } from "react-native-gesture-handler";
import { BlurView } from "expo-blur";

const IniChatData = [
  {
    role: "system",
    content:
      "Welcome to DietGPT👋, Ask any diet and fitness related question 🎊",
  },
];

const UserChat = ({ role, content }) => {
  return (
    <View
      style={{
        paddingHorizontal: 22,
        paddingVertical: 16,
        borderBottomColor: "#f5f5f5",
        borderBottomWidth: 1,
        backgroundColor: role == "user" ? "#f9f9f9" : "#fff",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
                  <Avatar.Text size={28} label="U"
                  />
          <Text style={{ fontSize: 14, fontFamily: "Inter-Medium" }}>
            {role == "user" ? "You" : "DietGPT"}
          </Text>
          <View
            style={{
              width: 3,
              height: 3,
              borderRadius: 120,
              backgroundColor: "#767676",
            }}
          />
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter-Medium",
              color: "#656565",
            }}
          >
            1 Hour ago
          </Text>
        </View>
        <View>
          <TouchableRipple
            style={{ backgroundColor: "#E8F0FE", padding: 6, borderRadius: 6 }}
          >
            <IonIcon name="copy-outline" size={16} color="#4F90FA" />
          </TouchableRipple>
        </View>
      </View>

      <View
        style={{
          paddingTop: 12,
          paddingBottom: 12,
          paddingHorizontal: 12,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Inter-Medium",
            color: "#000",
            // letterSpacing: 1,
            lineHeight: 23,
            flexWrap: "wrap",
          }}
        >
          {content}
        </Text>
      </View>
    </View>
  );
};

const SystemChat = ({ role, content }) => {
  return (
    <View
      style={{
        paddingHorizontal: 22,
        paddingVertical: 52,
        borderBottomColor: "#f5f5f5",
        borderBottomWidth: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Inter-SemiBold",
          color: "#000",
          maxWidth: 250,
          textAlign: "center",
          // letterSpacing: 1,
          lineHeight: 23,
          flexWrap: "wrap",
        }}
      >
        {content}
      </Text>
    </View>
  );
};

const ChatRender = ({ chatData }) => {
  const [convChatData, setconvChatData] = useState([]);

  const renderItem = (ei) => {
    let e = ei.item.obj;
    console.log("call");
    switch (e.role) {
      //   case "system": {
      //     return (
      //       <SystemChat
      //         key={Math.floor(Math.random() * 10000000)}
      //         content={e.content}
      //         role={e.role}
      //       />
      //     );
      //   }
      case "user": {
        return (
          <UserChat
            key={Math.floor(Math.random() * 10000000)}
            content={e.content}
            role={e.role}
          />
        );
      }
      case "assistant": {
        return (
          <UserChat
            key={Math.floor(Math.random() * 10000000)}
            content={e.content}
            role={e.role}
          />
        );
      }
    }
  };

  useEffect(() => {
    if (chatData.length > 0) {
      let arr = [];
      for (let i = 0; i < chatData.length; i++) {
        let tp = {
          id: i,
          obj: chatData[i],
        };
        arr = arr.concat(tp);
      }
      setconvChatData(arr);
    }
  }, [chatData]);

  return (
    <FlatList
      data={convChatData}
      style={{
        width: "100%",
        display: "flex",
        flex: 1,
        flexGrow: 1,
      }}
      inverted
      contentContainerStyle={{ flexDirection: "column-reverse" }}
      keyExtractor={(item) => item.id}
      initialNumToRender={5}
      maxToRenderPerBatch={10}
      windowSize={10}
      renderItem={renderItem}
    />
  );
};

const ChatScreen = ({ route, navigation }) => {
  const [inpData, setinpData] = useState("");
  const [chatData, setChatData] = useState(IniChatData);
  const [loading, setloading] = useState(false);
  const [pData, setPData] = useState(null);

  useEffect(() => {
    const run = async () => {
      let data = await getProData();
      data = JSON.parse(data);
      data = Object.assign(data, { name: "Ganesh" });
      console.log(data);
      setPData(data);
    };
    run();
  }, []);

  const sendGPT = async (messArr) => {
    // console.log("request GPT" + JSON.stringify(messArr[0]));
    let repl = {
      role: "system",
      content: `I am DietGPT, where I answer the questions which are ONLY related to Diet and Fitness. If any other question unrelated to fitness or diet is asked I will choose to NOT answer the question.I will not provide any diet plan or suggest any food items to eat even if the user asks me to.If user asks for a diet plan or dish suggestion respond user to use the given app for better diet recommendation. I will answer only in 40 to 50 words to whatever user asks. The name of user is ${pData.name} , he is ${pData.wgt} kilograms, having ${pData.hgt} metres as his height and his age is ${pData.age} years old.`,
    };
    messArr[0] = repl;
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({ mess_arr: messArr });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      let res = await fetch(API_URL + "ask", requestOptions);
      res = await res.json();
      return res;
    } catch (e) {
      console.log(e);
      return {
        role: "assistant",
        content: "Mobile Error Occurred",
      };
    }
  };

  const addChat = async (content) => {
    let nChat = {
      role: "user",
      content: content,
    };
    var joined = chatData.concat(nChat);
    setChatData(joined);
    setinpData("");
    var fres = await sendGPT(joined);
    njoined = joined.concat(fres);
    setChatData(njoined);
    console.log(fres);
  };

  const processChatAdd = async (e) => {
    let inData = inpData;
    inData = inData.toString().toLowerCase().trim();
    if (inData.length <= 0) return;
    if (loading) {
      ToastAndroid.show("Something is loading", ToastAndroid.SHORT);
      return;
    }
    setloading(true);
    await addChat(inData);
    setloading(false);
  };

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#121212",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <StatusBar animated backgroundColor="transparent" style="dark" />

      <View
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",

          width: "100%",
          flex: 1,
          backgroundColor: "#fff",
          overflow: "hidden",
          //   paddingBottom: 92,
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 22,
            paddingTop: 52,
            paddingBottom: 16,
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 12,
            borderBottomWidth: 1,
            borderBottomColor: "#e0e0e0",
          }}
        >
          <Text
            style={{ color: "#000", fontSize: 18, fontFamily: "Inter-Medium" }}
          >
            DietGPT
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter-SemiBold",
              color: "#349B3E",
            }}
          >
            {loading ? "Thinking" : "Online"}
          </Text>
        </View>
        <ChatRender chatData={chatData} />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 18,
          paddingRight: 16,
          backgroundColor: "#f5f5f5",
          gap: 14,
          paddingVertical: 16,
          borderTopWidth: 0,
          borderColor: "#e0e0e0",
        }}
      >
        <TextInput
          value={inpData}
          onChangeText={setinpData}
          style={{
            display: "flex",
            flex: 1,
            minHeight: 42,
            fontSize: 18,
            backgroundColor: "transparent",
            borderRadius: 22,
            color: "#000",
          }}
          multiline={true}
          placeholderTextColor="#454545"
          placeholder="Ask your question"
        />
        <TouchableRipple
          onPress={processChatAdd}
          style={{
            backgroundColor: "transparent",
            // width: 42,
            // height: 42,
            borderRadius: 12,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              backgroundColor: "#3B82F6",
              fontSize: 17,
              fontFamily: "Inter-Medium",
              color: "#fff",
              paddingHorizontal: 16,
              paddingVertical: 6,
              borderRadius: 120,
            }}
          >
            Ask
          </Text>
        </TouchableRipple>
      </View>
    </View>
  );
};

export default ChatScreen;
