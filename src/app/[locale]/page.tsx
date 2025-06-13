import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return <main className="container" style={{ paddingTop: "5rem" }}></main>;
}
