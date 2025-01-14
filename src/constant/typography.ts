const fontFamily = "PP Neue Montreal";
const typography = {
  pageHeading: {
    fontFamily,
    fontSize: "64px",
    fontWeight: 500,
    lineHeight: "76.8px",
  },
  bodyLg: {
    fontFamily,
    fontSize: "48px",
    fontWeight: 400,
    lineHeight: "57.6px",
  },

  body: {
    fontFamily,
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "27px",
  },
  titleMd: {
    fontFamily,
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "27px",
  },
  button: {
    fontFamily,
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
  },
  menu: {
    fontFamily,
    fontSize: "32px",
    fontWeight: 500,
    lineHeight: "44.8px",
  },
  tag: {
    fontFamily,
    fontSize: "10px",
    fontWeight: 500,
    lineHeight: "13px",
  },
} as const;

export type TypographyVariantType = keyof typeof typography;

export default typography;
