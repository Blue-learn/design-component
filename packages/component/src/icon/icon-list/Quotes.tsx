import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Quotes(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M13 34.667h10c8.333 0 11.667-3.334 11.667-11.667V13c0-8.333-3.334-11.667-11.667-11.667H13C4.667 1.333 1.333 4.667 1.333 13v10c0 8.333 3.334 11.667 11.667 11.667z"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M26.333 17.733h-4.467c-1.183 0-1.983-.9-1.983-1.983v-2.483c0-1.084.8-1.984 1.983-1.984h2.484c1.083 0 1.983.9 1.983 1.984v4.466zm0 0c0 4.65-.867 5.434-3.483 6.984m-6.75-6.984h-4.467c-1.183 0-1.983-.9-1.983-1.983v-2.483c0-1.084.8-1.984 1.983-1.984h2.484c1.083 0 1.983.9 1.983 1.984v4.466zm0 0c0 4.65-.867 5.434-3.483 6.984"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default Quotes
