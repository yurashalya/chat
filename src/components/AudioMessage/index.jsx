import React, { useState } from 'react';

import styles from './audioMessage.module.scss';

import waveSvg from '../../assets/img/wave.svg';
import playSvg from '../../assets/img/play.svg';
import pauseSvg from '../../assets/img/pause.svg';

const AudioMessage = ({ audio }) => {
	const [isPlaying, setIsPlaying] = useState(true);

	return (
		<div className={styles.wrappMessage}>
			<div className={styles.audioProgress}>
				<div className={styles.audioInfo}>
					<div className={styles.wrappButton}>
						<button className={styles.btn}>
							<img
								src={isPlaying ? pauseSvg : playSvg}
								alt={`${isPlaying ? "Pause Svg" : "play Svg"}`}
							/>
						</button>
					</div>
					<div className={styles.audioContent}>
						<img src={waveSvg} alt="Wawe Svg" />
					</div>
					<div className={styles.wrappDuration}>
						<span>00:19</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AudioMessage;
