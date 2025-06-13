import React from "react";
import "../app/styles/styles.scss";
import AppStoreIcon from "./icons/AppStoreIcon";
import GooglePlayIcon from "./icons/GooglePlayIcon";

const GOOGLE_PLAY_URL = "https://play.google.com/store";
const APP_STORE_URL = "https://www.apple.com/app-store/";

const AppStoreButtons: React.FC = () => (
  <div className="appstore-buttons">
    <a
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="appstore-buttons__btn"
    >
      {/* Google Play PNG */}
      <GooglePlayIcon />
    </a>
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="appstore-buttons__btn"
    >
      {/* App Store SVG */}
      <AppStoreIcon />
    </a>
  </div>
);

export default AppStoreButtons;
