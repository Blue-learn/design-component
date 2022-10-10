import * as React from 'react';
import Svg, { Rect, Defs, G} from "react-native-svg";

function EmptyCircle(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G filter="url(#filter0_d_10163_5405)">
                <Rect
                    x={2.5}
                    y={2.49805}
                    width={19}
                    height={19}
                    rx={9.5}
                    stroke="#9EACFF"
                />
            </G>
            <Defs></Defs>
        </Svg>
    );
}

export default EmptyCircle;
