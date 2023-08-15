import React, {useState, useEffect} from 'react';
import * as Location from "expo-location";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
} from "react-native";

import * as Font from 'expo-font';
import Icon from '@expo/vector-icons/FontAwesome';


function HomePage({ navigation }) {
  const [city, setCity] = useState([]);
  const [ok, setOk] = useState(true);
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false },
    );
    setCity(location[0].region);
  };
  useEffect(() => {
    ask();
  }, []);
  return (
  <View style={styles.container}>
    <View style={styles.tobtabs}/**상단 바 설정 */>
      <View style={styles.nullfreunde}>
        <Image style={styles.iconimage} source={require("electricarmy/assets/a3f3dedf6f9fa.png")}/>
      </View>
      <Text style={styles.nhousehold}>
        
      </Text>
      <View style={styles.city}>
        
      </View>
      <TouchableOpacity
        style={styles.setting}
        onPress={() => navigation.navigate('SettingPage')}
      >
        <Icon name="gear" size={30} color="#ffffff" />
      </TouchableOpacity>
    </View>
    <View style={styles.homepage1} /** 메인 화면*/>
      <View style={styles.homepagetext}>
        <Image style={styles.mainimage} source={require("electricarmy/assets/photo_2023-08-16_08-17-17.jpg")}/>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1B6E8F',
    },
    tobtabs: {
      position: 'absolute',
      width: '100%',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '2%',
      borderBottomColor: "#fff",
      borderBottomWidth: 1,
    },
    nullfreunde: {
      height: '100%',
      width: '40%',
    },
    iconimage: {
      width: '60%',
      height: '100%',
      resizeMode: "contain",
    },
    nhousehold: {
      fontSize: 20,
      fontWeight: "500",
    },
    city: {
    },
    cityName: {
      fontSize: 20,
      fontWeight: "500",
    },
    setting: {
      
    },
    homepage1: {
      marginTop: 60,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    homepagetext: {
      backgroundColor: "#a0c16d",
      width: "90%",
      height: "90%",
      borderRadius: 25,
      alignItems: "center",
    },
    firstline: {
      width: "90%",
      flexDirection: "row",
      alignItems: "flex-end",
      marginTop: 30,
      paddingLeft: 20,
    },
    firstline1: {
      fontSize: 20,
      width: "50%",
    },
    firstline2: {
      fontSize: 30,
      width: "40%",
    },
    secondline: {
      width: "90%",
      flexDirection: "row",
      alignItems: "flex-end",
      paddingTop: 20,
      paddingLeft: 20,
    },
    secondline1: {
      fontSize: 20,
      width: "50%",
    },
    secondline2: {
      width: "40%",
      fontSize: 30,
    },
    thirdline: {
      width: "90%",
      flexDirection: "row",
      alignItems: "flex-end",
      paddingTop: 20,
      paddingLeft: 20,
    },
    thirdline1: {
      fontSize: 20,
      width: "50%",
    },
    thirdline2: {
      fontSize: 30,
      width: "40%",
    },
    fourthline: {
      width: "90%",
      height: "10%",
      flexDirection: "row",
      alignItems: "flex-end",
      paddingTop: 10,
      paddingLeft: 20,
    },
    fourthline1: {
      fontSize: 20,
    },
    fourthline2: {
      fontSize: 30,
      paddingLeft: 10,
    },
    fourthline3: {
      fontSize: 20,
      paddingLeft: 10,
    },
    fourthline4: {
      fontSize: 10,
      paddingLeft: 10,
    },
    fourthlineplus: {
      width: "90%",
      height: "10%",
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "flex-start",
      paddingLeft: 10,
    },
    fourthlineplus1: {
      fontSize: 20,
      paddingLeft: 10,
    },
    fourthlineplus2: {
      fontSize: 40,
      paddingLeft: 10,
    },
    fourthlineplus3: {
      fontSize: 20,
      paddingLeft: 10,
    },
    underline: {
      width: "85%",
      borderBottomColor: "#ffffff",
      borderBottomWidth: 1,
      marginTop: 30,
    },
    fifthline: {
      width: "90%",
      flexDirection: "row",
      alignItems: "center",
      marginTop: 30,
      marginLeft: 30,
    },
    fifthline1: {
      fontSize: 15,
      paddingLeft: 10,
    },
    sixthline: {
      width: "90%",
      flexDirection: "row",
      alignItems: "center",
      paddingTop: 20,
      marginLeft: 30,
    },
    sixthline1: {
      fontSize: 15,
      paddingLeft: 10,
    },
    colon: {
      fontSize: 30,
    },
    mainimage: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
      borderRadius: 25,
    },
});

export default HomePage;