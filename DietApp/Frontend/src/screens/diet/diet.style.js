import { StyleSheet, PixelRatio } from "react-native";
export const landStyle = StyleSheet.create({
  scrollView: {
    backgroundColor: "red",
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },

  headerCont: {
    padding: 32,
    paddingBottom: 6,
  },
  datePickCont: {
    paddingHorizontal: 22,
    marginBottom: 12,
  },
  datePickDay: { fontFamily: "Inter-Medium", fontSize: 12, color: "#959595" },
  datePickDateCont: {
    width: "100%",
    height: 52,
    backgroundColor: "#F5F5F5",
    marginTop: 12,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 13,
    justifyContent: "space-between",
    alignItems: "center",
  },
  datePickDate: {
    fontSize: 16,
    fontFamily: "Inter-Medium",
    backgroundColor: "#F5F5F5",
    color: "#8D8D8D",
    padding: 8,
    borderRadius: 8,
  },
  mealPickCont: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    //   height: 32,

    borderRadius: 12,
    paddingHorizontal: 22,
    paddingVertical: 22,
  },
  mealPickLabel: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    color: "#656565",
    borderRadius: 12,
    textAlign: "center",

    fontFamily: "Inter-Medium",
    fontSize: 14,
  },
});
