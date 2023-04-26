import PropTypes from 'prop-types';
import styles from './ErrorMessage.module.css';

const ErrorMessage = (props) => {
  const { err, info, componentName } = props;

  return (
    <div className={styles.errorContainer}>
      <h2
        className={styles.errorContainerMessage}
      >
        !Ocurrió un error al cargar el: {componentName}!
      </h2>

      <label><b>Información:</b> {info}</label>
      <br />
      <label><b>Detalle:</b> {err}</label>
    </div>
  );
};

ErrorMessage.propTypes = {
  err: PropTypes.string,
  info: PropTypes.string,
  componentName: PropTypes.string
};

ErrorMessage.defaultProps = {
  err: '',
  info: '',
  componentName: ''
}

export default ErrorMessage;