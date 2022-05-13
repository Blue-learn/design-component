import * as React from 'react';

function EditIcon(props) {
	return (
		<svg
			width={props.size}
			height={props.size}
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M9.75482 3.18925L12.8095 6.24397L3.41629 15.6372H0.361572V12.5825L9.75482 3.18925ZM10.824 2.1201L12.5804 0.36364L15.6352 3.41836L13.8787 5.17482L10.824 2.1201Z'
				fill={props.color}
			/>
		</svg>
	);
}

export default EditIcon;
