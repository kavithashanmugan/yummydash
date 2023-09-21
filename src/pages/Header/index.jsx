import React from 'react';

import TuneIcon from '@mui/icons-material/Tune';
import SmsIcon from '@mui/icons-material/Sms';

import logo from '../../img/SkipTheDishes_logo.svg';
import flag from '../../img/CanadaFlag.png';
import profile from '../../img/account-default.png';

import styles from './Header.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={logo} alt="Logo" />
        <div className={styles.address}>
          <p>Delivery</p>
          <p>Your Address Here</p>
        </div>
        <div className={styles.search}>
          <input placeholder="Search Cuisines, Restaurants, or Items" />
        </div>
        <div className={styles.sort}>
          <TuneIcon color="action"/>
          <p>Sort</p>
        </div>
        <div className={styles.roundIcon}>
          <SmsIcon color="action"/>
          <img src={flag} alt="Canada" />
        </div>
        <div className={styles.profile}>
          <img src={profile} alt="Profile" />
        </div>
        <div className={styles.account}>
          <button className={styles.login}>
            <p>Log In</p>
          </button>
          <button className={styles.signup}>
            <p>Sign Up</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;