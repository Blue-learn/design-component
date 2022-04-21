export enum ButtonType {
  Primary = "PRIMARY",
  Secondary = "SECONDARY",
}
export type ButtonProps = {
  /**
   * Button contents
   */
  label: String;
  /**
   * Is this the principal call to action on the page?
   */
  type: ButtonType;

  loading?: boolean;

  onPress?: Function;
};
