import { ReactNode } from 'react';

export type TabsProps = {
	options: { label: string; disabled: boolean }[];
	components: ReactNode[];
};
