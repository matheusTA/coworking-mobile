import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SearchBar } from "react-native-elements";
import { debounce } from "lodash";

import styles from "./styles";
import { ResponseCompaniesByName, Company } from "../../models/Company";
import api from "../../services/api";

export default function Search() {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    async function getCompanies(name: string) {
      const response = await api.get<ResponseCompaniesByName>(
        `/companies/${name}`
      );
      setCompanies(response.data.companies);
    }
    if (search !== "") {
      getCompanies(search);
    } else {
      setCompanies([]);
    }
  }, [search]);

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Pesquise por nome..."
        lightTheme={true}
        containerStyle={styles.inputContainer}
        onChangeText={(text) => setSearch(text)}
        value={search}
        onCancel={() => setSearch("")}
      />

      <ScrollView>
        {companies.map((company) => (
          <TouchableOpacity
            style={styles.spotsContainer}
            key={company._id}
            onPress={() =>
              navigation.navigate("CompanyProfilePage", {
                companyId: company._id,
              })
            }
          >
            <Image
              style={styles.spotImage}
              source={{
                uri: company.logo,
              }}
            />

            <View style={styles.spotData}>
              <Text style={styles.spotTitle}>{company.name}</Text>
              <Text style={styles.spotEmail}>{company.email}</Text>
              <Text style={styles.spotTechs}>{company.techs.join(", ")}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
