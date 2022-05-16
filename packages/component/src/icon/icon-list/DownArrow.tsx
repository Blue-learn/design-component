import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DownArrow(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M7 8.815c-.304 0-.608-.112-.848-.352L.504 2.815a1.207 1.207 0 010-1.696 1.207 1.207 0 011.696 0L7 5.92l4.8-4.8a1.207 1.207 0 011.696 0 1.207 1.207 0 010 1.696L7.848 8.463c-.24.24-.544.352-.848.352z"
                fill={props.color}
            />
        </Svg>
    )
}

export default DownArrow
