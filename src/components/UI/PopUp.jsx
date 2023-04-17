import styled from './Popup.module.css';
import Button from './Button';
const PopUp = (props) => {
    return(<div className={styled.backdrop}>
        <div className={styled.popup}>
            <header className={styled.header}>
                <h2>Wellcome Back</h2>
            </header>
            <div className={styled.content}>
                <p>{props.email}</p>
            </div>
            <footer>
                <Button onClick={props.onClosed}>OK</Button>
            </footer>
        </div>
    </div>);

}
export default PopUp;