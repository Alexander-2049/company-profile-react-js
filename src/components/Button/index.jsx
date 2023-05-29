import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const Button = (props) => {
    const { href, children } = props;
    const cn = props?.className ? props.className : '';

    if(!href) {
        return <button {...props} className={[cn, styles.button].join(' ')}>{children}</button>
    } else {
        return <a {...props} className={[cn, styles.button].join(' ')}>{children}</a>
    }
};

Button.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default Button;