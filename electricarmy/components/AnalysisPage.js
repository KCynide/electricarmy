import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  View
} from "react-native";
import * as Location from "expo-location";
import Icon from '@expo/vector-icons/FontAwesome';
import Icon5 from '@expo/vector-icons/FontAwesome5';

function AnalysisPage({ navigation }) {
  const [city, setCity] = useState(true);
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
      { useGoogleMaps: false }
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
        1인 가구
      </Text>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <TouchableOpacity
        style={styles.setting}
        onPress={() => navigation.navigate('SettingPage')}
      >
        <Icon name="gear" size={30} color="#ffffff" />
      </TouchableOpacity>
    </View>
    <View style={styles.analysispage1}>
      <View style={styles.analysispagesetting}>
        <Text style={styles.analysispagetext}>
          Analysis
        </Text>
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
  analysispage1: {
    marginTop: 60,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  analysispagesetting: {
    backgroundColor: "#a0c16d",
    width: "90%",
    height: "90%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  analysispagetext: {
    fontSize: 20,
  },
});

export default AnalysisPage;