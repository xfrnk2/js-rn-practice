//* environment.js
import Constants from "expo-constants";

const ENV = {
  //   dev: {
  //     apiUrl: localhost,
  //   },
  //   staging: {
  //     apiUrl: "[your.staging.api.here]",
  //   },
  prod: {
    //apiUrl: "[your.production.api.here]",
    // Add other keys you want here
    googleMapsApiKeyAndroid: "1",
    googleMapsApiKeyIos: "1",
  },
};

const getEnvVars = () => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  //   if (__DEV__) {
  //     return ENV.dev;
  //   } else if (env === "staging") {
  //     return ENV.staging;
  //   } else if (env === "prod") {
  return ENV.prod;
  //}

  //아래와 같이 사용한다.
  //import getEnvVars from '../environment';
  //const { apiUrl } = getEnvVars();
};
//https://velog.io/@thms200/ExpoReact-Native-%ED%99%98%EA%B2%BD-%EB%B3%80%EC%88%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0
export default getEnvVars;
