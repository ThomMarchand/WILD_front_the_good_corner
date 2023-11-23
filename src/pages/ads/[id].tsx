import { HomeBtn } from "@/component/HomeBtn";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

import { AdCardProps } from "@/component/AdCard";

const AdDetailComponent = () => {
  const router = useRouter();
  const idQuery = router.query.id;
  const [ad, setAd] = useState<AdCardProps>();

  useEffect(() => {
    try {
      axios
        .get<AdCardProps[]>(`http://localhost:4000/ad?adId=${idQuery}`)
        .then(({ data }) => setAd(data[0]));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <main className="main-content">
        <h2 className="ad-details-title">{ad?.title}</h2>
        <section className="ad-details">
          <div className="ad-details-image-container">
            <img
              className="ad-details-image"
              src={ad?.picture}
              alt={`Photo de ${ad?.title}`}
            />
          </div>
          <div className="ad-details-info">
            <div className="ad-details-price">{ad?.price} €</div>
            <div className="ad-details-description">{ad?.description}</div>
            <hr className="separator" />
            <div className="ad-details-owner">
              Annoncée publiée par <b>{ad?.owner}</b> le
              {" " + dayjs(ad?.createdAt).format("DD/MM/YYYY")} à
              {" " + dayjs(ad?.createdAt).format("hh:mm:ss")}.
            </div>
            <a href="/" className="button button-primary link-button">
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="styled__BaseIcon-sc-1jsm4qr-0 llmHhT"
                // style={{stroke: currentcolor; stroke-width: 2.5; fill: none}}
              >
                <path d="M25 4H7a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h18a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5ZM7 6h18a3 3 0 0 1 2.4 1.22s0 0-.08 0L18 15.79a3 3 0 0 1-4.06 0L4.68 7.26H4.6A3 3 0 0 1 7 6Zm18 20H7a3 3 0 0 1-3-3V9.36l8.62 7.9a5 5 0 0 0 6.76 0L28 9.36V23a3 3 0 0 1-3 3Z"></path>
              </svg>
              Envoyer un email
            </a>
          </div>
        </section>
        <HomeBtn />
        <button
          className="button"
          onClick={async (e) => {
            alert("Etes- vous sur de vouloir supprimer l'annonce ?");
            await axios.delete(`http://localhost:4000/ad/${idQuery}`);
            router.push("/");
          }}
        >
          Supprimer l&apos;annoce
        </button>
      </main>
    </>
  );
};

export default AdDetailComponent;
