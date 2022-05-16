import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function InfoStatic(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 55 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect x={0.5} width={54} height={54} rx={12} fill="#E8E9ED" />
            <Path
                d="M26.997 12.833c-7.827 0-14.166 6.34-14.166 14.166 0 7.827 6.34 14.167 14.166 14.167 7.827 0 14.167-6.34 14.167-14.167s-6.34-14.166-14.167-14.166zm1.417 21.25H25.58v-8.5h2.833v8.5zm0-11.334H25.58v-2.833h2.833v2.833z"
                fill="#656A83"
            />
        </Svg>
    )
}

export default InfoStatic
