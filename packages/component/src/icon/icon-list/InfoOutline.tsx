import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';

function InfoOutline(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<G
				clipPath='url(#clip0_4005_18103)'
				fill={props.color}
			>
				<Path d='M12 0C5.368 0 0 5.367 0 12c0 6.632 5.367 12 12 12 6.632 0 12-5.367 12-12 0-6.632-5.367-12-12-12zm0 22.326C6.306 22.326 1.674 17.694 1.674 12 1.674 6.306 6.306 1.674 12 1.674c5.694 0 10.326 4.632 10.326 10.326 0 5.694-4.633 10.326-10.326 10.326z' />
				<Path d='M12 10.003c-.71 0-1.216.3-1.216.742v6.019c0 .379.505.758 1.216.758.68 0 1.232-.38 1.232-.758v-6.019c0-.442-.552-.742-1.232-.742zM12 6.291c-.726 0-1.295.521-1.295 1.121S11.274 8.55 12 8.55c.711 0 1.28-.537 1.28-1.138 0-.6-.569-1.121-1.28-1.121z' />
			</G>
		</Svg>
	);
}

export default InfoOutline;
