import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import MapView, { Marker, Callout, Region } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useNavigation } from "@react-navigation/native";
import { CurrentRegion } from "../../models/User";
import { Company, ResponseCompaniesByLocation } from "../../models/Company";

import MapLoading from "../../components/MapLoading";
import api from "../../services/api";
import styles from "./styles";

export const Map: React.FC = () => {
  const navigation = useNavigation();
  const [currentRegion, setCurrentRegion] = useState<
    CurrentRegion | undefined
  >();
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }

    loadInitialPosition();
  }, []);

  useEffect(() => {
    async function loadCompanies() {
      try {
        const { status } = await requestPermissionsAsync();

        if (status === "granted") {
          const response = await api.get<ResponseCompaniesByLocation>(
            `/companies/location?latitude=${currentRegion?.latitude}&longitude=${currentRegion?.longitude}`
          );

          setCompanies(response.data.companies);
        }
      } catch (error) {}
    }

    loadCompanies();
  }, [currentRegion]);

  function handleRegionChanged(region: Region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return <MapLoading />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={currentRegion}
      showsMyLocationButton={true}
      showsUserLocation={true}
      onRegionChangeComplete={handleRegionChanged}
    >
      {companies.map((company) => (
        <Marker
          key={company._id}
          coordinate={{
            latitude: company.location.coordinates[1],
            longitude: company.location.coordinates[0],
          }}
        >
          <Image style={styles.avatar} source={{ uri: company.logo }} />
          <Callout
            onPress={() =>
              navigation.navigate("CompanyProfilePage", {
                companyId: company._id,
              })
            }
          >
            <View style={styles.callout}>
              <Text style={styles.companyName}>{company.name}</Text>
              <Text style={styles.companyTechs}>
                {company.techs.join(", ")}
              </Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
};

export default Map;
