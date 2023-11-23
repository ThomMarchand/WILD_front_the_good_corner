import Link from "next/link";

export const HomeBtn = () => {
  return (
    <Link href="/">
      <button className="button">Retour à l&apos;accueil</button>
    </Link>
  );
};
