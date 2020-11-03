import React from "react";
import { Message, Dialogs } from "components";

import styles from "./home.module.scss";

const Home = ({ match }) => {
	return (
		<div className={styles.wrappHome}>
			<Dialogs
				userId={0}
				items={[
					{
						text: "Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝",
						createdAt: new Date('Thu Oct 29 2018 21:16:55'),
						user: {
							_id: 1,
							fullname: "Sasha Sidorov",
							avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",
							isOnline: true
						},
						isTyping: false,
						isReaded: false,
						unreaded: 23
					},
					{
						text: "Hello 🔥",
						createdAt: new Date('Tue Nov 03 2020 17:28:55'),
						user: {
							_id: 2,
							fullname: "Kirk Hamment",
							avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
						},
						isTyping: false,
						isReaded: true,
						unreaded: 4
					},
				]}

			/>
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
				<Message
					avatar="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
					date="Thu Oct 29 2020 21:12:24"
					audio="https://notificationsounds.com/storage/sounds/file-sounds-1152-swinging.mp3"
				/>
			</div>
		</div>
	);
};

export default Home;
