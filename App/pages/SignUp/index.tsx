import React, { useRef, useState } from "react";
import {
  Platform,
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

const SignUp: React.FC = () => {
  const inputEmailRef = useRef<TextInput>(null);
  const inputPasswordRef = useRef<TextInput>(null);
  const inputPhoneRef = useRef<TextInput>(null);
  const inputTechsRef = useRef<TextInput>(null);
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
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
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

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
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

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
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

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
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

        <Text style={styles.label}>Tecnologias</Text>
        <TextInput
          style={styles.input}
          placeholder="Javascript, ReactJS, NodeJS..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          returnKeyType="send"
          ref={inputTechsRef}
          value={techs}
          onChangeText={setTechs}
        />

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
