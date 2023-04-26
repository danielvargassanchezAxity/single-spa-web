import { ErrorBoundary } from "./components/ErrorBoundary";
import { Navbar } from "./components/Navbar";

export default function Root(props) {
  return (
    <ErrorBoundary componentName={props.name} >
      <Navbar {...props} />
    </ErrorBoundary>
  );
}
