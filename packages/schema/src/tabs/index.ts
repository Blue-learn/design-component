import { ReactNode } from 'react';

export type TabsProps = {
	active?: number;
	onChange?: () => void;
	options: { label: string; disabled?: boolean }[];
	components: ReactNode[];
};

export type TabOption = {
	label: string;
	disabled?: boolean;
	isSelected?: boolean;
};
