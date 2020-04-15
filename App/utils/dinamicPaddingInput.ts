import normalize from "react-native-normalize";

export const dinamicPadding = (
  error: string | undefined,
  touched: boolean | undefined
) => {
  if (error && touched) {
    return normalize(0);
  } else if (touched) {
    return normalize(26.56);
  } else if (error) {
    return normalize(0);
  } else {
    return normalize(26.56);
  }
};
