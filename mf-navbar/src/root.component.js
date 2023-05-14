import { ErrorBoundary } from "./components/ErrorBoundary";
import { Navbar } from "./components/Navbar";
import { ReactKeycloakProvider } from "@react-keycloak/web";
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
        <Navbar {...props} />
      </ErrorBoundary>
    </ReactKeycloakProvider>
  );
}
