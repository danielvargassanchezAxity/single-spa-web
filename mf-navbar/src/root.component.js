import { ErrorBoundary } from "./components/ErrorBoundary";
import { Navbar } from "./components/Navbar";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/appTheme";
import keycloak from "./keycloak";

export default function Root(props) {
  const options = {
    onLoad: 'login-required',
    checkLoginIframe: false,
  };

  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={options}
      LoadingComponent={<></>}
    >
      <ErrorBoundary componentName={props.name} >
        <ThemeProvider theme={theme}>
          <Navbar {...props} />
        </ThemeProvider>
      </ErrorBoundary>
    </ReactKeycloakProvider>
  );
}
