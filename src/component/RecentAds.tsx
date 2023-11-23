import { useEffect, useState } from "react";
import axios from "axios";

import { AdCard, AdCardProps } from "./AdCard";
import Link from "next/link";

export const RecentAds = () => {
  const [ads, setAds] = useState<AdCardProps[]>([]);

  useEffect(() => {
    try {
      axios
        .get<AdCardProps[]>("http://localhost:4000/ad")
        .then(({ data }) => setAds(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <h2>Annonces récentes</h2>
      <section className="recent-ads">
        {ads.map((ad) => (
          <div key={ad.id}>
            <AdCard
              id={ad.id}
              title={ad.title}
              picture={ad.picture}
              price={ad.price}
              link={ad.link}
            />
            <Link href={`/ads/${ad.id}`}>
              <button className="button">Voir l&apos;annonce</button>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};
