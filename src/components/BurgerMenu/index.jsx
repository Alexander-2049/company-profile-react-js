import getCopyrightText from '../../utils/getCopyrightText';
import styles from './styles.module.scss'
import PropTypes from 'prop-types';

const BurgerMenu = (props) => {
    const { children, isOpen, setIsOpen } = props;

    function clickCloseHandler() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <button className={[styles.background, isOpen ? styles.openBackground : ''].join(' ')}
            onClick={clickCloseHandler}></button>
            <div className={[styles.content, isOpen ? styles.openContent : ''].join(' ')}>
                {children}
                <div className={styles.copyright}>{getCopyrightText()}</div>
            </div>
        </>
    );
};

BurgerMenu.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired
};

export default BurgerMenu;