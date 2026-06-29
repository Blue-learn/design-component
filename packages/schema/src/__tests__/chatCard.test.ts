import { ChatCardTypeTokens } from '../chatCard';

describe('ChatCardTypeTokens', () => {
	const values = Object.values(ChatCardTypeTokens);

	it('exposes exactly sender / receiver / reply', () => {
		// ChatCardTypeTokensMap is a mapped type over this enum, so every
		// member obliges a theme to supply a bubble colour, label colour and
		// radius. Adding a member without the matching theme entry gives a
		// chat bubble with `undefined` colours - invisible text.
		expect(values.sort()).toEqual([
			'receiver',
			'reply',
			'sender',
		]);
	});

	it('every value equals its own key', () => {
		for (const key of Object.keys(
			ChatCardTypeTokens,
		)) {
			expect(
				ChatCardTypeTokens[
					key as keyof typeof ChatCardTypeTokens
				],
			).toBe(key);
		}
	});

	it('has no duplicate values', () => {
		// sender and receiver must stay distinct: they are what decides which
		// side of the thread a message is drawn on and which fill it gets.
		// A collision would render the user's own messages as the other
		// party's.
		expect(new Set(values).size).toBe(values.length);
	});

	it('keeps sender and receiver as separate tokens from reply', () => {
		// `reply` is a quoted-message variant, not a third participant. It has
		// to be independently addressable so a reply bubble can be themed
		// differently from the message it quotes.
		expect(ChatCardTypeTokens.reply).not.toBe(
			ChatCardTypeTokens.sender,
		);
		expect(ChatCardTypeTokens.reply).not.toBe(
			ChatCardTypeTokens.receiver,
		);
	});
});
