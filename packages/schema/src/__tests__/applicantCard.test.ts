import { ApplicationSeenTokens } from '../applicantCard';
import { DiscussionStateTokens } from '../discussionCard';

describe('ApplicationSeenTokens', () => {
	const values = Object.values(ApplicationSeenTokens);

	it('exposes exactly SEEN and UNSEEN', () => {
		expect(values.sort()).toEqual(['SEEN', 'UNSEEN']);
	});

	it('every value equals its own key', () => {
		for (const key of Object.keys(
			ApplicationSeenTokens,
		)) {
			expect(
				ApplicationSeenTokens[
					key as keyof typeof ApplicationSeenTokens
				],
			).toBe(key);
		}
	});

	it('drives three independent read-state props on one card', () => {
		// ApplicantCardProps uses this same enum for `state`, `powState` and
		// `assignmentState`. That is what lets a recruiter see, on a single
		// row, which of the three artefacts they have already opened - so the
		// two members have to stay distinct truthy strings rather than
		// collapsing to a boolean.
		expect(ApplicationSeenTokens.SEEN).not.toBe(
			ApplicationSeenTokens.UNSEEN,
		);
		expect(Boolean(ApplicationSeenTokens.UNSEEN)).toBe(
			true,
		);
	});

	it('shares its exact vocabulary with DiscussionStateTokens', () => {
		// Two separate enums encode the same seen/unseen idea
		// (ApplicationSeenTokens on applicant cards, DiscussionStateTokens on
		// discussion cards). They are used interchangeably by API payloads, so
		// if one drifted, a backend field that populates both would start
		// failing for one card type only.
		expect(values.sort()).toEqual(
			Object.values(DiscussionStateTokens).sort(),
		);
		expect(ApplicationSeenTokens.SEEN).toBe(
			DiscussionStateTokens.SEEN,
		);
		expect(ApplicationSeenTokens.UNSEEN).toBe(
			DiscussionStateTokens.UNSEEN,
		);
	});
});
