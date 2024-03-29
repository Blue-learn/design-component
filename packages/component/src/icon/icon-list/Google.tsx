import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Google(props) {
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
				fillRule='evenodd'
				clipRule='evenodd'
				d='M24.02 12.2729C24.02 11.422 23.9436 10.6038 23.8018 9.81836H12.5V14.4602H18.9582C18.68 15.9602 17.8345 17.2311 16.5636 18.082V21.0929H20.4418C22.7109 19.0038 24.02 15.9274 24.02 12.2729Z'
				fill='#4285F4'
			/>
			<Path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M12.499 24.0003C15.739 24.0003 18.4554 22.9257 20.4408 21.093L16.5627 18.0821C15.4881 18.8021 14.1136 19.2275 12.499 19.2275C9.37357 19.2275 6.72812 17.1166 5.78448 14.2803H1.77539V17.3894C3.74994 21.3112 7.80812 24.0003 12.499 24.0003Z'
				fill='#34A853'
			/>
			<Path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M5.78545 14.2804C5.54545 13.5604 5.40909 12.7913 5.40909 12.0004C5.40909 11.2095 5.54545 10.4404 5.78545 9.72042V6.61133H1.77636C0.963636 8.23133 0.5 10.0641 0.5 12.0004C0.5 13.9368 0.963636 15.7695 1.77636 17.3895L5.78545 14.2804Z'
				fill='#FBBC05'
			/>
			<Path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M12.499 4.77273C14.2608 4.77273 15.8427 5.37818 17.0863 6.56727L20.5281 3.12545C18.4499 1.18909 15.7336 0 12.499 0C7.80812 0 3.74994 2.68909 1.77539 6.61091L5.78448 9.72C6.72812 6.88364 9.37357 4.77273 12.499 4.77273Z'
				fill='#EA4335'
			/>
		</Svg>
	);
}

export default Google;
