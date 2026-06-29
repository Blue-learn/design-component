import {
	ActiveStateTokens,
	AvatarSizeTokens,
	AvatarTypeTokens,
} from '../avatar';

describe('AvatarTypeTokens', () => {
	it('exposes exactly SINGLE and MULTIPLE', () => {
		// Avatar.tsx branches on this token twice: it returns nothing when
		// `type === SINGLE` without a `uri`, and nothing when
		// `type === MULTIPLE` without `uris`. A third member would fall
		// through both guards and render an empty Stack.
		expect(Object.values(AvatarTypeTokens).sort()).toEqual(
			['MULTIPLE', 'SINGLE'],
		);
	});

	it('SINGLE is the value Avatar.tsx defaults to', () => {
		// `type = AvatarTypeTokens.SINGLE` is the default parameter, so every
		// avatar rendered without a type takes the single-uri path.
		expect(AvatarTypeTokens.SINGLE).toBe('SINGLE');
	});
});

describe('ActiveStateTokens', () => {
	it('exposes exactly ACTIVE and INACTIVE', () => {
		expect(
			Object.values(ActiveStateTokens).sort(),
		).toEqual(['ACTIVE', 'INACTIVE']);
	});

	it('ACTIVE is what Avatar.Base.tsx compares against to show the presence dot', () => {
		// Avatar.Base.tsx renders the green dot only when
		// `active === ActiveStateTokens.ACTIVE` - a strict equality check
		// against this literal. Change the value and every "online" indicator
		// disappears while the prop still typechecks.
		expect(ActiveStateTokens.ACTIVE).toBe('ACTIVE');
		expect(ActiveStateTokens.INACTIVE).not.toBe(
			ActiveStateTokens.ACTIVE,
		);
	});
});

describe('AvatarSizeTokens', () => {
	const values = Object.values(AvatarSizeTokens);

	it('exposes the full XS..XXXL scale', () => {
		// These are the keys of the theme's avatarTypeTokensMap. A member
		// with no theme entry makes `theme.avatarSize[size]` undefined, and
		// Avatar.Base.tsx then divides it (sizeValue / 2, / 4, / 8) producing
		// NaN geometry.
		expect(values.sort()).toEqual([
			'LG',
			'MD',
			'SM',
			'XL',
			'XS',
			'XXL',
			'XXXL',
		]);
	});

	it('every value equals its own key', () => {
		for (const key of Object.keys(AvatarSizeTokens)) {
			expect(
				AvatarSizeTokens[
					key as keyof typeof AvatarSizeTokens
				],
			).toBe(key);
		}
	});

	it('has no duplicate values', () => {
		expect(new Set(values).size).toBe(values.length);
	});

	it('includes MD, which UserCard renders unconditionally', () => {
		// component/src/userCard/UserCard.tsx hardcodes
		// `size={AvatarSizeTokens.MD}`, so removing it breaks a component
		// inside this package.
		expect(values).toContain('MD');
	});
});
