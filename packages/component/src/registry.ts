import {
	WIDGET,
	WidgetRegistry,
} from '@blue-learn/schema';
import {
	Button,
	Space,
	Icon,
	Stack,
	Avatar,
	Tabs,
	Divider,
	Typography,
	TextInput,
	Card,
	ChatCard,
	Image,
	ProgressIndicator,
	LinkPreview,
	Lottie,
	Gradient,
	Chip,
	Tag,
	MemberCard,
	IcebreakerCard,
	UserCard,
	NewsCard,
	DiscussionCard,
	FeedCard,
} from './index';

const registry: WidgetRegistry = {
	[WIDGET.TEXT]: Typography,
	[WIDGET.INPUT]: TextInput,
	[WIDGET.BUTTON]: Button,
	[WIDGET.STACK]: Stack,
	[WIDGET.SPACE]: Space,
	[WIDGET.ICON]: Icon,
	[WIDGET.AVATAR]: Avatar,
	[WIDGET.TABS]: Tabs,
	[WIDGET.DIVIDER]: Divider,
	[WIDGET.CARD]: Card,
	[WIDGET.CHATCARD]: ChatCard,
	[WIDGET.IMAGE]: Image,
	[WIDGET.LINKPREVIEW]: LinkPreview,
	[WIDGET.PROGRESSINDICATOR]: ProgressIndicator,
	[WIDGET.LOTTIE]: Lottie,
	[WIDGET.GRADIENT]: Gradient,
	[WIDGET.CHIP]: Chip,
	[WIDGET.TAG]: Tag,
	[WIDGET.MEMBERCARD]: MemberCard,
	[WIDGET.ICEBREAKERCARD]: IcebreakerCard,
	[WIDGET.USERCARD]: UserCard,
	[WIDGET.NEWSCARD]: NewsCard,
	[WIDGET.DISCUSSIONCARD]: DiscussionCard,
	[WIDGET.FEEDCARD]: FeedCard,
};

export { registry as WidgetRegistry };
