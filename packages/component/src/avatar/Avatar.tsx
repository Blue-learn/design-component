import React from 'react';
import {
	AvatarProps,
	AvatarTypeTokens,
	StackAlignItems,
	StackJustifyContent,
	StackType,
} from '@blue-learn/schema';
import _map from 'lodash-es/map';
import Stack from '../stack/Stack';
import AvatarBase from './Avatar.Base';

const Avatar: React.FC<AvatarProps> = ({
	uri,
	uris,
	type = AvatarTypeTokens.SINGLE,
	...props
}) => {
	if (!uri && type === AvatarTypeTokens.SINGLE)
		return <></>;
	if (!uris && type === AvatarTypeTokens.MULTIPLE)
		return <></>;

	return (
		<Stack
			type={StackType.row}
			alignItems={StackAlignItems.center}
			justifyContent={StackJustifyContent.flexStart}
		>
			{type === AvatarTypeTokens.SINGLE && uri ? (
				<AvatarBase uri={uri} {...props} />
			) : (
				uris &&
				type === AvatarTypeTokens.MULTIPLE &&
				_map(
					uris.slice(0, 3),
					(item: string, index: number) => [
						<AvatarBase
							key={index}
							uri={item}
							overlap={index ? true : false}
							{...props}
						/>,
					],
				)
			)}
		</Stack>
	);
};

export default React.memo(Avatar);
export { Avatar };
