import {
	SizeTypeTokens,
	BorderRadiusTokens,
	ButtonTypeTokens,
	ColorTokens,
	TagTypeTokens,
	ChipTypeTokens,
} from '@blue-learn/schema';
import { lightMobileTheme } from '../light-mobile';

describe('lightMobileTheme.space (sizeTypeTokensMap)', () => {
	const order = [
		SizeTypeTokens.NONE,
		SizeTypeTokens.XS,
		SizeTypeTokens.SM,
		SizeTypeTokens.MD,
		SizeTypeTokens.ML,
		SizeTypeTokens.LG,
		SizeTypeTokens.XL,
		SizeTypeTokens.XXL,
		SizeTypeTokens.XXXL,
		SizeTypeTokens.XXXXL,
		SizeTypeTokens.XXXXXL,
		SizeTypeTokens.XXXXXXL,
	];

	it('is strictly increasing from NONE to XXXXXXL', () => {
		// Space/padding tokens are used directly as pixel values throughout
		// component/src (e.g. Button.base.tsx paddingVertical). If the scale
		// stops being monotonic, "bigger" tokens would render smaller gaps.
		const values = order.map((t) => lightMobileTheme.space[t]);
		for (let i = 1; i < values.length; i++) {
			expect(values[i]).toBeGreaterThan(values[i - 1]);
		}
	});

	it('NONE resolves to exactly 0', () => {
		expect(lightMobileTheme.space[SizeTypeTokens.NONE]).toBe(0);
	});
});

describe('lightMobileTheme.borderRadius', () => {
	it('covers every BorderRadiusTokens member', () => {
		for (const token of Object.values(BorderRadiusTokens)) {
			expect(
				lightMobileTheme.borderRadius[token],
			).toBeGreaterThanOrEqual(0);
		}
	});

	it('BR4 is the fully-rounded (pill) radius', () => {
		// BR4 is used by Button/Chip as the "pill" corner radius
		// (Button.base.tsx defaults borderRadius to BorderRadiusTokens.BR4).
		expect(
			lightMobileTheme.borderRadius[BorderRadiusTokens.BR4],
		).toBeGreaterThanOrEqual(999);
	});
});

describe('lightMobileTheme.button', () => {
	const buttonMap = lightMobileTheme.button;

	it('has a theme entry for every ButtonTypeTokens variant', () => {
		for (const token of Object.values(ButtonTypeTokens)) {
			expect(buttonMap[token]).toBeDefined();
		}
	});

	it('every referenced bgColor/labelColor resolves to a real ColorTokens value', () => {
		const validColors = new Set(Object.values(ColorTokens));
		for (const [variant, props] of Object.entries(buttonMap)) {
			if (props.bgColor) {
				expect({
					variant,
					color: props.bgColor,
					valid: validColors.has(props.bgColor),
				}).toEqual({
					variant,
					color: props.bgColor,
					valid: true,
				});
			}
			expect(validColors.has(props.labelColor)).toBe(true);
		}
	});

	it('every referenced borderRadius resolves in the borderRadius token map', () => {
		for (const props of Object.values(buttonMap)) {
			expect(
				lightMobileTheme.borderRadius[props.borderRadius],
			).toBeDefined();
		}
	});

	it('Filled variants use the Primary_500 brand color, Outline variants stay transparent', () => {
		expect(buttonMap[ButtonTypeTokens.LargeFilled].bgColor).toBe(
			ColorTokens.Primary_500,
		);
		expect(buttonMap[ButtonTypeTokens.LargeOutline].bgColor).toBe(
			ColorTokens.Transparent,
		);
	});
});

describe('lightMobileTheme.tag / chip', () => {
	it('covers every TagTypeTokens variant', () => {
		for (const token of Object.values(TagTypeTokens)) {
			expect(lightMobileTheme.tag[token]).toBeDefined();
		}
	});

	it('covers every ChipTypeTokens variant', () => {
		for (const token of Object.values(ChipTypeTokens)) {
			expect(lightMobileTheme.chip[token]).toBeDefined();
		}
	});
});
