// import { getSettingsData } from "@/services/ApiHandler";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import type { Metadata } from "next";

import AosWrapper from "@/components/layout/AosWrapper";
import ScrollBtn from "@/components/layout/ScrollBtn";
import ToastProvider from "@/utils/providers/toastProvider";
import "animate.css";
import "aos/dist/aos.css";
import "../globals.scss";
import Navbar from "@/components/general/Navbar";
import Footer from "@/components/general/Footer";

export async function generateMetadata(
  {
    // params,
  }: {
    params: { locale: string };
  }
): Promise<Metadata> {
  // const { locale } = await params;
  // const isArabic = locale === "ar";

  // const settings = await getSettingsData();

  return {
    title: "شبل القانونيه",
    description: "Desc",
    icons: {
      icon: "/logo.png",
    },
    openGraph: {
      title: "شبل القانونيه",
      description: "Desc",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale: locale });

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="overflow-x-hidden bg-[#F2F4F5]">
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-[100vh] flex-col">
            <ToastProvider>
              <AosWrapper>
                <div className="app_wrapper" id="app_wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </AosWrapper>
              <ScrollBtn />
            </ToastProvider>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
