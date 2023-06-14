import { ThemeProvider } from "styled-components";
import StyledComponents from "./pages/StyledComponents";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledComponents />
      {/* <Tailwind /> */}
      {/* <Stitches /> */}
    </ThemeProvider>
  );
}
