import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Smile(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M21.242 13.708L13.708 21.242C13.5939 21.3561 13.4705 21.4605 13.339 21.554C12.9497 21.8378 12.4818 21.9937 12 22C12 21.448 12 20.951 12.003 20.5C12.015 18.666 12.078 17.589 12.393 16.688C12.7403 15.6955 13.3068 14.7939 14.0504 14.0504C14.7939 13.3068 15.6955 12.7403 16.688 12.393C17.588 12.078 18.666 12.015 20.5 12.003C20.951 12 21.448 12 22 12C22 12.486 21.831 12.946 21.554 13.34C21.461 13.4716 21.3566 13.5947 21.242 13.708Z'
				fill={props.color}
			/>
			<Path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M12 2C6.477 2 2 6.477 2 12C2 16.706 5.25 20.652 9.629 21.717C10.083 21.827 10.5 21.467 10.5 21C10.5 19.298 10.499 18.68 10.652 17.59C9.89319 17.4047 9.17939 17.0687 8.553 16.602C8.47145 16.5443 8.40227 16.4708 8.3495 16.386C8.29674 16.3011 8.26146 16.2066 8.24574 16.1079C8.23002 16.0092 8.23417 15.9084 8.25796 15.8114C8.28174 15.7143 8.32468 15.623 8.38424 15.5428C8.44381 15.4626 8.51881 15.3951 8.60483 15.3442C8.69084 15.2934 8.78615 15.2603 8.88516 15.2468C8.98416 15.2333 9.08486 15.2397 9.18134 15.2657C9.27782 15.2916 9.36814 15.3366 9.447 15.398C9.91 15.741 10.435 15.993 10.999 16.13C11.6436 14.333 12.8743 12.8053 14.493 11.793C14.198 11.533 14 11.051 14 10.5C14 9.672 14.448 9 15 9C15.552 9 16 9.672 16 10.5C16 10.704 15.973 10.899 15.924 11.076C16.012 11.042 16.102 11.009 16.193 10.977C17.56 10.499 18.51 10.499 21 10.5C21.468 10.5 21.828 10.083 21.717 9.629C20.652 5.25 16.706 2 12 2ZM9 12C9.552 12 10 11.328 10 10.5C10 9.672 9.552 9 9 9C8.448 9 8 9.672 8 10.5C8 11.328 8.448 12 9 12Z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default Smile;