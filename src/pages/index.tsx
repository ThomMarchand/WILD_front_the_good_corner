import { Layout } from "@/component/Layout";
import { RecentAds } from "@/component/RecentAds";

export default function Home() {
  return (
    <Layout pageTitle="Accueil">
      <RecentAds />
    </Layout>
  );
}
