import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Earth(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 15 15'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M12.42 7.5a4.67 4.67 0 10-4.67 4.67h.049a4.626 4.626 0 004.62-4.621V7.5zm-.779 0c0 .346-.047.691-.14 1.025a.194.194 0 01-.264.127 1.356 1.356 0 01-.59-.494l-.864-1.295a.973.973 0 00-.81-.433h-.168a1.07 1.07 0 110-2.14h1.079c.04 0 .08.012.112.036A3.888 3.888 0 0111.641 7.5zM4.12 6.627a.195.195 0 00-.19.155 3.8 3.8 0 00-.07.718 3.891 3.891 0 002.354 3.57.194.194 0 00.272-.177v-.322c0-.239.087-.469.246-.647l.529-.595a1.362 1.362 0 00-.055-1.868l-.435-.436a1.353 1.353 0 00-.963-.398H4.119z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default Earth;
