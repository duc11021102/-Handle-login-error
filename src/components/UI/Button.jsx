import styled from './Button.module.css';
const Button = (props) => {
    return (<button onClick={props.onClick} className={styled.button}>{props.children}</button>);
}
export default Button;