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
    }}><Text style={styles.lOhmvlPA}>Email ID</Text><Text style={styles.pQLqikRr}>Password</Text><TextInput style={styles.suahXEyk}></TextInput></ScrollView>
    <TextInput style={styles.TxRIaxhZ}></TextInput><Text style={styles.CCvopeGM}>Lorem ipsum…</Text></SafeAreaView>;
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
  CCvopeGM: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  suahXEyk: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 212,
    height: 35,
    position: "absolute",
    left: 139,
    top: 55
  }
});
export default Untitled3;