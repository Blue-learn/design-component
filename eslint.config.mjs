// Flat ESLint config.
//
// Two jobs: keep the god-file problem from coming back (`max-lines`), and make
// `lint` a signal CI can actually gate on.
//
// RULE POLICY. These are long-lived codebases that predate any linting, so a
// config that errors on every pre-existing style choice fails on correct code
// and buries anything real — which is exactly what was happening. Correctness
// rules stay ERRORS; rules that only flag legacy style are WARNINGS, visible in
// the output without blocking the build. Tighten them per repo as the code is
// cleaned up, rather than blocking on a mass restyle.
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';

// Declared inline rather than via the `globals` package, to avoid a dependency
// for a fixed list. Without these, `no-undef` reports every window/document/
// process reference as an undefined variable.
const browser = {
	window: 'readonly', document: 'readonly', navigator: 'readonly',
	location: 'readonly', history: 'readonly', localStorage: 'readonly',
	sessionStorage: 'readonly', fetch: 'readonly', Headers: 'readonly',
	Request: 'readonly', Response: 'readonly', FormData: 'readonly',
	File: 'readonly', FileReader: 'readonly', Blob: 'readonly',
	URL: 'readonly', URLSearchParams: 'readonly', Image: 'readonly',
	Audio: 'readonly', Event: 'readonly', CustomEvent: 'readonly',
	HTMLElement: 'readonly', HTMLInputElement: 'readonly',
	HTMLVideoElement: 'readonly', Element: 'readonly', Node: 'readonly',
	MutationObserver: 'readonly', IntersectionObserver: 'readonly',
	ResizeObserver: 'readonly', requestAnimationFrame: 'readonly',
	cancelAnimationFrame: 'readonly', setTimeout: 'readonly',
	clearTimeout: 'readonly', setInterval: 'readonly',
	clearInterval: 'readonly', setImmediate: 'readonly',
	alert: 'readonly', confirm: 'readonly', prompt: 'readonly',
	atob: 'readonly', btoa: 'readonly', console: 'readonly',
	AbortController: 'readonly', structuredClone: 'readonly',
	getComputedStyle: 'readonly', open: 'readonly', close: 'readonly',
	HTMLButtonElement: 'readonly', HTMLDivElement: 'readonly',
	HTMLAnchorElement: 'readonly', HTMLFormElement: 'readonly',
	HTMLTextAreaElement: 'readonly', HTMLImageElement: 'readonly',
	HTMLCanvasElement: 'readonly',
	DOMRect: 'readonly', KeyboardEvent: 'readonly', MouseEvent: 'readonly',
	TouchEvent: 'readonly', FocusEvent: 'readonly', ClipboardEvent: 'readonly',
	Location: 'readonly', SVGElement: 'readonly', SVGSVGElement: 'readonly',
	DOMParser: 'readonly', XMLHttpRequest: 'readonly', WebSocket: 'readonly',
	IntersectionObserverEntry: 'readonly', ResizeObserverEntry: 'readonly',
	MediaStream: 'readonly', MediaStreamTrack: 'readonly',
	RTCPeerConnection: 'readonly', AudioContext: 'readonly',
};

// Type-space names that appear in TS annotations. `no-undef` cannot tell a type
// position from a value position, so without these it reports every
// `React.FC<...>` or `JSX.Element` as undefined.
//
// typescript-eslint's own advice is to switch no-undef off for TS entirely.
// It is kept ON here because it caught a genuine bug the compiler had not:
// core/components/app/SigninModal.tsx renders <ModalXDrawer> without importing
// it, and that component exists nowhere in the repo.
const tsTypes = {
	React: 'readonly', JSX: 'readonly', NodeJS: 'readonly',
};

const node = {
	process: 'readonly', Buffer: 'readonly', __dirname: 'readonly',
	__filename: 'readonly', module: 'writable', require: 'readonly',
	exports: 'writable', global: 'readonly', globalThis: 'readonly',
};

// React Native / Metro
const reactNative = {
	__DEV__: 'readonly', fetch: 'readonly', FormData: 'readonly',
	XMLHttpRequest: 'readonly', WebSocket: 'readonly',
	requestAnimationFrame: 'readonly', cancelAnimationFrame: 'readonly',
};

export default [
	js.configs.recommended,
	{
		ignores: [
			'dist/**', 'build/**', 'lib/**', '.next/**', 'node_modules/**',
			'coverage/**', 'storybook-static/**', '**/*.min.js',
			'docs/**',
		],
	},
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: { ...browser, ...node, ...reactNative },
			parserOptions: { ecmaFeatures: { jsx: true } },
		},
		rules: {
			// The guard that stops god files recurring.
			'max-lines': ['warn', { max: 500, skipBlankLines: true, skipComments: true }],

			// Legacy style — visible, not blocking. See the rule policy above.
			'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			eqeqeq: ['warn', 'smart'],
			'no-prototype-builtins': 'warn',
			'no-empty': ['warn', { allowEmptyCatch: true }],
			'no-useless-escape': 'warn',
			// `({}: Props) => ...` is the idiom for a component that is typed but
			// destructures nothing from its props. Not a defect.
			'no-empty-pattern': 'warn',
			'no-useless-catch': 'warn',

			// Correctness — these stay errors. Each one is a latent bug, not a
			// preference: an undefined reference, a duplicate key silently
			// discarding a value, code that can never run.
			'no-undef': 'error',
			'no-redeclare': 'error',
			'no-dupe-keys': 'error',
			'no-dupe-args': 'error',
			'no-unreachable': 'error',
			'no-const-assign': 'error',
			'no-dupe-class-members': 'error',
			'no-func-assign': 'error',
			'no-obj-calls': 'error',
			'use-isnan': 'error',
			'valid-typeof': 'error',
		},
	},
	{
		// TypeScript needs a parser that understands `as`, `!`, generics and
		// import attributes. Without it every TS file is a parse error, which
		// silently means the file is never linted at all.
		files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
		languageOptions: {
			parser: tsParser,
			globals: { ...browser, ...node, ...reactNative, ...tsTypes },
		},
		rules: {
			// tsc reports unused locals; the ESLint rule duplicates it and does not
			// understand type-only imports.
			'no-unused-vars': 'off',
			// TypeScript merges declarations, so `interface Foo` alongside
			// `const Foo` is legal and common. The base rule cannot see that and
			// reports every such pair as a redeclaration.
			'no-redeclare': 'off',
			// Formatting is Prettier's job, not a build gate.
			'no-mixed-spaces-and-tabs': 'warn',
		},
	},
	{
		// Ambient declaration files reference types that exist only in type space.
		// no-undef cannot see those and reports each as undefined.
		files: ['**/*.d.ts'],
		rules: { 'no-undef': 'off' },
	},
	{
		// Test files: the runner injects its globals rather than requiring them.
		files: [
			'**/__tests__/**', '**/*.test.*', '**/*.spec.*',
			'jest.*.js', 'cypress/**', '**/test-mocks/**',
		],
		languageOptions: {
			globals: {
				describe: 'readonly', it: 'readonly', test: 'readonly',
				expect: 'readonly', jest: 'readonly', vi: 'readonly',
				beforeEach: 'readonly', afterEach: 'readonly',
				beforeAll: 'readonly', afterAll: 'readonly',
				cy: 'readonly', Cypress: 'readonly',
			},
		},
		// A long table-driven suite is fine; the budget targets production code.
		rules: { 'max-lines': 'off' },
	},
];
