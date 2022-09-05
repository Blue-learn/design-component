import { PaddingProps } from '../padding';

export type UserCardProps = {
	padding?: PaddingProps;
	avatar: string;
	title: string;
	title_secondary?: string;
	subtitle?: string;
	location?: string;
	onPress?: Function;
};
