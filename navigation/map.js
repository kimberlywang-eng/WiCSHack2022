import * as React from "react"
import MapView, { Callout, Marker } from "react-native-maps"
import { StyleSheet, Text, View, Dimensions } from "react-native"
import MainContainer from '../NavigationBar/MainContainer';
import Navigation from "./index-login";
import LoginScreen from "../screens/LoginScreen";


export default function App() {
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 30.283682,
          longitude: -97.732536,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0121
        }}
      >
        <Marker
          coordinate={{
            latitude: 30.283682,
            longitude: -97.732536
          }}
        >
          <Callout>
            <Text>You're here</Text>
          </Callout>
        </Marker>
      </MapView>
      <View>
        <MainContainer>
            {/* size={25} */}
        </MainContainer>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
})
