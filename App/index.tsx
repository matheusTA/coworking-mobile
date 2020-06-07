import "react-native-gesture-handler";
import React, { useEffect } from "react";
import socketio from "socket.io-client";
import { NavigationContainer } from "@react-navigation/native";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import { AuthProvider } from "./contexts/auth";
import Routes from "./routes/index.routes";
import { Alert, AsyncStorage } from "react-native";
import { BASE_URL } from "./config/environment";

const App: React.FC = () => {
  useEffect(() => {
    AsyncStorage.getItem("@Auth:user").then((userJson) => {
      if (userJson) {
        const { _id } = JSON.parse(userJson);
        const socket = socketio(BASE_URL, {
          query: { company_id: _id },
        });

        socket.on("booking_response", (booking: any) => {
          Alert.alert(
            `Sua reserva em ${booking.spot.name} no ${format(
              new Date(booking.date),
              "'Dia' dd 'de' MMMM'",
              {
                locale: pt,
              }
            )} foi ${booking.approved ? "APROVADA" : "REJEITADA"}`
          );
        });
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
