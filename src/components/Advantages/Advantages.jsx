import React from "react";
import AdvantageItem from "./AdvantageItem";

export default function Advantages() {
	return (
		<div className='content__advantages'>
			<div className='content__advantages__head'>
				<h2 className='content__heading'>Чат-бот в поликлинике</h2>
				<div className='content__note'>
					<div className='content__note__text'>КЛЮЧ К ОПТИМИЗАЦИИ</div>
					<div className='content__note__img'>
						<svg
							width='52'
							height='52'
							viewBox='0 0 52 52'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<mask id='path-1-inside-1_1_2175' fill='white'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M52 16.3616C52 25.3992 44.6422 32.7259 35.5684 32.7259C33.9148 32.7259 30.1449 32.3463 28.3119 30.8227L26.0188 33.1055C24.6694 34.4497 25.0334 34.8449 25.634 35.4949C25.8836 35.7679 26.1748 36.0825 26.401 36.5323C26.401 36.5323 28.3119 39.1946 26.401 41.8596C25.2544 43.3806 22.0435 45.51 18.3775 41.8596L17.6132 42.6188C17.6132 42.6188 19.9037 45.2838 17.9954 47.9487C16.8488 49.4697 13.7913 50.9907 11.1159 48.3283L8.44317 50.9907C6.60761 52.8185 4.36646 51.7525 3.47728 50.9907L1.18153 48.7079C-0.95822 46.576 0.289752 44.2672 1.18153 43.378L21.0503 23.5922C21.0503 23.5922 19.1393 20.5502 19.1393 16.3642C19.1393 7.32673 26.4972 0 35.571 0C44.6448 0 52 7.32673 52 16.3616ZM35.571 22.0712C37.0875 22.074 38.5431 21.4743 39.6177 20.4041C40.6922 19.334 41.2978 17.8808 41.3012 16.3642C41.2999 15.6131 41.1506 14.8696 40.8619 14.1761C40.5731 13.4827 40.1507 12.8529 39.6186 12.3227C39.0865 11.7925 38.4551 11.3723 37.7607 11.0861C37.0662 10.7999 36.3221 10.6533 35.571 10.6547C34.8198 10.6533 34.0758 10.7999 33.3813 11.0861C32.6868 11.3723 32.0555 11.7925 31.5234 12.3227C30.9912 12.8529 30.5688 13.4827 30.2801 14.1761C29.9914 14.8696 29.8421 15.6131 29.8407 16.3642C29.8441 17.8808 30.4497 19.334 31.5243 20.4041C32.5988 21.4743 34.0544 22.074 35.571 22.0712Z'
								/>
							</mask>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M52 16.3616C52 25.3992 44.6422 32.7259 35.5684 32.7259C33.9148 32.7259 30.1449 32.3463 28.3119 30.8227L26.0188 33.1055C24.6694 34.4497 25.0334 34.8449 25.634 35.4949C25.8836 35.7679 26.1748 36.0825 26.401 36.5323C26.401 36.5323 28.3119 39.1946 26.401 41.8596C25.2544 43.3806 22.0435 45.51 18.3775 41.8596L17.6132 42.6188C17.6132 42.6188 19.9037 45.2838 17.9954 47.9487C16.8488 49.4697 13.7913 50.9907 11.1159 48.3283L8.44317 50.9907C6.60761 52.8185 4.36646 51.7525 3.47728 50.9907L1.18153 48.7079C-0.95822 46.576 0.289752 44.2672 1.18153 43.378L21.0503 23.5922C21.0503 23.5922 19.1393 20.5502 19.1393 16.3642C19.1393 7.32673 26.4972 0 35.571 0C44.6448 0 52 7.32673 52 16.3616ZM35.571 22.0712C37.0875 22.074 38.5431 21.4743 39.6177 20.4041C40.6922 19.334 41.2978 17.8808 41.3012 16.3642C41.2999 15.6131 41.1506 14.8696 40.8619 14.1761C40.5731 13.4827 40.1507 12.8529 39.6186 12.3227C39.0865 11.7925 38.4551 11.3723 37.7607 11.0861C37.0662 10.7999 36.3221 10.6533 35.571 10.6547C34.8198 10.6533 34.0758 10.7999 33.3813 11.0861C32.6868 11.3723 32.0555 11.7925 31.5234 12.3227C30.9912 12.8529 30.5688 13.4827 30.2801 14.1761C29.9914 14.8696 29.8421 15.6131 29.8407 16.3642C29.8441 17.8808 30.4497 19.334 31.5243 20.4041C32.5988 21.4743 34.0544 22.074 35.571 22.0712Z'
								stroke='black'
								strokeWidth='5'
								mask='url(#path-1-inside-1_1_2175)'
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className='advantages'>
				<AdvantageItem />
				<AdvantageItem />
				<AdvantageItem />
			</div>
			<button className='functional__btn'>
				СМОТРЕТЬ ДАЛЕЕ
				<svg
					role='img'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					aria-labelledby='arrowRightIconTitle'
					stroke='#efefef'
					strokeWidth='2'
					strokeLinecap='square'
					strokeLinejoin='miter'
					fill='none'
					color='#efefef'
				>
					{" "}
					<path d='M15 18l6-6-6-6' /> <path d='M3 12h17' />{" "}
					<path strokeLinecap='round' d='M21 12h-1' />{" "}
				</svg>
			</button>
		</div>
	);
}
