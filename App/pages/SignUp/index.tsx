import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { Input } from "react-native-elements";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import normalize from "react-native-normalize";
import { Formik } from "formik";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { dinamicPadding } from "../../utils/dinamicPaddingInput";
import styles from "./styles";

interface FormValues {
  name: string;
  email: string;
  password: string;
  phone: string;
  techs: string;
}

const SignUpValidationSchema = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório!"),
  email: Yup.string().email("Email inválido!").required("Campo obrigatório!"),
  password: Yup.string()
    .min(6, "Mínimo seis caracteres!")
    .required("Campo obrigatório!"),
  phone: Yup.string().required("Campo obrigatório!"),
  techs: Yup.string().required("Campo obrigatório!"),
});

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const inputNameRef = useRef<Input>(null);
  const inputEmailRef = useRef<Input>(null);
  const inputPasswordRef = useRef<Input>(null);
  const inputPhoneRef = useRef<Input>(null);
  const inputTechsRef = useRef<Input>(null);
  const initialValues: FormValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
    techs: "",
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Coworking</Text>

          <Formik
            initialValues={initialValues}
            validationSchema={SignUpValidationSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.form}>
                <Input
                  leftIcon={
                    <FontAwesome name="user" size={24} color="#F95F62" />
                  }
                  leftIconContainerStyle={{
                    marginLeft: normalize(2),
                    marginRight: normalize(16),
                  }}
                  label="Nome"
                  placeholder="Fulano da Silva"
                  placeholderTextColor="#999"
                  autoCapitalize="words"
                  autoCorrect={false}
                  returnKeyType="next"
                  blurOnSubmit={false}
                  errorStyle={{ color: "#FB0404", fontSize: normalize(14) }}
                  errorMessage={errors.name}
                  ref={inputNameRef}
                  onSubmitEditing={() => inputEmailRef.current?.focus()}
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  containerStyle={{
                    paddingBottom: dinamicPadding(errors.name, touched.name),
                  }}
                />
                {touched.name && errors.name && inputNameRef.current?.shake()}

                <Input
                  leftIcon={
                    <MaterialIcons name="email" size={24} color="#F95F62" />
                  }
                  leftIconContainerStyle={{
                    marginLeft: normalize(0),
                    marginRight: normalize(10),
                  }}
                  label="Email"
                  placeholder="fulano@gmail.com"
                  placeholderTextColor="#999"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                  ref={inputEmailRef}
                  blurOnSubmit={false}
                  errorStyle={{ color: "#FB0404", fontSize: normalize(14) }}
                  errorMessage={errors.email}
                  onSubmitEditing={() => inputPasswordRef.current?.focus()}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  containerStyle={{
                    paddingBottom: dinamicPadding(errors.email, touched.email),
                  }}
                />
                {touched.email &&
                  errors.email &&
                  inputEmailRef.current?.shake()}

                <Input
                  leftIcon={
                    <MaterialIcons name="lock" size={24} color="#F95F62" />
                  }
                  leftIconContainerStyle={{
                    marginLeft: normalize(0),
                    marginRight: normalize(10),
                  }}
                  label="Senha"
                  placeholder="******"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                  ref={inputPasswordRef}
                  blurOnSubmit={false}
                  errorStyle={{ color: "#FB0404", fontSize: normalize(14) }}
                  errorMessage={errors.password}
                  onSubmitEditing={() => inputPhoneRef.current?.focus()}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  containerStyle={{
                    paddingBottom: dinamicPadding(
                      errors.password,
                      touched.password
                    ),
                  }}
                />
                {touched.password &&
                  errors.password &&
                  inputPasswordRef.current?.shake()}

                <Input
                  leftIcon={
                    <MaterialIcons
                      name="phone-iphone"
                      size={24}
                      color="#F95F62"
                    />
                  }
                  leftIconContainerStyle={{
                    marginLeft: normalize(0),
                    marginRight: normalize(10),
                  }}
                  label="Telefone"
                  placeholder="(99) 9 9999-9999"
                  placeholderTextColor="#999"
                  keyboardType="phone-pad"
                  returnKeyType="next"
                  ref={inputPhoneRef}
                  blurOnSubmit={false}
                  onSubmitEditing={() => inputTechsRef.current?.focus()}
                  errorStyle={{ color: "#FB0404", fontSize: normalize(14) }}
                  errorMessage={errors.phone}
                  value={values.phone}
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  containerStyle={{
                    paddingBottom: dinamicPadding(errors.phone, touched.phone),
                  }}
                />
                {touched.phone &&
                  errors.phone &&
                  inputPhoneRef.current?.shake()}

                <View style={styles.inputContainer}>
                  <Input
                    leftIcon={
                      <FontAwesome name="code" size={24} color="#F95F62" />
                    }
                    leftIconContainerStyle={{
                      marginLeft: normalize(0),
                      marginRight: normalize(10),
                    }}
                    label="Tecnologias"
                    placeholder="Javascript, ReactJS, NodeJS..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    returnKeyType="send"
                    ref={inputTechsRef}
                    errorStyle={{ color: "#FB0404", fontSize: normalize(14) }}
                    errorMessage={errors.techs}
                    onSubmitEditing={() => handleSubmit()}
                    value={values.techs}
                    onChangeText={handleChange("techs")}
                    onBlur={handleBlur("techs")}
                    containerStyle={{
                      paddingBottom: dinamicPadding(
                        errors.techs,
                        touched.techs
                      ),
                    }}
                  />
                  {touched.techs &&
                    errors.techs &&
                    inputTechsRef.current?.shake()}
                </View>

                <View style={styles.ButtonContainer}>
                  <TouchableOpacity style={styles.buttonCancel}>
                    <Text style={styles.buttonTextCancel}>Cancelar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => handleSubmit()}
                  >
                    <Text style={styles.buttonTextRegister}>Cadastrar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
