import React, { useEffect, useState } from "react";
import {
  Alert,
  AsyncStorage,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import api from "../../services/api";

import styles from "./styles";
import { User } from "../../models/User";

type RouteParamList = {
  spotId: string;
};

const Booking: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, RouteParamList>, string>>();
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  async function handleSubmit() {
    const user = await AsyncStorage.getItem("@Auth:user");

    if (user) {
      const { _id } = JSON.parse(user);
      await api.post(
        `/spots/${route.params.spotId}/bookings`,
        {
          date,
        },
        {
          headers: { user_id: _id },
        }
      );

      Alert.alert("Solicitacao de reservar enviada.");
      navigation.navigate("CompanyProfilePage");
    }
  }

  function handleCancel() {
    navigation.navigate("CompanyProfilePage");
  }

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Reservar local</Text>

      <Text style={styles.label}>Data de interesse *</Text>

      <TouchableOpacity style={styles.input} onPress={showDatepicker}>
        <Text>{`${format(date, "'Dia' dd 'de' MMMM'", {
          locale: pt,
        })} de ${date.getFullYear()}`}</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Hora de interesse *</Text>

      <TouchableOpacity style={styles.input} onPress={showTimepicker}>
        <Text>{`${date.getHours()}:${date.getMinutes()}`}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.buttonText}>Solicitar reserva</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => handleCancel()}
      >
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </SafeAreaView>
  );
};

export default Booking;
