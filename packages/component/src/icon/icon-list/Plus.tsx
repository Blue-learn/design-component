import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Quotes(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M1.5 5.5h9M6 10V1"
                stroke={props.color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default Quotes
