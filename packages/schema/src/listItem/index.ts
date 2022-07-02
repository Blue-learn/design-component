import { ReactNode } from 'react';
import { avatarSizeTokens } from '../avatar';
import { WidgetItem } from '../types';

export type ListItemProps = {
	onPress?: Function;
	avatarUri?: string;
	avatarSize?: avatarSizeTokens;
	title?: string;
	subtitle?: string;
	highlighted?: boolean;
	rightCta?: JSX.Element;
};
