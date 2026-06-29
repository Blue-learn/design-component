import {
	BorderRadiusTokens,
	ButtonTypeTokens,
	ColorTokens,
	FontSizeTokens,
	ShadowTypeTokens,
	SizeTypeTokens,
} from '@blue-learn/schema';
import { buttonTypeTokensMap } from '../light-mobile/button';
import { sizeTypeTokensMap } from '../light-mobile/space';
import { fontSizeTokensMap } from '../light-mobile/typography';
import { shadowTypeTokensMap } from '../light-mobile/shadow';
import { borderRadiusTypeTokensMap } from '../light-mobile/borderRadius';

const SIZE_GROUPS = [
	{
		size: 'Large',
		filled: ButtonTypeTokens.LargeFilled,
		soft: ButtonTypeTokens.LargeSoftFilled,
		outline: ButtonTypeTokens.LargeOutline,
		ghost: ButtonTypeTokens.LargeGhost,
		elevated: ButtonTypeTokens.LargeElevated,
		disabled: ButtonTypeTokens.LargeDisabled,
		fontSize: FontSizeTokens.MD,
	},
	{
		size: 'Medium',
		filled: ButtonTypeTokens.MediumFilled,
		soft: ButtonTypeTokens.MediumSoftFilled,
		outline: ButtonTypeTokens.MediumOutline,
		ghost: ButtonTypeTokens.MediumGhost,
		elevated: ButtonTypeTokens.MediumElevated,
		disabled: ButtonTypeTokens.MediumDisabled,
		fontSize: FontSizeTokens.SM,
	},
	{
		size: 'Small',
		filled: ButtonTypeTokens.SmallFilled,
		soft: ButtonTypeTokens.SmallSoftFilled,
		outline: ButtonTypeTokens.SmallOutline,
		ghost: ButtonTypeTokens.SmallGhost,
		elevated: ButtonTypeTokens.SmallElevated,
		disabled: ButtonTypeTokens.SmallDisabled,
		fontSize: FontSizeTokens.XS,
	},
] as const;

describe('light-mobile buttonTypeTokensMap', () => {
	it('has an entry for every ButtonTypeTokens variant', () => {
		// Button.tsx spreads `theme.button[type]` into Button.base *before*
		// the caller's props. A missing variant spreads `undefined`, so the
		// button loses its fill, radius and padding and renders as bare text.
		for (const token of Object.values(
			ButtonTypeTokens,
		)) {
			expect(buttonTypeTokensMap[token]).toBeDefined();
		}
	});

	it('every variant declares the required ButtonThemeProps fields', () => {
		// borderRadius/labelColor/bgColor/paddingVertical/paddingHorizontal
		// are non-optional in ButtonThemeProps, but the map is plain data -
		// nothing checks it at runtime.
		for (const [token, v] of Object.entries(
			buttonTypeTokensMap,
		)) {
			expect({
				token,
				borderRadius: typeof v.borderRadius,
				labelColor: typeof v.labelColor,
				bgColor: typeof v.bgColor,
				paddingVertical: typeof v.paddingVertical,
				paddingHorizontal: typeof v.paddingHorizontal,
			}).toEqual({
				token,
				borderRadius: 'string',
				labelColor: 'string',
				bgColor: 'string',
				paddingVertical: 'string',
				paddingHorizontal: 'string',
			});
		}
	});

	it('every referenced token resolves in its own theme map', () => {
		// Everything stored here is a token *name*. A typo is a valid string,
		// typechecks fine, and then resolves to `undefined` at render time -
		// which is how a button ends up with no background at all.
		const colors = new Set(Object.values(ColorTokens));
		for (const [token, v] of Object.entries(
			buttonTypeTokensMap,
		)) {
			expect({
				token,
				label: colors.has(v.labelColor),
				bg: colors.has(v.bgColor),
				border:
					v.borderColor === undefined ||
					colors.has(v.borderColor),
				radius:
					borderRadiusTypeTokensMap[v.borderRadius] !==
					undefined,
				padV:
					sizeTypeTokensMap[v.paddingVertical] !==
					undefined,
				padH:
					sizeTypeTokensMap[v.paddingHorizontal] !==
					undefined,
				size:
					v.fontSize === undefined ||
					fontSizeTokensMap[v.fontSize] !== undefined,
				shadow:
					v.shadow === undefined ||
					shadowTypeTokensMap[v.shadow] !== undefined,
			}).toEqual({
				token,
				label: true,
				bg: true,
				border: true,
				radius: true,
				padV: true,
				padH: true,
				size: true,
				shadow: true,
			});
		}
	});

	it.each(SIZE_GROUPS)(
		'$size variants all share the same font size',
		({
			filled,
			soft,
			outline,
			ghost,
			elevated,
			disabled,
			fontSize,
		}) => {
			// "Large"/"Medium"/"Small" is a size promise that has to hold
			// across every style. If LargeGhost rendered at a different size
			// from LargeFilled, a row mixing the two would have mismatched
			// label heights.
			for (const token of [
				filled,
				soft,
				outline,
				ghost,
				elevated,
				disabled,
			]) {
				expect({
					token,
					fontSize: buttonTypeTokensMap[token].fontSize,
				}).toEqual({ token, fontSize });
			}
		},
	);

	it.each(SIZE_GROUPS)(
		'$size variants all share the same vertical/horizontal padding',
		({
			filled,
			soft,
			outline,
			elevated,
			disabled,
		}) => {
			// Same reasoning as font size: swapping a button's style token
			// must not change its footprint, or the surrounding layout moves.
			// (Ghost is deliberately excluded - it has no fill, so it uses
			// tighter padding to sit flush with adjacent text.)
			const reference = buttonTypeTokensMap[filled];
			for (const token of [
				soft,
				outline,
				elevated,
				disabled,
			]) {
				expect({
					token,
					padV:
						buttonTypeTokensMap[token].paddingVertical,
					padH:
						buttonTypeTokensMap[token]
							.paddingHorizontal,
				}).toEqual({
					token,
					padV: reference.paddingVertical,
					padH: reference.paddingHorizontal,
				});
			}
		},
	);

	it('Large > Medium > Small in both font size and horizontal padding', () => {
		// The three sizes must actually be ordered, otherwise the token names
		// stop meaning anything to a consumer choosing between them.
		const [large, medium, small] = SIZE_GROUPS.map(
			(g) => buttonTypeTokensMap[g.filled],
		);
		expect(
			fontSizeTokensMap[large.fontSize!],
		).toBeGreaterThan(
			fontSizeTokensMap[medium.fontSize!],
		);
		expect(
			fontSizeTokensMap[medium.fontSize!],
		).toBeGreaterThan(
			fontSizeTokensMap[small.fontSize!],
		);
		expect(
			sizeTypeTokensMap[large.paddingHorizontal],
		).toBeGreaterThan(
			sizeTypeTokensMap[medium.paddingHorizontal],
		);
		expect(
			sizeTypeTokensMap[medium.paddingHorizontal],
		).toBeGreaterThan(
			sizeTypeTokensMap[small.paddingHorizontal],
		);
	});

	it('Outline and Ghost variants are transparent; Outline alone carries a border colour', () => {
		// This is the entire visual distinction between the two styles. If
		// Ghost picked up a borderColor it would become an Outline button
		// everywhere it is used.
		for (const g of SIZE_GROUPS) {
			expect({
				outlineBg:
					buttonTypeTokensMap[g.outline].bgColor,
				ghostBg: buttonTypeTokensMap[g.ghost].bgColor,
				outlineHasBorder:
					buttonTypeTokensMap[g.outline].borderColor !==
					undefined,
				ghostHasBorder:
					buttonTypeTokensMap[g.ghost].borderColor !==
					undefined,
			}).toEqual({
				outlineBg: ColorTokens.Transparent,
				ghostBg: ColorTokens.Transparent,
				outlineHasBorder: true,
				ghostHasBorder: false,
			});
		}
	});

	it('only the Elevated variants carry a shadow', () => {
		// "Elevated" is defined by having a drop shadow. If another variant
		// picked one up, the elevation hierarchy on a screen breaks down.
		const elevated = new Set<string>(
			SIZE_GROUPS.map((g) => g.elevated as string).concat(
				ButtonTypeTokens.IconElevated,
			),
		);
		for (const [token, v] of Object.entries(
			buttonTypeTokensMap,
		)) {
			expect({
				token,
				hasShadow: v.shadow !== undefined,
			}).toEqual({
				token,
				hasShadow: elevated.has(token),
			});
		}
		expect(
			buttonTypeTokensMap[
				ButtonTypeTokens.LargeElevated
			].shadow,
		).toBe(ShadowTypeTokens.E1);
	});

	it('Disabled variants use a muted grey fill and label at every size', () => {
		// Disabled has to be unmistakably different from the enabled fill, or
		// users tap a button that will not respond.
		for (const g of SIZE_GROUPS) {
			const disabled = buttonTypeTokensMap[g.disabled];
			expect({
				size: g.size,
				bg: disabled.bgColor,
				label: disabled.labelColor,
			}).toEqual({
				size: g.size,
				bg: ColorTokens.Grey_200,
				label: ColorTokens.Grey_500,
			});
			expect(disabled.bgColor).not.toBe(
				buttonTypeTokensMap[g.filled].bgColor,
			);
		}
	});

	it('Icon variants are square: equal vertical and horizontal padding', () => {
		// Icon buttons have no label, so unequal padding would render an
		// oval/pill instead of the intended circular tap target.
		for (const token of [
			ButtonTypeTokens.IconFilled,
			ButtonTypeTokens.IconSoftFilled,
			ButtonTypeTokens.IconOutline,
			ButtonTypeTokens.IconGhost,
			ButtonTypeTokens.IconElevated,
		]) {
			const v = buttonTypeTokensMap[token];
			expect({
				token,
				equal:
					v.paddingVertical === v.paddingHorizontal,
				fontSize: v.fontSize,
			}).toEqual({
				token,
				equal: true,
				// Icon buttons intentionally declare no fontSize - there is
				// no label to size.
				fontSize: undefined,
			});
		}
	});

	it('GoogleLargeFilled uses the Google brand blue on a squared BR1 corner', () => {
		// Google's sign-in branding guidelines require their exact blue and a
		// rectangular button; this variant deliberately breaks the library's
		// pill convention to comply.
		expect(
			buttonTypeTokensMap[
				ButtonTypeTokens.GoogleLargeFilled
			],
		).toEqual({
			borderRadius: BorderRadiusTokens.BR1,
			labelColor: ColorTokens.White,
			bgColor: ColorTokens.Google,
			paddingVertical: SizeTypeTokens.XS,
			fontSize: FontSizeTokens.LG,
			paddingHorizontal: SizeTypeTokens.XS,
		});
	});

	it('Filled variants use the Primary_500 brand fill at every size', () => {
		for (const g of SIZE_GROUPS) {
			expect(
				buttonTypeTokensMap[g.filled].bgColor,
			).toBe(ColorTokens.Primary_500);
		}
		expect(
			buttonTypeTokensMap[ButtonTypeTokens.IconFilled]
				.bgColor,
		).toBe(ColorTokens.Primary_500);
	});
});
