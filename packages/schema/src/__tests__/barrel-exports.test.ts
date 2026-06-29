import * as schema from '../index';

/**
 * packages/schema/src/index.ts is a barrel of `export *` lines. It is the only
 * entry point consumers (and packages/theme, packages/component) import from -
 * `@blue-learn/schema`.
 *
 * A dropped `export *` line does not fail any build: the symbol simply stops
 * existing on the package surface, and the failure shows up as `undefined` at
 * a call site in someone else's app. These tests pin the surface, including
 * the four modules that are currently *missing* from it.
 */
describe('@blue-learn/schema barrel', () => {
	const RUNTIME_EXPORTS = [
		// One representative runtime enum per barrel line, so a missing
		// `export *` for any module fails here rather than downstream.
		'WIDGET', // ./enums
		'ColorTokens', // ./colors
		'GradientColorTokens', // ./colors
		'BorderRadiusTokens', // ./borderRadius
		'SizeTypeTokens', // ./size
		'ShadowTypeTokens', // ./shadow
		'ButtonTypeTokens', // ./button
		'ButtonWidthTypeToken', // ./button
		'TypographyTypeTokens', // ./typography
		'FontSizeTokens', // ./typography
		'FontFamilyTokens', // ./typography
		'FontDecorationToken', // ./typography
		'FontTransformToken', // ./typography
		'TextAlignTokens', // ./typography
		'EllipsizeModeTokens', // ./typography
		'inputTypeToken', // ./textInput
		'keyboardTypeToken', // ./textInput
		'IconTokens', // ./icon
		'IconSizeTokens', // ./icon
		'IconAlignmentTokens', // ./icon
		'StackType', // ./stack
		'StackJustifyContent', // ./stack
		'StackAlignItems', // ./stack
		'StackFlexWrap', // ./stack
		'StackAlignType', // ./stack
		'AvatarSizeTokens', // ./avatar
		'AvatarTypeTokens', // ./avatar
		'ActiveStateTokens', // ./avatar
		'DividerSizeTokens', // ./divider
		'ImageSizeTokens', // ./image
		'AspectRatioToken', // ./image
		'ResizeModeToken', // ./image
		'ProgressIndicatorTypeTokens', // ./progressIndicator
		'ChipTypeTokens', // ./chip
		'ChipHighlightTokens', // ./chip
		'TagTypeTokens', // ./tag
		'GridStateTokens', // ./grid
		'LikeStateTokens', // ./newsCard
		'DiscussionStateTokens', // ./discussionCard
		'ApplicationSeenTokens', // ./applicantCard
	];

	it.each(RUNTIME_EXPORTS)(
		're-exports %s from the package root',
		(name) => {
			expect(
				(schema as Record<string, unknown>)[name],
			).toBeDefined();
		},
	);

	it('exports every listed symbol as a usable enum object, not just a truthy value', () => {
		// `export *` of a type-only module produces nothing at runtime. This
		// catches a token enum being accidentally converted to a `type` union
		// during a refactor - the import keeps typechecking but every
		// `Object.values(X)` / `X.MEMBER` at runtime breaks.
		for (const name of RUNTIME_EXPORTS) {
			const value = (
				schema as Record<string, unknown>
			)[name];
			expect({
				name,
				isObject: typeof value === 'object',
				hasMembers:
					Object.keys(value as object).length > 0,
			}).toEqual({
				name,
				isObject: true,
				hasMembers: true,
			});
		}
	});

	it('KNOWN GAP: opacity, chatCard, lottie and linkPreview are NOT on the public surface', () => {
		// BUG, pinned rather than fixed. src/index.ts has no `export *` line
		// for './opacity', './chatCard', './lottie' or './linkPreview', so
		// none of their symbols are reachable from '@blue-learn/schema'.
		//
		// The sharpest consequence is OpacityTypeTokens: ChipBaseProps.opacity
		// is typed as `OpacityTypeTokens`, so a consumer constructing that
		// prop object has no way to import the enum whose members are the only
		// legal values for it. ChatCardProps / LottieProps / LinkPreviewProps
		// are likewise dead surface - declared in this package, importable by
		// nobody outside it.
		//
		// Pinned instead of fixed because adding four `export *` lines widens
		// the published API of @blue-learn/schema, which is a semver decision
		// for the maintainers rather than a test-time change. When those lines
		// are added, this test flips to the assertions below it.
		for (const name of [
			'OpacityTypeTokens',
			'ChatCardTypeTokens',
			'LottieSizeTokens',
		]) {
			expect({
				name,
				reachableFromBarrel:
					(schema as Record<string, unknown>)[name] !==
					undefined,
			}).toEqual({
				name,
				reachableFromBarrel: false,
			});
		}

		// ...even though each one is a perfectly good enum in its own module.
		expect(
			Object.keys(require('../opacity').OpacityTypeTokens)
				.length,
		).toBeGreaterThan(0);
		expect(
			Object.keys(
				require('../chatCard').ChatCardTypeTokens,
			).length,
		).toBeGreaterThan(0);
		expect(
			Object.keys(require('../lottie').LottieSizeTokens)
				.length,
		).toBeGreaterThan(0);
	});

	it('re-exports each module by reference, so there is no duplicated enum identity', () => {
		// `export *` silently drops a name exported by two barrel lines. If
		// that happened, the root export would stop being the same object as
		// the module's own export and `schema.X.MEMBER === module.X.MEMBER`
		// comparisons across package boundaries would break.
		expect(schema.IconSizeTokens).toBe(
			require('../icon').IconSizeTokens,
		);
		expect(schema.ImageSizeTokens).toBe(
			require('../image').ImageSizeTokens,
		);
		expect(schema.FontSizeTokens).toBe(
			require('../typography').FontSizeTokens,
		);
		expect(schema.ColorTokens).toBe(
			require('../colors').ColorTokens,
		);
	});

	it('exposes the WIDGET discriminants the component registry is keyed by', () => {
		// component/src/registry.ts builds its widget map from WIDGET members
		// imported through this barrel. Every member must survive the
		// re-export or the corresponding widget type becomes unrenderable in
		// any server-driven UI payload.
		expect(Object.keys(schema.WIDGET).length).toBe(25);
		expect(Object.values(schema.WIDGET)).toEqual(
			expect.arrayContaining([
				'TEXT',
				'INPUT',
				'BUTTON',
				'STACK',
				'CARD',
				'GRID',
			]),
		);
	});
});
