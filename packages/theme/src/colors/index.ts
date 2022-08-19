import {
	ColorTokens,
	ColorTokensMap,
	GradientColorTokens,
	GradientColorTokensMap,
} from '@blue-learn/schema';

export const colorTokensMap: ColorTokensMap = {
	[ColorTokens.White]: '#FFFFFF',
	[ColorTokens.Grey_50]: '#F2F3F7',
	[ColorTokens.Grey_100]: '#E8E9ED',
	[ColorTokens.Grey_200]: '#C5C8D2',
	[ColorTokens.Grey_300]: '#9395A4',
	[ColorTokens.Grey_400]: '#656A83',
	[ColorTokens.Grey_500]: '#31343C',
	[ColorTokens.Grey_550]: '#2B2B2B',
	[ColorTokens.Grey_600]: '#1E1E1E',
	[ColorTokens.Grey_700]: '#121212',
	[ColorTokens.Black]: '#000000',
	[ColorTokens.Black_20]: '#00000033',
	[ColorTokens.Warning_50]: '#FFE1A6',
	[ColorTokens.Warning_100]: '#FFAE50',
	[ColorTokens.Warning_200]: '#946200',
	[ColorTokens.Positive_10]: '#EDF7F2',
	[ColorTokens.Positive_20]: '#BBE2CE',
	[ColorTokens.Positive_30]: '#89CCA9',
	[ColorTokens.Positive_40]: '#50B47F',
	[ColorTokens.Positive_50]: '#05945B',
	[ColorTokens.Positive_60]: '#07794C',
	[ColorTokens.Positive_70]: '#095F3C',
	[ColorTokens.Positive_80]: '#0B442D',
	[ColorTokens.Positive_90]: '#0D2A1E',
	[ColorTokens.Positive_100]: '#091F0A',
	[ColorTokens.Negative_10]: '#FDF3F2',
	[ColorTokens.Negative_20]: '#F9D9D7',
	[ColorTokens.Negative_30]: '#F2ADA5',
	[ColorTokens.Negative_40]: '#E7685A',
	[ColorTokens.Negative_50]: '#DC2804',
	[ColorTokens.Negative_60]: '#B32306',
	[ColorTokens.Negative_70]: '#8A1E08',
	[ColorTokens.Negative_80]: '#61140B',
	[ColorTokens.Negative_90]: '#36100F',
	[ColorTokens.Negative_100]: '#33080B',
	[ColorTokens.Interaction_10]: '#F5F2FD',
	[ColorTokens.Interaction_20]: '#E2D9FA',
	[ColorTokens.Interaction_30]: '#C5B4F5',
	[ColorTokens.Interaction_40]: '#997BED',
	[ColorTokens.Interaction_50]: '#6E42E5',
	[ColorTokens.Interaction_60]: '#572AC8',
	[ColorTokens.Interaction_70]: '#45239A',
	[ColorTokens.Interaction_80]: '#321C6D',
	[ColorTokens.Interaction_90]: '#21143F',
	[ColorTokens.Interaction_100]: '#17054D',
	[ColorTokens.Highlight_10]: '#EBF8FF',
	[ColorTokens.Highlight_20]: '#B8E5FF',
	[ColorTokens.Highlight_30]: '#80CEFF',
	[ColorTokens.Highlight_40]: '#33B1FF',
	[ColorTokens.Highlight_50]: '#1192E8',
	[ColorTokens.Highlight_60]: '#0071C2',
	[ColorTokens.Highlight_70]: '#005299',
	[ColorTokens.Highlight_80]: '#00396B',
	[ColorTokens.Highlight_90]: '#01294B',
	[ColorTokens.Indigo_10]: '#F2F3FA',
	[ColorTokens.Indigo_20]: '#DCDEFA',
	[ColorTokens.Indigo_30]: '#BDC2FA',
	[ColorTokens.Indigo_40]: '#A0A6FA',
	[ColorTokens.Indigo_50]: '#7A83FF',
	[ColorTokens.Indigo_60]: '#545EEA',
	[ColorTokens.Indigo_70]: '#353EB2',
	[ColorTokens.Indigo_80]: '#282E84',
	[ColorTokens.Indigo_90]: '#1D225C',
	[ColorTokens.Indigo_100]: '#181A35',
	[ColorTokens.Purple_10]: '#F0ECFC',
	[ColorTokens.Purple_20]: '#E2D9FA',
	[ColorTokens.Purple_30]: '#C5B4F5',
	[ColorTokens.Purple_40]: '#997BED',
	[ColorTokens.Purple_50]: '#6E42E5',
	[ColorTokens.Purple_60]: '#572AC8',
	[ColorTokens.Purple_70]: '#45239A',
	[ColorTokens.Purple_80]: '#321C6D',
	[ColorTokens.Purple_90]: '#21143F',
	[ColorTokens.Red_10]: '#FCEEED',
	[ColorTokens.Red_20]: '#F9D9D7',
	[ColorTokens.Red_30]: '#F2ADA5',
	[ColorTokens.Red_40]: '#E7685A',
	[ColorTokens.Red_50]: '#DC2804',
	[ColorTokens.Red_60]: '#B32306',
	[ColorTokens.Red_70]: '#8A1E08',
	[ColorTokens.Red_80]: '#61140B',
	[ColorTokens.Red_90]: '#36100F',
	[ColorTokens.Green_10]: '#E6F4ED',
	[ColorTokens.Green_20]: '#BBE2CE',
	[ColorTokens.Green_30]: '#89CCA9',
	[ColorTokens.Green_40]: '#50B47F',
	[ColorTokens.Green_50]: '#05945B',
	[ColorTokens.Green_60]: '#07794C',
	[ColorTokens.Green_70]: '#095F3C',
	[ColorTokens.Green_80]: '#0B442D',
	[ColorTokens.Green_90]: '#0D2A1E',
	[ColorTokens.Yellow_10]: '#FFF6E3',
	[ColorTokens.Yellow_20]: '#FFEDC8',
	[ColorTokens.Yellow_30]: '#FFE0A3',
	[ColorTokens.Yellow_40]: '#FFD47F',
	[ColorTokens.Yellow_50]: '#FFC247',
	[ColorTokens.Yellow_60]: '#D29822',
	[ColorTokens.Yellow_70]: '#A17217',
	[ColorTokens.Yellow_80]: '#705010',
	[ColorTokens.Yellow_90]: '#3D2C0B',
	[ColorTokens.Orange_50]: '#FFF5F5',
	[ColorTokens.Orange_100]: '#FFE2D8',
	[ColorTokens.Orange_200]: '#FFCEBF',
	[ColorTokens.Orange_300]: '#FEB59E',
	[ColorTokens.Orange_400]: '#FE9D7E',
	[ColorTokens.Orange_500]: '#FE845E',
	[ColorTokens.Orange_600]: '#FE6C3E',
	[ColorTokens.Orange_700]: '#D45A34',
	[ColorTokens.Orange_800]: '#A94829',
	[ColorTokens.Orange_900]: '#7F361F',
	[ColorTokens.Blue_50]: '#F1F3FF',
	[ColorTokens.Blue_100]: '#D8DEFF',
	[ColorTokens.Blue_200]: '#BEC8FF',
	[ColorTokens.Blue_300]: '#9EACFF',
	[ColorTokens.Blue_400]: '#7E91FF',
	[ColorTokens.Blue_500]: '#5D75FF',
	[ColorTokens.Blue_600]: '#3D5AFF',
	[ColorTokens.Blue_700]: '#334BD4',
	[ColorTokens.Blue_800]: '#293CAA',
	[ColorTokens.Blue_900]: '#1E2D80',
	[ColorTokens.Teal_10]: '#E6F9F9',
	[ColorTokens.Teal_20]: '#CDF3F4',
	[ColorTokens.Teal_30]: '#9BE6E9',
	[ColorTokens.Teal_40]: '#4FD3D8',
	[ColorTokens.Teal_50]: '#04C1C8',
	[ColorTokens.Teal_60]: '#0699A3',
	[ColorTokens.Teal_70]: '#08767E',
	[ColorTokens.Teal_80]: '#0B5459',
	[ColorTokens.Teal_90]: '#0D3134',
	[ColorTokens.Teal_100]: '#0A2124',
	[ColorTokens.Aqua_10]: '#E5F6FF',
	[ColorTokens.Aqua_20]: '#BAE6FF',
	[ColorTokens.Aqua_30]: '#82CFFF',
	[ColorTokens.Aqua_40]: '#33B1FF',
	[ColorTokens.Aqua_50]: '#1192E8',
	[ColorTokens.Aqua_60]: '#0072C3',
	[ColorTokens.Aqua_70]: '#00539A',
	[ColorTokens.Aqua_80]: '#003A6D',
	[ColorTokens.Aqua_90]: '#012749',
	[ColorTokens.Aqua_100]: '#061829',
	[ColorTokens.Pink_10]: '#FFF0F7',
	[ColorTokens.Pink_20]: '#FFD6E8',
	[ColorTokens.Pink_30]: '#FFAFD2',
	[ColorTokens.Pink_40]: '#FF7EB6',
	[ColorTokens.Pink_50]: '#EE5396',
	[ColorTokens.Pink_60]: '#D02670',
	[ColorTokens.Pink_70]: '#9F1853',
	[ColorTokens.Pink_80]: '#740937',
	[ColorTokens.Pink_90]: '#510224',
	[ColorTokens.Pink_100]: '#2E0A1A',
	[ColorTokens.Brown_10]: '#F6F0EA',
	[ColorTokens.Brown_20]: '#EBE0DB',
	[ColorTokens.Brown_30]: '#D2BBB0',
	[ColorTokens.Brown_40]: '#B28A76',
	[ColorTokens.Brown_50]: '#97674E',
	[ColorTokens.Brown_60]: '#734E3B',
	[ColorTokens.Brown_70]: '#5B3C2F',
	[ColorTokens.Brown_80]: '#3D271E',
	[ColorTokens.Brown_90]: '#2B1E17',
	[ColorTokens.Transparent]: 'transparent',
	[ColorTokens.Success_50]: '#A6FFE7',
	[ColorTokens.Success_100]: '#00BA88',
	[ColorTokens.Success_200]: '#00966D',
	[ColorTokens.Error_50]: '#F5A3A3',
	[ColorTokens.Error_100]: '#E93C3C',
	[ColorTokens.Error_200]: '#B71515',
	[ColorTokens.Google]: '#4285F4',
};

export const gradientColorTokensMap: GradientColorTokensMap =
	{
		[GradientColorTokens.LG1]: [
			'#5200BB',
			'#390083',
		],
		[GradientColorTokens.LG2]: [
			'#0040BB',
			'#002D85',
		],
		[GradientColorTokens.LG3]: [
			'#007D99',
			'#0A5869',
		],
		[GradientColorTokens.LG4]: [
			'#008561',
			'#006449',
		],
		[GradientColorTokens.LG5]: [
			'#0C890A',
			'#096507',
		],
		[GradientColorTokens.LG6]: [
			'#9A7C0F',
			'#6E590B',
		],
		[GradientColorTokens.LG7]: [
			'#8C4438',
			'#6C2519',
		],
		[GradientColorTokens.LG8]: [
			'#755151',
			'#583636',
		],
		[GradientColorTokens.LG9]: [
			'#A56B13',
			'#734A0D',
		],
		[GradientColorTokens.LG10]: [
			'#BD233D',
			'#841629',
		],
		[GradientColorTokens.LG11]: [
			'#FBDA61',
			'#FF5ACD',
		],
	};
