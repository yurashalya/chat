import React from "react";
import { Message, DialogItem } from "components";

import styles from "./home.module.scss";

const Home = ({ match }) => {
	return (
		<div className={styles.wrappHome}>
			<div className={styles.wrappDialogs}>
				<DialogItem
					user={{
						fullName: "Саша Пушкин",
						isOnline: true
					}}
					unreaded={3}
					isReaded={true}
				/>
				<DialogItem
					user={{
						fullName: "Саша Пушкин",
						isOnline: false
					}}
					unreaded={76}
					isReaded={false}
				/>
				<DialogItem
					user={{
						fullName: "Саша Пушкин",
						isOnline: true
					}}
					unreaded={120}
					isReaded={true}
				/>
			</div>
			<div className={styles.wrappMessages}>
				<Message
					avatar="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
					text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
					date="Thu Oct 29 2020 15:32:24"
					isReaded={false}
					isMe={false}
					attachments={[
						{
							filename: "image.jpg",
							url: "https://source.unsplash.com/100x100/?random=1&nature,water",
						},
						{
							filename: "image.jpg",
							url: "https://source.unsplash.com/100x100/?random=2&nature,water",
						},
						{
							filename: "image.jpg",
							url: "https://source.unsplash.com/100x100/?random=3&nature,water",
						},
					]}
				/>
				<Message
					avatar="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
					text="Hello 🔥"
					date="Thu Oct 29 2020 15:12:24"
					isMe={true}
					isReaded={true}
				/>
				<Message
					avatar="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
					isTyping={true}
				/>
				<Message
					avatar="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
					attachments={[
						{
							filename: "image.jpg",
							url: "https://source.unsplash.com/100x100/?random=1&nature,water",
						},
					]}
					date="Thu Oct 29 2020 15:12:24"
				/>
			</div>
		</div>
	);
};

export default Home;
