import React, {Fragment} from 'react';
import classes from './Header.module.css';
import Img from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={Img} alt="img" />
            </div>
        </Fragment>
    );
};

export default Header;