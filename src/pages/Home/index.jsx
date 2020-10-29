import React from "react";
import { Message } from "components";

import styles from "./home.module.scss";

const Home = ({ match }) => {
  return (
    <div className={styles.wrappHome}>
      <Message
        avatar="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝
        "
        date="Thu Oct 29 2020 15:32:24"
        isReaded={false}
        isMe={false}
      />
      <Message
        avatar="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
        text="Hello 🔥"
        date="Thu Oct 29 2020 15:12:24"
        isMe={true}
        isReaded={false}
      />
    </div>
  );
};

export default Home;
