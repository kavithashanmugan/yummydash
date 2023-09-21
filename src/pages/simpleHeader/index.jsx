import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import TuneIcon from "@mui/icons-material/Tune";
import SmsIcon from "@mui/icons-material/Sms";

import logo from "../../img/SkipTheDishes_logo.svg";
import flag from "../../img/CanadaFlag.png";
import profile from "../../img/account-default.png";
import LoginButton from "../../components/LoginButton";
import SignUpButton from "../../components/SignUpButton";
import styles from "../simpleHeader/simpleheader.module.scss";

const SimpleHeader = () => {
  const { loginWithRedirect,isAuthenticated, user } = useAuth0();

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={logo} alt="Logo" />

        <div className={styles.roundIcon}>
          <SmsIcon color="action" />
          <img src={flag} alt="Canada" />
        </div>
        <div className={styles.profile}>

        </div>
        <div className={styles.account}>
          <button className={styles.login} onClick={() => loginWithRedirect()}>
            Log In
          </button>
          <button className={styles.signup} onClick={() => loginWithRedirect()}>
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleHeader;
