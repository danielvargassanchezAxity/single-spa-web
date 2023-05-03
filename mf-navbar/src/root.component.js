import { ErrorBoundary } from "./components/ErrorBoundary";
import { Navbar } from "./components/Navbar";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak"

export default function Root(props) {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <ErrorBoundary componentName={props.name} >
        <Navbar {...props} />
      </ErrorBoundary>
    </ReactKeycloakProvider>
  );
}
