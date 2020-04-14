import React, { useRef, useState } from "react";
import {
  Platform,
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Input } from "react-native-elements";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";

const SignUp: React.FC = () => {
  const inputEmailRef = useRef<Input>(null);
  const inputPasswordRef = useRef<Input>(null);
  const inputPhoneRef = useRef<Input>(null);
  const inputTechsRef = useRef<Input>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [techs, setTechs] = useState<string>("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({
        ios: "height",
        android: undefined,
      })}
    >
      <Text style={styles.title}>Coworking</Text>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Input
            leftIcon={<FontAwesome name="user" size={24} color="#F95F62" />}
            leftIconContainerStyle={{ marginLeft: 3, marginRight: 8 }}
            label="Nome"
            placeholder="Fulano da Silva"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => inputEmailRef.current?.focus()}
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Input
            leftIcon={<MaterialIcons name="email" size={24} color="#F95F62" />}
            leftIconContainerStyle={{ marginLeft: 0, marginRight: 5 }}
            label="Email"
            placeholder="fulano@gmail.com"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            ref={inputEmailRef}
            blurOnSubmit={false}
            onSubmitEditing={() => inputPasswordRef.current?.focus()}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Input
            leftIcon={<MaterialIcons name="lock" size={24} color="#F95F62" />}
            leftIconContainerStyle={{ marginLeft: 0, marginRight: 5 }}
            label="Senha"
            placeholder="******"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            ref={inputPasswordRef}
            blurOnSubmit={false}
            onSubmitEditing={() => inputPhoneRef.current?.focus()}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.inputContainer}>
          <Input
            leftIcon={
              <MaterialIcons name="phone-iphone" size={24} color="#F95F62" />
            }
            leftIconContainerStyle={{ marginLeft: 0, marginRight: 5 }}
            label="Telefone"
            placeholder="(99) 9 9999-9999"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            returnKeyType="next"
            ref={inputPhoneRef}
            blurOnSubmit={false}
            onSubmitEditing={() => inputTechsRef.current?.focus()}
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <View style={styles.inputContainer}>
          <Input
            leftIcon={<FontAwesome name="code" size={24} color="#F95F62" />}
            leftIconContainerStyle={{ marginLeft: 0, marginRight: 5 }}
            label="Tecnologias"
            placeholder="Javascript, ReactJS, NodeJS..."
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            returnKeyType="send"
            ref={inputTechsRef}
            value={techs}
            onChangeText={setTechs}
          />
        </View>

        <View style={styles.ButtonContainer}>
          <TouchableOpacity style={styles.buttonCancel}>
            <Text style={styles.buttonTextCancel}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.buttonTextRegister}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
