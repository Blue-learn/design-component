import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LocationPin(props) {
    return (
    <Svg
        width={props.size}
        height={props.size}
        viewBox="0 0 12 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M7.667 6a1.667 1.667 0 10-3.334 0 1.667 1.667 0 003.334 0z"
            stroke={props.color}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M6 13c-.8 0-5-3.401-5-6.958C1 3.258 3.238 1 6 1c2.761 0 5 2.258 5 5.042C11 9.6 6.799 13 6 13z"
            stroke={props.color}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
    )
}

export default LocationPin
