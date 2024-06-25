import { StyleSheet, PixelRatio } from "react-native";
export const landStyle = StyleSheet.create({
  scrollView: {
    backgroundColor: "red",
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },

  headerStyle: {
    padding: 32,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerProfile: {
    display: "flex",
    flexDirection: "row",
  },
  headerName: {
    fontFamily: "Bebas",
    fontSize: 32,
    color: "#000",
  },
  headerWeight: {
    fontFamily: "Inter-Medium",
    fontSize: 13,
    color: "#767676",
  },

  bannerDataCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 12,
    paddingHorizontal: 22,
    gap: 6,
  },
  bannerDataCardCont: {
    backgroundColor: "#f5f5f5",
    padding: 12,
    display: "flex",
    flex: 1,

    borderRadius: 12,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  bannerDataCardName: {
    color: "#000",
    fontSize: 21,
    marginTop: 8,
    fontFamily: "Bebas",
  },
  calorySectionCard: {
    padding: 22,
    display: "flex",
    flexDirection: "column",
  },
  calorySectionData: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
  },
  calorySectionBarCont: {
    position: "relative",
    height: 36,
    borderRadius: 12,
    backgroundColor: "#f7f7f7",
    marginTop: 12,
  },
  calorySectionCountRowCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  calorySectionCountRowDataCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  calorySectionCountRowCIndi: {
    height: "100%",
    width: 6,
    borderRadius: 120,
    backgroundColor: "#3B82F6",
  },
  calorySectionCountRowPIndi: {
    height: "100%",
    width: 6,
    borderRadius: 120,
    backgroundColor: "#FFA8FC",
  },
  calorySectionCountRowFIndi: {
    height: "100%",
    width: 6,
    borderRadius: 120,
    backgroundColor: "#FFE976",
  },
  calorySectionCountRowDataName: {
    color: "#000",
    fontFamily: "Inter-SemiBold",
    fontSize: 16,
    marginLeft: 12,
  },
  caloryNotiCont: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 12,
    marginTop: 22,
    padding: 10,
    paddingHorizontal: 16,
    backgroundColor: "#FFEBA6",
  },

  caloryNotiIco: {
    color: "#000",
    fontFamily: "Inter-Medium",
    fontSize: 16,
    marginLeft: 6,
  },

  weeklySectionCont: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 32,
  },

  weekWeekName: {
    fontFamily: "Inter-Medium",
    fontSize: 12,
    color: "#959595",
  },
  weekWeekIndi: {
    width: 42,
    height: 42,
    borderRadius: 120,
    backgroundColor: "#F5F5F5",
  },
  weekWeekCheckIndi: {
    width: 42,
    height: 42,
    borderRadius: 120,
    backgroundColor: "#3B82F6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  weekStepCount: {
    fontSize: 12,
    color: "#3B82F6",
    fontFamily: "Inter-Bold",
  },
});
