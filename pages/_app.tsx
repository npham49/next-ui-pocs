import "tailwindcss/tailwind.css";
import "../styles/globals.css";
// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from "next-themes";

    function MyApp({ Component, pageProps }:any) {
      return (
        <NextUIProvider>
          <ThemeProvider enableSystem={true} attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </NextUIProvider>
      );
    }

    export default MyApp;