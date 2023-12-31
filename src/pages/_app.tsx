import MainLayout from "@/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <div>
        <Component {...pageProps} />
      </div>
    </MainLayout>
  );
}
