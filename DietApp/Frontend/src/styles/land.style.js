import { StyleSheet, PixelRatio } from "react-native";

export const welcomeStyle = StyleSheet.create({
  welcomeBase: { height: "100%", backgroundColor: "#fff", width: "100%" },
  view1: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexGrow: 1,
  },
  view2: {
    width: "100%",
    padding: 32,
    paddingTop: 92,
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  view3: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text0: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    color: "#000",
    fontFamily: "Inter-Medium",
  },
  text1: {
    width: "100%",
    textAlign: "center",
    fontSize: 36,
    color: "#3B82F6",
    marginTop: -4,
    fontFamily: "Inter-Bold",
  },
  text2: {
    width: "100%",
    color: "#000",
    fontSize: 15,
    marginTop: 8,
    textAlign: "center",
    fontFamily: "Inter-Regular",
  },
  view4: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  text3: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    textAlignVertical: "center",
    paddingLeft: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    backgroundColor: "#fff",
    fontSize: 16,
  },
  touch1: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "center",
    paddingLeft: 32,
    paddingRight: 32,
    backgroundColor: "#FDE68A",
  },
  view5: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text4: { fontSize: 26, fontFamily: "Inter-Bold" },
  touch2: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "center",
    paddingLeft: 32,
    paddingRight: 32,
    backgroundColor: "#000",
  },
  view6: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text5: { fontSize: 26, fontFamily: "Inter-Bold", color: "#FDE68A" },
  text6: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    textAlignVertical: "center",
    paddingLeft: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    backgroundColor: "#fff",
    fontSize: 16,
  },
});

export const loginStyle = StyleSheet.create({
  safe: {
    height: "100%",
    backgroundColor: "#fefefe",
    width: "100%",
  },
  view1: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexGrow: 1,
  },

  view3: {
    padding: 42,
    paddingTop: 72,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexGrow: 1,
  },
  touch1: {
    overflow: "hidden",
    height: 42,
    width: 42,
    display: "flex",
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text1: {
    marginTop: 16,
    fontWeight: "400",
    fontSize: 22,
    fontFamily: "Inter-Bold",
    color: "#000",
  },
  view4: {
    display: "flex",
    width: "100%",
    marginTop: 22,
  },
  text2: {
    fontFamily: "Inter-Medium",
    marginBottom: 8,
    fontSize: 14,
    paddingLeft: 6,
  },
  view5: {
    display: "flex",
    width: "100%",
    padding: 4,
    height: 42,
    backgroundColor: "#f5f5f5",
    borderRadius: 180,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  touch2: {
    height: "100%",
    borderRadius: 120,
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text3: {
    fontSize: 13,
    fontFamily: "Inter-Medium",
  },
  touch3: {
    height: "100%",
    borderRadius: 120,
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text4: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
  },
  text5: {
    fontFamily: "Inter-Medium",
    marginTop: 18,
    fontSize: 14,
    paddingLeft: 6,
  },
  textinp1: {
    width: "100%",
    height: 42,
    backgroundColor: "#f1f1f1",
    marginTop: 6,

    paddingLeft: 18,
    borderRadius: 8,
  },
  text6: {
    fontFamily: "Inter-Medium",
    marginTop: 20,
    fontSize: 14,
    paddingLeft: 6,
  },
  view6: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  text7: {
    fontSize: 13,
    fontFamily: "Inter-Regular",
  },
  touch4: {
    width: "100%",
    marginTop: 3,
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  text8: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },
  view7: {
    padding: 32,
    paddingTop: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  touch5: {
    // width: 62,
    height: 62,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -32,
    borderRadius: 120,
  },
  view8: {
    position: "absolute",
    bottom: -300,
    transform: [{ rotate: "-20deg" }],
    left: 0,
    width: 500,
    zIndex: -100,
    height: 500,
    borderRadius: 360000,
  },
});

export const signupStyle = StyleSheet.create({
  safe: {
    height: "100%",
    backgroundColor: "#fff",
    width: "100%",
  },
  view1: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexGrow: 1,
  },
  view2: {
    position: "absolute",
    top: -150,
    transform: [{ rotate: "-20deg" }],
    right: -200,
    width: 300,
    height: 300,
    zIndex: -100,
    backgroundColor: "#fff",
    borderRadius: 360000,
  },
  view3: {
    padding: 42,
    paddingTop: 72,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexGrow: 1,
  },
  touch1: {
    overflow: "hidden",
    height: 42,
    width: 42,
    display: "flex",
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  text1: {
    marginTop: 20,
    color: "#353535",
    fontWeight: "400",
    fontSize: 22,
    fontFamily: "Inter-Bold",
  },
  view4: { display: "flex", width: "100%", marginTop: 0 },
  text2: {
    color: "#656565",
    fontSize: 14,
    fontFamily: "Inter-Medium",
    marginTop: 22,
    paddingLeft: 6,
  },
  view5: {
    display: "flex",
    width: "100%",
    padding: 4,
    marginTop: 12,
    height: 42,
    backgroundColor: "#f5f5f5",
    borderRadius: 180,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  touch2: {
    height: "100%",
    borderRadius: 120,
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text3: { fontSize: 14, fontFamily: "Inter-Medium" },
  touch3: {
    height: "100%",
    borderRadius: 120,
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textinp1: {
    width: "100%",
    height: 42,
    backgroundColor: "#f1f1f1",
    marginTop: 6,
    paddingLeft: 18,
    borderRadius: 8,
  },
  view6: {
    marginTop: 22,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text4: {
    fontSize: 14,
    color: "#656565",
    fontFamily: "Inter-Regular",
    paddingLeft: 3,
  },
  view7: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  text5: { fontSize: 14, fontFamily: "Inter-Regular" },
  touch4: {
    width: "100%",
    marginTop: 3,
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  text6: {
    fontSize: 16,
    fontFamily: "Inter-Bold",
  },
  view8: {
    padding: 32,
    paddingTop: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  touch5: {
    height: 52,
    backgroundColor: "#3B82F6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -32,
    borderRadius: 12,
    paddingLeft: 32,
    paddingRight: 32,
  },
  text7: {
    fontSize: 18,
    color: "#fff",
  },
  view9: {
    position: "absolute",
    bottom: -300,
    transform: [{ rotate: "-20deg" }],
    left: 0,
    width: 500,
    zIndex: -100,
    height: 500,
    backgroundColor: "#d9f99d",
    borderRadius: 360000,
  },
});

export const doctorIndexStyle = StyleSheet.create({
  view1: {
    width: "100%",
    height: "auto",
    // margin: 102,
    // marginRight: 24,
    marginBottom: 32,
    paddingHorizontal: 32,
    padding: 0,
    elevation: 0,
    borderRadius: 260,
    position: "absolute",
    bottom: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // overflow: "hidden",
    zIndex: 10,
  },
  touch1: {
    width: 60,
    height: 60,
    display: "flex",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  view2: {
    width: "100%",
    height: "100%",
    marginTop: -3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  view3: {
    width: "100%",
    height: "100%",
  },
});

export const doctorLandStyle = StyleSheet.create({
  text1: {
    fontFamily: "Inter-Medium",
    fontSize: 16,
    paddingLeft: 3,
    marginTop: 22,
  },
  view1: {
    width: "100%",
    marginTop: 9,
    display: "flex",
    flexDirection: "row",
  },
  view2: {
    width: "auto",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    marginRight: 6,
  },
  linear1: {
    padding: 12,
    borderRadius: 12,
  },
  text2: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#f5f3ff",
  },
  text3: {
    fontSize: 26,
    color: "#fff",
    fontFamily: "Inter-Bold",
  },
  view3: {
    width: "auto",
    display: "flex",
    flexDirection: "column",
    marginLeft: 6,
    flexGrow: 1,
  },
  text4: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#fef9c3",
  },

  text5: {
    fontSize: 26,
    color: "#fff",
    fontFamily: "Inter-Bold",
  },
  view4: {
    width: "100%",
    marginTop: 12,
    display: "flex",
    flexDirection: "row",
  },
  view5: {
    width: "auto",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    marginRight: 6,
  },
  text6: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#ecfccb",
  },
  text7: {
    fontSize: 26,
    color: "#fff",
    fontFamily: "Inter-Bold",
  },
  view6: {
    width: "auto",
    display: "flex",
    flexDirection: "column",
    marginLeft: 6,
    flexGrow: 1,
  },
  text8: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#fecdd3",
  },
  text9: {
    fontSize: 26,
    color: "#fff",
    fontFamily: "Inter-Bold",
  },
  text10: {
    fontFamily: "Inter-Regular",
    fontSize: 18,
  },
  view7: {
    width: "100%",
    height: "auto",
    // backgroundColor: "#eff6ff",
    display: "flex",
    flexDirection: "column",
    borderRadius: 8,

    //   elevation: 2,
    marginTop: 12,
    padding: 12,
    paddingTop: 6,
    paddingBottom: 12,
  },
  text11: {
    // color: "#000",
    fontFamily: "Inter-Medium",
    fontSize: 16,
    marginTop: 4,
  },
  view8: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text12: {
    fontSize: 18,
    fontFamily: "Inter-Regular",
  },
  view9: {
    width: "100%",
    display: "flex",
    // marginTop: 9,
    flexDirection: "row",

    marginTop: 12,
    padding: 0,
    borderRadius: 12,
  },
  view10: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
  },
  text13: {
    fontSize: 16,
    fontFamily: "Inter-Medium",
    // padding: 10,

    display: "flex",
    flexDirection: "row",

    flexGrow: 1,
  },
  text14: {
    fontSize: 16,
    fontFamily: "Inter-Medium",
    // padding: 10,
  },
  touch1: {
    // backgroundColor: "#f5f5f5",
    width: 82,
    height: 82,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    borderRadius: 12,
  },
  view11: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // borderBottomColor: "#e0e0e0",
    alignItems: "center",

    // borderBottomWidth: 1,
  },
  moreIcoOuterCont: {
    height: 58,
    width: 58,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 120,
  },
  text15: {
    fontSize: 12,
    marginTop: 8,
    fontFamily: "Inter-Medium",
  },
  text16: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    padding: 10,
  },
  touch2: {
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: "100%",
    height: 42,
  },
  text17: {
    fontFamily: "Inter-Medium",
    fontSize: 16,
  },
  text18: {
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",

    fontFamily: "Inter-Medium",
    paddingTop: 82,
    paddingBottom: 42,
  },
  view13: {
    borderRadius: 12,
    padding: 12,
    paddingLeft: 24,
    paddingRight: 24,
    width: "100%",
    marginTop: 22,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text19: {
    maxWidth: "60%",
    fontFamily: "Inter-SemiBold",
    fontSize: 22,
  },
  view14: {
    height: 250,
    width: 250,
    position: "absolute",
    borderRadius: 200,
    // backgroundColor: "#d1fae5",
    top: -100,
    left: -100,
    zIndex: 10,
  },
  view15: {
    height: 300,
    width: 300,
    position: "absolute",
    borderRadius: 200,
    // backgroundColor: "#fed7aa",
    bottom: -150,
    right: -150,
    zIndex: 10,
  },
  view16: {
    width: "100%",
    height: "100%",
    zIndex: 100,
    // padding: 32,
  },
  view17: {
    position: "relative",
    width: "100%",
    display: "flex",
    height: 200,

    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f6f6f6",
    // alignItems: "center",
  },
  text20: {
    fontFamily: "Inter-Medium",
    fontSize: 16,
  },
  text21: {
    fontFamily: "Inter-Medium",
    fontSize: 20,
    color: "#fff",
    // marginTop: -2,
  },
  touch3: {
    width: 42,
    height: 42,
    backgroundColor: "#f1f1f1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});

export const doctorPatientStyle = StyleSheet.create({
  view1: {
    width: "100%",
    marginTop: 12,
  },
  view2: {
    width: "100%",
    display: "flex",
    marginTop: 9,
    flexDirection: "column",
  },
  view3: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
  },
  text1: {
    flexGrow: 1,
    fontSize: 16,
    fontFamily: "Inter-Bold",
    padding: 10,
    display: "flex",
    flexDirection: "row",
  },
  text2: {
    fontSize: 16,
    fontFamily: "Inter-Bold",
    padding: 10,
  },
  touch1: {
    paddingVertical: 5,
    borderRadius: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e9e9e9",
  },
  view3: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  view4: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    flexGrow: 1,
  },
  text3: {
    fontSize: 16,
    marginLeft: 10,
    color: "#000",
    fontFamily: "Inter-Medium",
  },
  text4: {
    fontSize: 12,
    marginLeft: 10,
    fontFamily: "Inter-Medium",
  },
  text5: {
    fontSize: 14,

    fontFamily: "Inter-Medium",

    padding: 10,
  },
  view5: {
    width: "100%",
    height: "100%",
    zIndex: 100,
    padding: 0,
  },
  view6: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
    paddingBottom: 0,
  },
  text6: {
    fontFamily: "Inter-Bold",
    fontSize: 26,
    marginTop: -2,
  },
  touch2: {
    width: 42,
    height: 42,
    backgroundColor: "#f1f1f1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  view13: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 24,
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export const doctorPatientProfileStyle = StyleSheet.create({
  view1: {
    width: "100%",
    // marginTop: 22,
    padding: 22,
  },
  view2: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "space-between",
  },
  text1: {
    fontFamily: "Inter-Medium",
    fontSize: 16,
  },
  view3: {
    width: "100%",
    display: "flex",

    flexDirection: "column",
  },
  view4: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 0,
  },
  text1: {
    fontSize: 16,
    fontFamily: "Inter-Medium",
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
  },
  text2: {
    fontSize: 16,
    fontFamily: "Inter-Medium",
    padding: 10,
  },
  touch1: {
    paddingBottom: 5,
    paddingTop: 5,
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 1,
    borderRadius: 12,
    zIndex: 0,
  },
  view5: {
    width: "100%",
    // height: 52,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  view6: {
    display: "flex",
    flexDirection: "column",
    padding: 10,

    // alignItems: "center",
    flexGrow: 1,
  },
  text3: {
    fontSize: 16,
    // marginLeft: 10,
    fontFamily: "Inter-Medium",
  },
  text4: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    padding: 10,
  },
  view7: {
    width: "100%",
    height: "100%",

    // padding: 26,
  },
  view8: {
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    paddingBottom: 0,
  },
  text5: {
    fontSize: 18,
    fontFamily: "Inter-SemiBold",
    marginTop: 12,
  },
  text6: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    marginTop: 0,
  },
  view9: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    // marginTop: 12,
  },
  view10: {
    width: "100%",
    height: "auto",
    backgroundColor: "#eff6ff",
    display: "flex",
    flexDirection: "column",
    borderRadius: 8,

    //   elevation: 2,
    marginTop: 9,
    padding: 12,
    paddingTop: 6,
    paddingBottom: 12,
  },
  text7: {
    color: "#000",
    fontFamily: "Inter-Medium",
    fontSize: 16,
    marginTop: 4,
  },
  view11: {
    display: "flex",
    flexDirection: "row",
    marginTop: 22,
  },
  text8: {
    fontSize: 16,
    width: "50%",
    textAlign: "left",
    color: "#000",
    fontFamily: "Inter-Medium",
  },
  text9: {
    fontSize: 16,
    width: "50%",
    textAlign: "left",
    color: "#000",
    fontFamily: "Inter-Medium",
  },
  view12: {
    display: "flex",
    width: "100%",
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "red",
    justifyContent: "center",
  },
});

export const doctoraddPatientStyle = StyleSheet.create({
  view1: {
    borderRadius: 12,
    marginTop: 24,
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  view2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 52,
    display: "flex",
    alignItems: "center",
  },
  text1: {
    width: "50%",
    marginRight: 6,
    fontFamily: "Inter-Regular",
    textAlign: "left",
    paddingLeft: 24,
  },
  text2: {
    width: "50%",

    textAlign: "left",
    paddingLeft: 24,
    fontFamily: "Inter-Regular",
  },
  view3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 52,
    display: "flex",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  text3: {
    width: "50%",
    fontSize: 16,
    textAlign: "left",
    paddingLeft: 24,
  },
  text4: {
    width: "50%",
    marginRight: 6,
    textAlign: "left",
    paddingLeft: 24,
  },
  view4: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    padding: 24,
    flexDirection: "column",
  },
  view5: {
    display: "flex",
    flexDirection: "row",
  },
  touch1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 52,
  },

  text5: {
    fontSize: 17,
    fontFamily: "Inter-Medium",
  },
  view6: {
    width: "100%",
    height: "100%",
    padding: 32,
  },
  textinp1: {
    width: "100%",
    marginTop: 7,
  },
  view7: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  text6: {
    fontFamily: "Inter-Bold",
    fontSize: 18,
  },
  text7: {
    fontSize: 18,
    marginTop: 22,
    fontFamily: "Inter-Medium",
  },
  text8: {
    width: "100%",
    marginTop: 12,
    marginBottom: 12,
  },
  touch2: {
    width: "100%",
    marginTop: 12,
    height: 42,
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text9: {
    fontSize: 16,
    fontFamily: "Inter-Medium",
  },
  view9: {
    height: 62,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fefefe",
    paddingLeft: 22,

    paddingRight: 22,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  text10: {
    fontSize: 17,

    fontFamily: "Inter-Medium",
  },
  textinp2: {
    display: "flex",
    flexGrow: 1,
    height: 52,
    fontSize: 18,
    paddingLeft: 22,
  },
});

export const doctorPatientReportStyle = StyleSheet.create({
  view1: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    borderRadius: 6,
    marginTop: 22,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    // elevation: 9,
    // backgroundColor: "#f3f3f3",
  },
  view2: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingLeft: 24,
    paddingRight: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  text1: {
    textAlign: "left",
    height: 52,
    textAlignVertical: "center",
    fontSize: 17,
    width: "80%",
  },
  view3: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingLeft: 24,
    paddingRight: 24,
  },
  text2: {
    textAlign: "left",
    height: 52,
    textAlignVertical: "center",
    width: "80%",
    fontSize: 19,
  },
  text3: {
    textAlign: "right",
    height: 52,
    textAlignVertical: "center",
    width: "20%",
    fontSize: 19,
  },
  view4: {
    width: "100%",
    height: "100%",
    padding: 32,
  },
  text4: {
    fontSize: 16,
  },
  text5: {
    marginTop: 22,
    fontSize: 16,
  },
  text6: {
    fontFamily: "Inter-SemiBold",
    fontSize: 16,
  },
});

export const doctorCreateReportStyle = StyleSheet.create({
  text1: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    paddingLeft: 4,
    color: "#535353",
  },
  textinp1: {
    // backgroundColor: "#f4f4f4",
    // height: 46,
    color: "#000",
  },
  view1: {
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 0,
    borderColor: "#F5F1FF",
    overflow: "hidden",
    backgroundColor: "#F5F1FF",
    display: "flex",
    flexDirection: "row",
    padding: 22,
    paddingVertical: 12,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    // elevation: 1,
  },
  view2: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    marginTop: 16,
  },
  view3: {
    display: "flex",
    width: 32,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 22,
  },
  view4: {
    width: 2,
    backgroundColor: "#D3E4FF",
    height: "100%",
    display: "flex",
    flex: 1,
  },
  view5: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  view6: {
    display: "flex",
    flexDirection: "row",
  },
  holderCont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
    flex: 1,
    marginLeft: -28,
  },
  holderCirc: {
    backgroundColor: "#3B82F6",
    width: 26,
    height: 26,
    marginTop: 12,
    display: "flex",
    borderRadius: 120,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  addButtCont: {
    flex: 1,
    borderRadius: 12,
    marginTop: 12,
    height: 52,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
});
