import React from "react";

export default function BurgerMenu({ setBurgerOpen }) {
	return (
		<aside className='burger'>
			<div className='burger__content'>
				<button
					onClick={() => {
						setBurgerOpen(false);
					}}
					className='burger__close'
				>
					<svg
						width='18'
						height='6'
						viewBox='0 0 18 6'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M18 3L13 0.113249V5.88675L18 3ZM0 3.5H13.5V2.5H0V3.5Z'
							fill='white'
						/>
					</svg>
				</button>
			</div>
		</aside>
	);
}
