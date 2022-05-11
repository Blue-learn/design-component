import {
	ButtonTypeTokens,
	TabsProps,
} from '@blue-learn/schema';
import { memo } from 'react';
import Button from '../button/Button';

const Tabs: React.FunctionComponent<
	TabsProps
> = () => {
	return (
		<Button type={ButtonTypeTokens.MediumGhost} />
	);
};

export default memo(Tabs);
export { Tabs };
