import "../styles/mainPageStyle.css";
import { GOOGLE, KAKAO, GUEST } from "../constants/VARIABLE";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_POST_SOCIALLOGIN, URL_POST_TEST } from "../constants/UrlConstants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showMain, hideMain } from "../stores/MainReducer";
import authReducer, { signupSuccess } from "../stores/AuthReducer";
import { createStore } from "redux";

function Main() {
  const [isShowMain, setShowMain] = useState(true);
  const navigate = useNavigate();
  const store = createStore(authReducer);

  const dispatch = useDispatch();

  const onButtonClick = (category) => {
    switch (category) {
      case GOOGLE:
        handleGoogleLogin();
        break;
      case KAKAO:
        break;
      case GUEST:
        handleGuestLogin();
        break;
    }
    //setShowMain(false);
    dispatch(showMain());
    navigate("/game");
  };
  const handleGoogleLogin = () => {
    const url = URL_POST_TEST;
    const googleurl = URL_POST_SOCIALLOGIN + "/" + GOOGLE;

    console.log(URL_POST_TEST);
    window.location.href = googleurl;
  };
  const handleGuestLogin = () => {
    console.log("게스트 로그인 처리합니다");
  };
  useEffect(() => {
    console.log("Main 로드됨...");
    dispatch(hideMain());
  }, []);

  return (
    <div>
      <div id="mainLogo" />
      <div id="omok">O-MOK</div>
      <button
        className="loginBtn"
        id={GOOGLE}
        onClick={() => onButtonClick(GOOGLE)}
      />
      <button
        className="loginBtn"
        id={KAKAO}
        onClick={() => onButtonClick(KAKAO)}
      />
      <button
        className="loginBtn"
        id={GUEST}
        onClick={() => onButtonClick(GUEST)}
      />
    </div>
  );
}

export default Main;
