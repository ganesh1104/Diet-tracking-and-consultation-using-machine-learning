import React, { useEffect, useState } from "react";
import style from "../../styles/land.style";

import { loginStyle } from "../../styles/land.style";
import {
  //   TextInput,
  Button,
  TouchableRipple,
  useTheme,
  Appbar,
  Divider,
  ActivityIndicator,
} from "react-native-paper";

import {
  SafeAreaView,
  Image,
  View,
  Text,
  TextInput,
  ToastAndroid,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { doLogin } from "../../helpers/authHelper";
import {
  removeAuthData,
  storeAuthData,
  getAuthData,
} from "../../helpers/authHelper";
import { getUserDatabyUID } from "../../helpers/dbHelper";

const LoginScreen = ({ navigation }) => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={loginStyle.safe}>
      <StatusBar style="dark" backgroundColor="#fefefe" />
      <View style={loginStyle.view1}>
        <View style={loginStyle.view3}>
          <Text variant="headlineMedium" style={loginStyle.text1}>
            Login
          </Text>
          <Divider style={{ width: "100%", marginTop: 22 }} />

          <Text
            style={{
              ...loginStyle.text5,
              color: theme.colors.secondary,
            }}
          >
            Email
          </Text>
          <TextInput
            label={"Email"}
            value={email}
            onChangeText={setEmail}
            placeholder="sample@gmail.com"
            style={loginStyle.textinp1}
          />
          <Text
            style={{
              ...loginStyle.text6,
              color: theme.colors.secondary,
            }}
          >
            Password
          </Text>
          <TextInput
            label={"Password"}
            secureTextEntry={true}
            value={pass}
            onChangeText={setPass}
            placeholder="Password"
            style={loginStyle.textinp1}
          />
          <TouchableRipple
            rippleColor="rgba(255,255,255,0.1)"
            onPress={() => {
              setLoading(true);
              doLogin(email, pass)
                .then(async (r) => {
                  if (!r.errorBool) {
                    if (r.response.refreshToken) {
                      const loginData = r.response;
                      storeAuthData(
                        loginData.uid,
                        loginData.accessToken,
                        loginData.refreshToken,
                        loginData.account_type
                      )
                        .then((r) => {
                          ToastAndroid.show(
                            "Login Succesfull",
                            ToastAndroid.SHORT
                          );
                          navigation.reset({
                            index: 0,
                            routes: [{ name: "land" }],
                          });
                        })
                        .catch((e) => {
                          throw e;
                        });
                    }
                  } else {
                    ToastAndroid.show(
                      "Failed: " + JSON.stringify(r.errorMessage.message),
                      ToastAndroid.SHORT
                    );
                  }
                  setLoading(false);
                })
                .catch((e) => {
                  console.log(e);
                  ToastAndroid.show(
                    "Failed: " + JSON.stringify(e.message),
                    ToastAndroid.SHORT
                  );
                  setLoading(false);
                });
            }}
            style={{
              marginTop: 22,
              width: "100%",
              borderRadius: 6,
              backgroundColor: theme.colors.primary,
              height: 52,

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!loading ? (
              <Text style={{ color: "#fff" }}>Login</Text>
            ) : (
              <ActivityIndicator animating={true} color={"#fff"} />
            )}
          </TouchableRipple>
          <Divider style={{ width: "100%", marginTop: 22 }} />
          <View style={loginStyle.view6}>
            <Text style={loginStyle.text7}>Dont have an account?</Text>
          </View>
          <TouchableRipple
            onPress={() => {
              navigation.navigate("signup");
            }}
            rippleColor="rgba(0, 0, 0, .32)"
            style={loginStyle.touch4}
          >
            <Text style={loginStyle.text8}>Sign Up from here</Text>
          </TouchableRipple>
        </View>
        <View
          rippleColor="rgba(255,255,2555, .32)"
          style={loginStyle.view7}
        ></View>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
