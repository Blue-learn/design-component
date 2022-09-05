import { PaddingProps } from '../padding';
import { Action, WidgetItem } from '../types';
import { UserCardProps } from '../userCard';

export type FeedCardProps = {
	padding?: PaddingProps;
	margin?: PaddingProps;
	/**
	 * Header
	 */
	user: UserCardProps;
	/**
	 * body
	 */
	title: string;
	imageURL?: string;
	/**
	 * Footer
	 */
	leftWidgets?: WidgetItem[];
	leftActions?: Action[];
	rightWidgets?: WidgetItem[];
	rightActions?: Action[];
	onPress?: Function;
};
