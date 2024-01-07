import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import AdCard from "@/components/AdCard";
import queryString from "query-string";
import { useSearchAdsQuery } from "@/graphql/generated/schema";

export default function Search() {
  const router = useRouter();
  const queryParsed = queryString.parse(window.location.search);
  const queryCategoryId = (
    typeof queryParsed.categoryId === "string"
      ? parseInt(queryParsed.categoryId, 10)
      : undefined
  ) as number;

  const { data } = useSearchAdsQuery({
    variables: {
      categoryId: queryCategoryId,
      title: queryParsed.title as string,
    },
  });
  const ads = data?.ads;

  return (
    <Layout pageTitle="recherche - TGC">
      {ads?.length === 0 && (
        <div>
          <p className="pb-4 pt-12">
            {" "}
            Aucune annonce ne corresspond à ces critères de recherche
          </p>

          <button
            className="btn btn-primary text-white"
            onClick={() => router.push("/search")}
          >
            Voir toutes les annonces
          </button>
        </div>
      )}

      <div className="pt-6 pb-20 flex flex-wrap">
        {ads?.map((ad) => (
          <AdCard key={ad.id} ad={ad} link={`/ads/${ad.id}`} />
        ))}
      </div>
    </Layout>
  );
}
