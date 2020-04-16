import React, { useRef } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import normalize from "react-native-normalize";
import { Formik } from "formik";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { dinamicPadding } from "../../utils/dinamicPaddingInput";
import styles from "./styles";

interface FormValues {
  email: string;
  password: string;
}

const SignInValidationSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido!").required("Campo obrigatório!"),
  password: Yup.string()
    .min(6, "Mínimo seis caracteres!")
    .required("Campo obrigatório!"),
});

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const inputEmailRef = useRef<Input>(null);
  const inputPasswordRef = useRef<Input>(null);
  const initialValues: FormValues = { email: "", password: "" };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Coworking</Text>

          <Formik
            initialValues={initialValues}
            validationSchema={SignInValidationSchema}
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
                    <MaterialIcons name="email" size={24} color="#F95F62" />
                  }
                  leftIconContainerStyle={{
                    marginLeft: normalize(0),
                    marginRight: normalize(10),
                  }}
                  label="Email"
                  placeholder="coworking@gmail.com"
                  placeholderTextColor="#999"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                  blurOnSubmit={false}
                  errorStyle={{ color: "#FB0404", fontSize: normalize(14) }}
                  errorMessage={errors.email}
                  ref={inputEmailRef}
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
                  returnKeyType="send"
                  errorStyle={{ color: "#FB0404", fontSize: normalize(14) }}
                  errorMessage={errors.password}
                  ref={inputPasswordRef}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  onSubmitEditing={() => handleSubmit()}
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

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleSubmit()}
                >
                  <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <Text
                  style={styles.register}
                  onPress={() => navigation.navigate("SignUp")}
                >
                  Cadastrar-se
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
