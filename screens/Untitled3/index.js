import { View } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1,
      alignItems: "start"
    }} style={styles.XFUMEzxR}><Text style={styles.lOhmvlPA}>Email ID</Text><Text style={styles.pQLqikRr}>Password</Text><TextInput style={styles.suahXEyk}></TextInput><View style={styles.RggRLvlb}></View></ScrollView>
    <TextInput style={styles.TxRIaxhZ}></TextInput></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  lOhmvlPA: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    fontWeight: "700"
  },
  pQLqikRr: {
    width: 100,
    height: 42,
    lineHeight: 14,
    fontSize: 19,
    borderRadius: 0,
    fontWeight: "700"
  },
  TxRIaxhZ: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 206,
    height: 30,
    position: "absolute",
    top: 9,
    left: 141
  },
  suahXEyk: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 212,
    height: 35,
    position: "absolute",
    left: 139,
    top: 55
  },
  RggRLvlb: {
    height: 60,
    width: 140,
    backgroundColor: "#491616",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 179,
    left: 71,
    borderColor: "#4d1313"
  },
  XFUMEzxR: {
    backgroundColor: "#8d8fac",
    borderRadius: 1
  }
});
export default Untitled3;