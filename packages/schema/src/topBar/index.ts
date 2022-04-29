export enum topBarTypeToken {
	mainpage = 'mainpage',
	mainpageWithTwoicon = 'mainpageWithTwoicon',
	mainpageNestedTab = 'mainpageNestedTab',
	subpage = 'subpage',
	subpageWithTwoIcon = 'subpageWithTwoIcon',
	subpageWithCta = 'subpageWithCta',
	subpageWithCtaAndIcon = 'subpageWithCtaAndIcon',
	subpageWithSubTitle = 'subpageWithTitle',
	subpageWithSubTitleNestedTab = 'subpageWithTitleNestedTab',
	subpageWithSubTitleAndAvatar = 'subpageWithSubTitleAndAvatar',
	subpageWithSubTitleAndAvatarAndOneIcon = 'subpageWithSubTitleAndAvatarAndOneIcon',
}

export type TopBarProps = {
	topBarType?: topBarTypeToken;
};

export type TopBarBaseProps = {
	nestedTab?: boolean;
	leftIcon?: boolean;
	rightIcon1?: boolean;
	rightIcon2?: boolean;
	cta?: boolean;
	Avatar?: boolean;
	subTitle?: boolean;
	label?: string;
	subTitleLabel?: string;
	ctaLabel?: string;
};

export type topBarThemeProps = {
	nestedTab?: boolean;
	leftIcon?: boolean;
	rightIcon1?: boolean;
	rightIcon2?: boolean;
	cta?: boolean;
	Avatar?: boolean;
	subTitle?: boolean;
};

/**
 * Internal Props for Theme
 * */
export type TopBarTypeTokensMap = {
	[key in topBarTypeToken]: topBarThemeProps;
};
