import {
	ChatCardProps,
	ChatCardTypeTokens,
} from '@blue-learn/schema';

export const args: ChatCardProps = {
	label:
		'This link https://github.com/flyerhq can be extracted from the text',
	type: ChatCardTypeTokens.receiver,
	timeStamp: '12:00 AM',
};

export const argTypes = {
	type: {
		control: 'radio',
		options: [
			...Object.values(ChatCardTypeTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
};
