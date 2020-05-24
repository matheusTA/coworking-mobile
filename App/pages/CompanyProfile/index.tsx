import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { Company, ResponseCompanyById, Spot } from "../../models/Company";
import { SocialIcon } from "react-native-elements";
import api from "../../services/api";
import MapLoading from "../../components/MapLoading";

import styles from "./styles";

type RouteParamList = {
  companyId: string;
};

const CompanyProfile: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, RouteParamList>, string>>();
  const navigation = useNavigation();
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getCompany() {
      try {
        setLoading(true);

        if (route.params?.companyId) {
          const response = await api.get<ResponseCompanyById>(
            `/company/${route.params.companyId}`
          );

          setCompany(response.data.company);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    getCompany();
  }, []);

  function _handleProfileData() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <Image
              style={styles.profileImage}
              source={{ uri: company?.logo }}
            />

            <View style={styles.dataContainer}>
              <Text style={styles.profileLabel}>Nome:</Text>
              <Text style={styles.profileData}>{company?.name}</Text>
            </View>

            <View style={styles.dataContainer}>
              <Text style={styles.profileLabel}>Email:</Text>
              <Text style={styles.profileData}>{company?.email}</Text>
            </View>

            <View style={styles.dataContainer}>
              <Text style={styles.profileLabel}>Telefone:</Text>
              <Text style={styles.profileData}>{company?.phone}</Text>
            </View>

            <View style={styles.dataContainer}>
              <Text style={styles.profileLabel}>Tecnologias:</Text>
              <Text style={styles.profileData}>
                {company?.techs.join(", ")}
              </Text>
            </View>

            <View style={styles.dataContainer}>
              <Text style={styles.profileLabel}>Endereço:</Text>
              <Text style={styles.profileData}>
                {company?.street} - {company?.number} - ({company?.complement})
              </Text>
            </View>

            {company?.linkedin ? (
              <SocialIcon
                type="linkedin"
                button
                light
                title="Visitar Linkedin"
                style={styles.linkedinBotton}
                onPress={() =>
                  navigation.navigate("LinkedinProfile", {
                    linkedinProfile: company.linkedin,
                  })
                }
              />
            ) : null}
          </View>
        </View>
        <Text style={styles.spotsTitleSection}>Locais para alugar</Text>
      </>
    );
  }

  function _handleItemList(spot: Spot) {
    return (
      <TouchableOpacity style={styles.spotsContainer}>
        <Image style={styles.spotImage} source={{ uri: spot.image }} />

        <View style={styles.spotData}>
          <Text style={styles.spotTitle}>{spot.name}</Text>
          <Text style={styles.spotPrice}>{spot.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  if (loading) {
    return <MapLoading />;
  }

  return (
    <FlatList
      data={company?.spots}
      keyExtractor={(spot) => spot._id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={_handleProfileData}
      renderItem={({ item }) => _handleItemList(item)}
    />
  );
};

export default CompanyProfile;
