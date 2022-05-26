import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Book(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M9.536 17.789h0l-.005-.003c-1.61-.878-4.41-1.798-6.19-2.032 0 0 0 0 0 0l-.24-.033h0-.007c-.837-.103-1.552-.912-1.552-1.771V3.883c0-.523.203-.987.57-1.322.37-.338.849-.5 1.36-.455h.006c1.752.136 4.44 1.027 5.94 1.967l.006.005.007.004.2.117h0l.004.002c.136.077.28.09.357.092a.756.756 0 00.348-.07l.022-.011.02-.013.133-.083h0c1.495-.939 4.17-1.843 5.932-2H16.549l.024-.002c.46-.044.945.12 1.312.46h0l.003.004c.367.335.57.799.57 1.322v10.058c0 .865-.712 1.668-1.56 1.77l-.275.034h0-.005c-1.78.234-4.589 1.162-6.168 2.034h0l-.01.005a.878.878 0 01-.44.099.965.965 0 01-.464-.111zM2.28 2.747h0l-.002.002a1.53 1.53 0 00-.486 1.134V13.95c0 .388.165.743.396 1.006.23.262.559.47.934.523h.004l.25.033c1.814.242 4.63 1.165 6.243 2.044l.018.01.018.008a.922.922 0 00.279.071.724.724 0 00.335-.04l.03-.01.027-.016c1.61-.894 4.44-1.824 6.261-2.066l.28-.033h.002c.383-.047.714-.258.944-.522.23-.264.395-.62.395-1.008V3.892c0-.443-.17-.84-.478-1.136l-.008-.007-.007-.007a1.586 1.586 0 00-1.144-.392h0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.023l-.022.002c-.85.076-1.93.338-2.966.687-1.037.348-2.068.796-2.813 1.262l-.01.006-.008.006-.122.084c-.3.18-.74.174-1.014.004L9.5 4.397l-.006-.004-.196-.114c-.756-.463-1.79-.908-2.834-1.253-1.045-.345-2.136-.603-3.007-.674l-.02-.002h-.02 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0H3.4h0H3.4h0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0c-.387 0-.75.135-1.037.397z"
				fill={props.color}
				stroke={props.color}
			/>
			<Path
				d="M10 17.2a.123.123 0 01-.087-.038.123.123 0 01-.038-.087v-12.5c0-.03.012-.061.038-.087A.123.123 0 0110 4.45c.03 0 .061.012.087.038a.123.123 0 01.038.087v12.5c0 .07-.055.125-.125.125zM6.458 7.2H4.583a.123.123 0 01-.087-.038.123.123 0 01-.038-.087c0-.03.013-.061.038-.087a.123.123 0 01.087-.038h1.875c.03 0 .062.012.087.038a.123.123 0 01.038.087c0 .03-.012.061-.038.087a.123.123 0 01-.087.038zM7.083 9.7h-2.5a.123.123 0 01-.087-.038.123.123 0 01-.038-.087c0-.03.013-.061.038-.087a.123.123 0 01.087-.038h2.5c.03 0 .062.012.087.038a.123.123 0 01.038.087c0 .03-.012.061-.038.087a.123.123 0 01-.087.038z"
				fill={props.color}
				stroke={props.color}
			/>
		</Svg>
	)
}

export default Book;
