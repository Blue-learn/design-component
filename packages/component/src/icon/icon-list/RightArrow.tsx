import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RightArrow(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M.917 3.917h6.918L5.718 1.373a.584.584 0 01.898-.746l2.917 3.5c.02.027.037.057.052.087 0 .03 0 .047.04.076.027.067.041.138.042.21a.583.583 0 01-.041.21c0 .03 0 .047-.04.076a.694.694 0 01-.053.087l-2.917 3.5a.583.583 0 01-.898-.746l2.117-2.544H.917a.583.583 0 010-1.166z"
                fill={props.color}
            />
        </Svg>
    )
}

export default RightArrow