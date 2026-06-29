import {
	BorderRadiusTokens,
	ColorTokens,
	FontSizeTokens,
	inputTypeToken,
	SizeTypeTokens,
} from '@blue-learn/schema';
import { inputTypeTokensMap } from '../light-mobile/textInput';
import { borderRadiusTypeTokensMap } from '../light-mobile/borderRadius';
import { sizeTypeTokensMap } from '../light-mobile/space';
import { fontSizeTokensMap } from '../light-mobile/typography';

describe('light-mobile inputTypeTokensMap', () => {
	it('has an entry for every inputTypeToken variant', () => {
		// TextInput.tsx spreads `theme.textInput[type]` into TextInput.base.
		// A missing variant spreads `undefined`, dropping the border, padding
		// and text colour in one go - the field renders as an unstyled box.
		for (const token of Object.values(inputTypeToken)) {
			expect(inputTypeTokensMap[token]).toBeDefined();
		}
	});

	it('every variant declares the full style contract', () => {
		for (const [token, value] of Object.entries(
			inputTypeTokensMap,
		)) {
			expect({
				token,
				keys: Object.keys(value).sort(),
			}).toEqual({
				token,
				keys: [
					'bgColor',
					'borderColor',
					'borderRadius',
					'color',
					'fontSize',
					'paddingHorizontal',
					'paddingVertical',
				],
			});
		}
	});

	it('every referenced token resolves in its own theme map', () => {
		// These are token *names*; a typo still typechecks as a string and
		// then silently resolves to `undefined` at render time.
		const colors = new Set(Object.values(ColorTokens));
		for (const [token, v] of Object.entries(
			inputTypeTokensMap,
		)) {
			expect({
				token,
				bg: colors.has(v.bgColor!),
				border: colors.has(v.borderColor!),
				color: colors.has(v.color!),
				radius:
					borderRadiusTypeTokensMap[
						v.borderRadius!
					] !== undefined,
				padV:
					sizeTypeTokensMap[v.paddingVertical!] !==
					undefined,
				padH:
					sizeTypeTokensMap[v.paddingHorizontal!] !==
					undefined,
				size:
					fontSizeTokensMap[v.fontSize!] !== undefined,
			}).toEqual({
				token,
				bg: true,
				border: true,
				color: true,
				radius: true,
				padV: true,
				padH: true,
				size: true,
			});
		}
	});

	it('success and error variants differ only in border colour', () => {
		// The validation states are meant to be the default input plus a
		// coloured border. If they started differing in padding or radius,
		// a field would visibly jump the moment it became invalid.
		const base =
			inputTypeTokensMap[inputTypeToken.default];
		const success =
			inputTypeTokensMap[inputTypeToken.success];
		const error =
			inputTypeTokensMap[inputTypeToken.error];

		expect({ ...success, borderColor: null }).toEqual({
			...base,
			borderColor: null,
		});
		expect({ ...error, borderColor: null }).toEqual({
			...base,
			borderColor: null,
		});
		expect(success.borderColor).toBe(
			ColorTokens.Success_100,
		);
		expect(error.borderColor).toBe(
			ColorTokens.Error_100,
		);
	});

	it('search and chat use the fully-rounded BR4 pill radius, default/success/error use BR1', () => {
		// The pill shape is what visually distinguishes a search field from a
		// form field. Getting this wrong makes search look like a text input.
		expect(
			inputTypeTokensMap[inputTypeToken.search]
				.borderRadius,
		).toBe(BorderRadiusTokens.BR4);
		expect(
			inputTypeTokensMap[inputTypeToken.chat]
				.borderRadius,
		).toBe(BorderRadiusTokens.BR4);
		expect(
			inputTypeTokensMap[inputTypeToken.default]
				.borderRadius,
		).toBe(BorderRadiusTokens.BR1);
	});

	it('the comment variant is square-cornered and edge-to-edge', () => {
		// The comment composer is docked to the bottom of a thread, so it
		// deliberately has no corner radius and tighter horizontal padding
		// than the other variants.
		const comment =
			inputTypeTokensMap[inputTypeToken.comment];
		expect(comment.borderRadius).toBe(
			BorderRadiusTokens.BR0,
		);
		expect(comment.paddingHorizontal).toBe(
			SizeTypeTokens.MD,
		);
		expect(comment.borderColor).toBe(
			ColorTokens.Transparent,
		);
	});

	it('every variant renders text at the same SM size', () => {
		// Input text size is deliberately uniform - a search box and a form
		// field on the same screen must not have different text sizes.
		for (const value of Object.values(
			inputTypeTokensMap,
		)) {
			expect(value.fontSize).toBe(FontSizeTokens.SM);
		}
	});
});
