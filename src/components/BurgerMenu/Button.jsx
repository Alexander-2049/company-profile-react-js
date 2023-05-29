import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const BurgerMenu_Button = ({isOpen, setIsOpen}) => {
    function clickHandler() {
        setIsOpen(!isOpen);
    }

    return (
        <button className={styles.burgerButton} onClick={clickHandler}>
            <div className={styles.burgerButton_line}></div>
            <div className={styles.burgerButton_line}></div>
            <div className={styles.burgerButton_line}></div>
        </button>
    );
};

BurgerMenu_Button.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired
};

export default BurgerMenu_Button;