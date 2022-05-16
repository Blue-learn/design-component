import React from 'react';
import {
	AvatarGroupProps,
	AvatarProps,
} from '@blue-learn/schema';
import ThemeProvider from '@blue-learn/theme';
import { Avatar } from './Avatar';

const AvatarGroup: React.FC<
	AvatarGroupProps & AvatarProps
> = ({
	size,
	uri,
	borderRadius,
	borderWidth,
	borderColor,
	uris,
	...props
}) => {
	if (!uri || !size) return <></>;

	if (uri || uris.length === 1)
		return (
			<Avatar
				borderRadius={borderRadius}
				borderWidth={borderWidth}
				borderColor={borderColor}
				size={size}
				uri={uri || uris[0]}
			/>
		);

	return (
		<>
			{uris.length > 1 &&
				uris.map((single_uri) => (
					<Avatar
						borderRadius={borderRadius}
						borderWidth={borderWidth}
						borderColor={borderColor}
						size={size}
						uri={single_uri}
					/>
				))}
		</>
	);
};

export default React.memo(AvatarGroup);
export { AvatarGroup };
