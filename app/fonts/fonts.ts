import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

export const roboto = localFont({
  variable: "--font-roboto",
  src: [
    {
      path: "./Roboto/Roboto-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Roboto/Roboto-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./Roboto/Roboto-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Roboto/Roboto-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./Roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Roboto/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Roboto/Roboto-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Roboto/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Roboto/Roboto-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./Roboto/Roboto-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./Roboto/Roboto-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
});

export const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const lato = localFont({
  variable: "--font-lato",
  src: [
    {
      path: "./Lato/Lato-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Lato/Lato-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./Lato/Lato-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Lato/Lato-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./Lato/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Lato/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Lato/Lato-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./Lato/Lato-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./Lato/Lato-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
});
