import styled from './PopupWrong.module.css';
import Button from './Button';
const PopupWrong = (props) => {
    return(<div className={styled.backdrop}>
        <div className={styled.popup}>
            <header className={styled.header}>
                <h2>Wrong username, password !!!</h2>
            </header>
            <footer>
                <Button onClick={props.onClosed}>OK</Button>
            </footer>
        </div>
    </div>);

}
export default PopupWrong;