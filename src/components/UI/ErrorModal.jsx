import styled from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return <div className={`${styled['error-message']}`}>{props.message}</div>
}
export default ErrorModal;