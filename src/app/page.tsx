import MainPage from "@/components/MainPage";
import { getDictionary } from "../get-dictionary";

const BASE_URL = "https://overpack.am/";

export async function generateMetadata() {
  return {
    alternates: {
      canonical: `${BASE_URL}`,
      languages: {
        en: `${BASE_URL}/en/`,
        hy: `${BASE_URL}/hy/`,
        ru: `${BASE_URL}/ru/`,
      },
    },
  };
}

export default async function RootPage() {
  const dictionary = await getDictionary("en");
  return (
    <html lang="en">
      <body>
        <MainPage dictionary={dictionary} />
      </body>
    </html>
  );
} 