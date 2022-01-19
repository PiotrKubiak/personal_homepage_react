import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { themeLight, themeDark } from "./theme";
import { Normalize } from "styled-normalize";
import { selectIsDarkTheme } from "./common/themeSlice";
import { PersonalHomepage } from "./features/PersonalHomepage";

export const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
