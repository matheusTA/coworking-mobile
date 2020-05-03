import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Company, ResponseCompanyById } from "../../models/Company";
import { SocialIcon } from "react-native-elements";
import api from "../../services/api";
import MapLoading from "../../components/MapLoading";

import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

type RouteParamList = {
  companyId: string;
};

const CompanyProfile: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, RouteParamList>, string>>();
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

  if (loading) {
    return <MapLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={{ uri: company?.logo }} />

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
          <Text style={styles.profileData}>{company?.techs.join(", ")}</Text>
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
            style={{ backgroundColor: "#F6F6F6", borderRadius: 10 }}
          />
        ) : null}
      </View>
    </View>
  );
};

export default CompanyProfile;
