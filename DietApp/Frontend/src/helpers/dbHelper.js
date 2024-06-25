export const API_URL = "http://192.168.88.40:6000/";
// const API_URL = "http://192.168.118.69:3000/api/v1/";
import AsyncStorage from "@react-native-async-storage/async-storage";
const DATA_STORE = "@data_key";


const PLAN_STORE = "@plan_key";

export async function storePlanData(str) {
  try {
    console.log("plan data update" + str);
    await AsyncStorage.setItem(PLAN_STORE, str);
    return str;
  } catch (e) {
    return e;
  }
}

export async function remorePlanData() {
  try {
    await AsyncStorage.removeItem(PLAN_STORE);
  } catch (e) {
    return e;
  }
}

export async function getPlanData() {
  try {
    const value = await AsyncStorage.getItem(PLAN_STORE);
    if (!value) {
      return null;
    }
    return value;
  } catch (e) {
    return e;
  }
}

export async function storeProData(age, wgt, hgt) {
  try {
    const obj = {
      age: age,
      wgt: wgt,
      hgt: hgt,
    };
    const str = JSON.stringify(obj);
    console.log("Profile data update " + str);
    await AsyncStorage.setItem(DATA_STORE, str);
    return str;
  } catch (e) {
    return e;
  }
}

export async function remoreProData() {
  try {
    await AsyncStorage.removeItem(DATA_STORE);
  } catch (e) {
    return e;
  }
}

export async function getProData() {
  try {
    const value = await AsyncStorage.getItem(DATA_STORE);
    if (!value) {
      return null;
    }
    return value;
  } catch (e) {
    return e;
  }
}

export async function getDietData(age, wgt, hgt) {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let res = await fetch(
      API_URL + `diet?weg=${wgt}&age=${age}&hgt=${hgt / 100}`,
      requestOptions
    );
    res = await res.json();
    return res;
  } catch (e) {
    console.log(e);
    return e;
  }
}
export async function getItemData(id) {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let res = await fetch(API_URL + `getItem?id=${id}`, requestOptions);
    // res = await res.text();
    res = await res.json();
    return res;
  } catch (e) {
    return e;
  }
}
export async function getUserDatabyUID(uid) {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let res = await fetch(
      "http://ec2-3-109-152-89.ap-south-1.compute.amazonaws.com:3000/api/v1/" +
        "getUserData?uid=" +
        uid,
      requestOptions
    );
    res = await res.json();
    return res;
  } catch (e) {
    return e;
  }
}

export async function updateUserData(uid, fname, lname, initiated) {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let obj = {
      uid: uid,
    };
    if (fname) {
      Object.assign(obj, { fname: fname });
    }
    if (lname) {
      Object.assign(obj, { lname: lname });
    }
    if (initiated) {
      Object.assign(obj, { initiated: initiated });
    }
    var raw = JSON.stringify(obj);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    let res = await fetch(
      "http://ec2-3-109-152-89.ap-south-1.compute.amazonaws.com:3000/api/v1/" +
        "updateUserData",
      requestOptions
    );
    res = res.json();
    return res;
  } catch (e) {
    return e;
  }
}
