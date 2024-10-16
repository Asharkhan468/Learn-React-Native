import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }}>
      <Text style={{
        fontSize:29,
        color:'blue',
        backgroundColor:'yellow',
        margin:15,
        padding:15,
        borderCurve:'continuous',
        fontWeight:'bold'
      }}>Hello React Native!</Text>
    </View>
  );
}
