const colors = {
  F4F4F4: "#F4F4F4",
  brown: "#7D614B",
  white: "#FFFFFF",
  darkGrey: "#434343",
  neutral: "#CCCCCC",
} as const;

export type ColorType = keyof typeof colors;

export default colors;
