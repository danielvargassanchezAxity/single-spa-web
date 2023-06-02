import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from '../ErrorMessage';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorMessage
          info='Esto es un mensaje cuando ocurre un error al cargar un componente'
          err={`Error al cargar el microfrontend ${this.props.componentName} debido a un problema interno`}
          componentName={this.props.componentName}
        />
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  componentName: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;