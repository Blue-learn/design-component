import { ButtonProps } from "@design-component/schema";
import React from "react";

export declare type ButtonComponentType = ((props: ButtonProps) => JSX.Element) & {
    Shimmer?: React.FunctionComponent<() => JSX.Element>;
};
