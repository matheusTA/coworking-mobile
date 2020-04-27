import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import normalize from "react-native-normalize";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-easy-toast";
import Lottie from "lottie-react-native";

import { useAuth } from "../../contexts/auth";
import { dinamicPadding } from "../../utils/dinamicPaddingInput";
import styles from "./styles";
import loadingAnimation from "../../lottieAnimation/loading.json";

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
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const toastRef = useRef<Toast>(null);
  const inputEmailRef = useRef<Input>(null);
  const inputPasswordRef = useRef<Input>(null);
  const initialValues: FormValues = { email: "", password: "" };

  async function handleSignIn(formValues: FormValues) {
    try {
      setLoading(true);

      await signIn(formValues.email, formValues.password);
    } catch (error) {
      setLoading(false);
      toastRef.current?.show("Algo deu errado, tente novamente!");
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Coworking</Text>

          <Formik
            initialValues={initialValues}
            validationSchema={SignInValidationSchema}
            onSubmit={(values) => handleSignIn(values)}
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
                  {loading ? (
                    <Lottie
                      source={loadingAnimation}
                      resizeMode="contain"
                      autoSize
                      autoPlay={loading}
                      loop={loading}
                      style={{ width: normalize(50) }}
                    />
                  ) : (
                    <Text style={styles.buttonText}>Entrar</Text>
                  )}
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
      <Toast ref={toastRef} style={{ backgroundColor: "red" }} />
    </SafeAreaView>
  );
};

export default SignIn;
