import React from 'react';
import styles from './styles.module.scss';

const Button = (props) => {
    const { href, children } = props;
    const cn = props?.className ? props.className : '';

    if(!href) {
        return <button {...props} className={[cn, styles.button].join(' ')}>{children}</button>
    } else {
        return <a {...props} className={[cn, styles.button].join(' ')}>{children}</a>
    }
};

export default Button;