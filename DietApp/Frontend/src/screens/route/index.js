import React, {
  useMemo,
  useCallback,
  useRef,
  useState,
  useEffect,
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
import ChatScreen from "../chat";

import FeaIcon from "react-native-vector-icons/Feather";
import IonIcon from "react-native-vector-icons/Ionicons";
import MatComIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MatIcon from "react-native-vector-icons/MaterialIcons";

import BottomSheet, {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { removeAuthData } from "../../helpers/authHelper";

const ItemDataBottomSheet = ({ sheetRef, itemData }) => {
  const snapPoints = useMemo(() => ["40%", "80%"], []);
  const handleSheetChange = useCallback((index) => {
    // console.log("handleSheetChange", index);
  }, []);

  useEffect(() => {
    console.log(itemData);
  }, [itemData]);

  const RenderTableRow = ({ title, data }) => {
    return (
      <DataTable.Row style={{ paddingHorizontal: 32 }}>
        <DataTable.Cell>{title}</DataTable.Cell>
        <DataTable.Cell numeric>{data}</DataTable.Cell>
      </DataTable.Row>
    );
  };

  const renderBackdrop = useCallback(
    (props) => <BottomSheetBackdrop {...props} appearsOnIndex={1} />,
    []
  );

  return (
    <BottomSheetModal
      ref={sheetRef}
      index={0}
      backdropComponent={renderBackdrop}
      snapPoints={snapPoints}
      backgroundStyle={{
        backgroundColor: "transparent",
      }}
      handleIndicatorStyle={{
        backgroundColor: "#fff",
        width: 60,
      }}
      onChange={handleSheetChange}
      enablePanDownToClose
    >
      {itemData && (
        <BottomSheetScrollView style={{ padding: 16 }}>
          <View
            style={{
              display: "flex",
              backgroundColor: "#fff",
              borderRadius: 22,
              padding: 22,
              paddingTop: 82,
            }}
          >
            <Text
              style={{
                color: "#000",
                fontFamily: "Bebas",
                fontSize: 52,
              }}
            >
              {itemData[1]}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 4,
              gap: 2,
            }}
          >
            <View
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "#fff",
                borderRadius: 22,
                padding: 16,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 16 }}>Calories</Text>
              <Text
                style={{
                  fontSize: 36,
                  fontFamily: "Inter-Bold",
                  marginTop: 22,
                }}
              >
                {itemData[2]}
              </Text>
              <Text style={{ fontSize: 16, marginTop: -5 }}>KCAL</Text>
            </View>
            {/* <View
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "#fff",
                borderRadius: 22,
                padding: 16,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 16 }}>Cooking Time</Text>
              <Text
                style={{
                  fontSize: 36,
                  fontFamily: "Inter-Bold",
                  marginTop: 22,
                }}
              >
                15
              </Text>
              <Text style={{ fontSize: 16, marginTop: -5 }}>MIN(s)</Text>
            </View> */}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 4,
              gap: 2,
            }}
          >
            <View
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "#fff",
                borderRadius: 22,
                padding: 16,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 16 }}>Poteins</Text>
              <Text
                style={{
                  fontSize: 36,
                  fontFamily: "Inter-Bold",
                  marginTop: 22,
                }}
              >
                {itemData[4]}
              </Text>
              <Text style={{ fontSize: 16, marginTop: -5 }}>GM</Text>
            </View>
            <View
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "#fff",
                borderRadius: 22,
                padding: 16,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 16 }}>Carbs</Text>
              <Text
                style={{
                  fontSize: 36,
                  fontFamily: "Inter-Bold",
                  marginTop: 22,
                }}
              >
                {itemData[6]}
              </Text>
              <Text style={{ fontSize: 16, marginTop: -5 }}>GM</Text>
            </View>
            <View
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "#fff",
                borderRadius: 22,
                padding: 16,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 16 }}>Sugar</Text>
              <Text
                style={{
                  fontSize: 36,
                  fontFamily: "Inter-Bold",
                  marginTop: 22,
                }}
              >
                {itemData[7]}
              </Text>
              <Text style={{ fontSize: 16, marginTop: -5 }}>GM</Text>
            </View>
          </View>
          <Button
            style={{
              width: "100%",
              height: 52,
              backgroundColor: "#03dac5",
              marginTop: 22,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            labelStyle={{ fontSize: 17, fontFamily: "Bebas" }}
            textColor="#000"
          >
            Set Reminder
          </Button>
        </BottomSheetScrollView>
      )}
    </BottomSheetModal>
  );
};

const ProfileBottomModal = ({ profileModal }) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ["30%", "50%"], []);
  const handleSheetChange = useCallback((index) => {
    // console.log("handleSheetChange", index);
  }, []);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        // disappearsOnIndex={0}
        appearsOnIndex={1}
      />
    ),
    []
  );

  return (
    <BottomSheetModal
      ref={profileModal}
      index={0}
      backdropComponent={renderBackdrop}
      snapPoints={snapPoints}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 200,
      }}
      onChange={handleSheetChange}
      enablePanDownToClose
    >
      <View
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          padding: 22,
        }}
      >
        {/* <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          <Avatar.Text size={92} label="GA" />
          <Text
            style={{ marginTop: 12, fontSize: 24, fontFamily: "Inter-Medium" }}
          >
            Ganesh Ambhore
          </Text>
          <Text style={{ marginTop: 0, fontSize: 16 }}>ganesh@gmail.com</Text>
        </View> */}
        <TouchableRipple
          onPress={() => {
            navigation.navigate("ageChange");
          }}
          rippleColor={"rgba(0,0,0,0.3)"}
          style={{
            backgroundColor: theme.colors.secondary,
            height: 52,
            display: "flex",
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          <Text
            style={{ fontSize: 16, fontFamily: "Inter-Medium", color: "#fff" }}
          >
            Edit Profile
          </Text>
        </TouchableRipple>
        <TouchableRipple
          onPress={async () => {
            await removeAuthData();
            navigation.reset({
              index: 0,
              routes: [{ name: "login" }],
            });
          }}
          rippleColor={"rgba(0,0,0,0.3)"}
          style={{
            backgroundColor: theme.colors.errorContainer,
            height: 52,
            display: "flex",
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 12,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter-Medium",
              color: theme.colors.error,
            }}
          >
            Logout
          </Text>
        </TouchableRipple>
      </View>
    </BottomSheetModal>
  );
};

const RouteNavScreen = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const sheetRef = useRef();
  const profileModal = useRef();
  const [itemData, setitemData] = useState();

  const theme = useTheme();
  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },

    {
      key: "chat",
      title: "chat",
      focusedIcon: "bell",
      unfocusedIcon: "bell-outline",
    },
    {
      key: "diet",
      title: "Diet",
      focusedIcon: "food",
      unfocusedIcon: "food-outline",
    },
  ]);

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case "home":
        return <LandScreen jumpTo={jumpTo} profileModal={profileModal} />;
      case "chat":
        return <ChatScreen jumpTo={jumpTo} profileModal={profileModal} />;
      case "diet":
        return (
          <DietScreen
            jumpTo={jumpTo}
            profileModal={profileModal}
            sheetRef={sheetRef}
            setitemData={setitemData}
          />
        );
    }
  };

  return (
    <BottomSheetModalProvider>
      {/* <SafeAreaView> */}
      <StatusBar
        backgroundColor="transparent"
        style="light"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <ItemDataBottomSheet sheetRef={sheetRef} itemData={itemData} />
        <ProfileBottomModal profileModal={profileModal} />
        <BottomNavigation
          labeled={false}
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          activeColor="#3B82F6"
          inactiveColor="#000"
          renderTouchable={(tprops) => {
            switch (tprops.route.title) {
              case "Home": {
                return (
                  <TouchableRipple {...tprops} rippleColor="rgba(0,0,0,0.2)">
                    <View
                      style={{
                        height: 52,
                        display: "flex",
                        flex: 0,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FeaIcon
                        name="home"
                        size={26}
                        color={index == 0 ? "#000" : "#757575"}
                      />

                      <Text
                        style={{
                          marginTop: 3,
                          fontSize: 12,
                          fontFamily: "Inter-Medium",
                          color: `${index == 0 ? "#000" : "#757575"}`,
                        }}
                      >
                        Home
                      </Text>
                    </View>
                  </TouchableRipple>
                );
              }

              case "chat": {
                return (
                  <TouchableRipple {...tprops} rippleColor="rgba(0,0,0,0.2)">
                    <View
                      style={{
                        display: "flex",
                        height: 52,
                        flex: 0,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <IonIcon
                        name="chatbubbles-outline"
                        size={26}
                        color={index == 1 ? "#000" : "#757575"}
                      />

                      <Text
                        style={{
                          marginTop: 3,
                          fontSize: 12,
                          fontFamily: "Inter-Medium",
                          color: `${index == 1 ? "#000" : "#757575"}`,
                        }}
                      >
                        Chat
                      </Text>
                    </View>
                  </TouchableRipple>
                );
              }
              case "Diet": {
                return (
                  <TouchableRipple {...tprops} rippleColor="rgba(0,0,0,0.2)">
                    <View
                      style={{
                        display: "flex",
                        height: 52,
                        flex: 0,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <IonIcon
                        name="fast-food-outline"
                        size={26}
                        color={index == 2 ? "#000" : "#757575"}
                      />

                      <Text
                        style={{
                          marginTop: 3,
                          fontSize: 12,
                          fontFamily: "Inter-Medium",
                          color: `${index == 2 ? "#000" : "#757575"}`,
                        }}
                      >
                        Diet Plan
                      </Text>
                    </View>
                  </TouchableRipple>
                );
              }
            }
          }}
          barStyle={{
            height: 82,
            backgroundColor: "#fff",
            borderTopColor: "#e0e0e0",
            borderTopWidth: 1,
            elevation: 5,
            display: "flex",
            paddingHorizontal: 8,
            paddingBottom: 12,
            justifyContent: "center",
          }}
          sceneAnimationEnabled
        />
      </View>
      {/* </SafeAreaView> */}
    </BottomSheetModalProvider>
  );
};

export default RouteNavScreen;
