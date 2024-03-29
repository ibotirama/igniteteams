import { StatusBar } from "react-native";
import { Loading } from "@components/Loading";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Groups } from "@screens/Groups";
import theme from "@theme/index";

import { ThemeProvider } from 'styled-components';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
      />

      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}

