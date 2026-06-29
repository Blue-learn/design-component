import {
	ColorTokens,
	TagTypeTokens,
} from '@blue-learn/schema';
import { tagTypeTokensMap as darkTags } from '../dark-mobile/tag';
import { tagTypeTokensMap as lightTags } from '../light-mobile/tag';

describe('dark-mobile tagTypeTokensMap', () => {
	it('covers exactly the same variants as light-mobile', () => {
		expect(Object.keys(darkTags).sort()).toEqual(
			Object.keys(lightTags).sort(),
		);
		for (const token of Object.values(TagTypeTokens)) {
			expect(darkTags[token]).toBeDefined();
		}
	});

	it('inherits radius, font size and padding from light-mobile', () => {
		// Tags are laid out inline inside cards. If dark mode changed their
		// padding, every card containing a tag would change height on theme
		// switch.
		for (const token of Object.values(TagTypeTokens)) {
			expect({
				token,
				borderRadius: darkTags[token].borderRadius,
				fontSize: darkTags[token].fontSize,
				padding: darkTags[token].padding,
			}).toEqual({
				token,
				borderRadius: lightTags[token].borderRadius,
				fontSize: lightTags[token].fontSize,
				padding: lightTags[token].padding,
			});
		}
	});

	it('every referenced colour resolves to a real ColorTokens value', () => {
		const colors = new Set(Object.values(ColorTokens));
		for (const [token, v] of Object.entries(darkTags)) {
			expect({
				token,
				label: colors.has(v.labelColor),
				bg: colors.has(v.bgColor),
			}).toEqual({
				token,
				label: true,
				bg: true,
			});
		}
	});

	it('inverts every variant to a light label on a dark fill', () => {
		// The light theme uses dark text on a pale fill. Carrying that over
		// unchanged would put near-black text on a near-black surface. Every
		// dark variant therefore has to override *both* colours - this test
		// fails if a new variant is copied over without re-tinting.
		for (const token of Object.values(TagTypeTokens)) {
			expect({
				token,
				labelChanged:
					darkTags[token].labelColor !==
					lightTags[token].labelColor,
				bgChanged:
					darkTags[token].bgColor !==
					lightTags[token].bgColor,
			}).toEqual({
				token,
				labelChanged: true,
				bgChanged: true,
			});
		}
	});

	it('pins the dark fill/label pair for each variant', () => {
		expect(darkTags[TagTypeTokens.SM]).toMatchObject({
			labelColor: ColorTokens.Grey_200,
			bgColor: ColorTokens.Grey_500,
		});
		expect(darkTags[TagTypeTokens.MD]).toMatchObject({
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_700,
		});
		expect(
			darkTags[TagTypeTokens.SECONDARY],
		).toMatchObject({
			labelColor: ColorTokens.Grey_100,
			// Black_20 is a translucent black, so a SECONDARY tag darkens
			// whatever it sits on rather than painting an opaque chip.
			bgColor: ColorTokens.Black_20,
		});
		expect(
			darkTags[TagTypeTokens.GRADIENT],
		).toMatchObject({
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_700,
		});
	});

	it('SM and MD stay distinguishable from each other', () => {
		// Both dark variants land in the grey ramp, so it would be easy for a
		// recolour to collapse them into the same chip.
		expect(darkTags[TagTypeTokens.SM].bgColor).not.toBe(
			darkTags[TagTypeTokens.MD].bgColor,
		);
	});
});
