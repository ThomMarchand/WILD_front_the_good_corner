import { useEffect, useState } from "react";
import axios from "axios";

import { Layout } from "@/component/Layout";
import { HomeBtn } from "@/component/HomeBtn";

export type category = {
  id: number;
  type: string;
};

export default function NewAd() {
  const [categories, setCategories] = useState<category[]>([]);

  useEffect(() => {
    axios
      .get<category[]>("http://localhost:4000/categories")
      .then(({ data }) => setCategories(data));
  }, []);
  return (
    <Layout pageTitle="Céer une annonce">
      <form
        className="ad-form"
        onSubmit={(e) => {
          e.preventDefault();

          const form = e.target as HTMLFormElement;
          const formData = new FormData(form);
          const formJSON = Object.fromEntries(formData.entries());

          (formJSON as any).price = parseFloat((formJSON as any).price);
          (formJSON as any).category = parseInt((formJSON as any).category);

          axios.post("http://localhost:4000/ad", formJSON);
          form.reset();
        }}
      >
        <label>
          Titre de l&apos;annonce :
          <input className="text-field" name="title" type="text" />
        </label>

        <label htmlFor="picture">
          Image de l&apos;annonce
          <input
            className="text-field"
            type="url"
            name="picture"
            id="picture"
          />
        </label>

        <label htmlFor="owner">
          Auteur
          <input className="text-field" type="text" name="owner" id="owner" />
        </label>

        <label htmlFor="location">
          Localisation
          <input
            className="text-field"
            type="text"
            name="location"
            id="location"
          />
        </label>

        <label htmlFor="price">
          Prix
          <input
            className="text-field"
            type="number"
            name="price"
            id="price"
            step={0.01}
          />
        </label>

        <label htmlFor="description">
          Description
          <textarea
            className="text-field"
            name="description"
            id="description"
            style={{ resize: "none" }}
          />
        </label>

        <label htmlFor="category">
          Prix
          <select name="category" id="category">
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.type}
              </option>
            ))}
          </select>
        </label>

        <button className="button">Envoyer</button>
        <HomeBtn />
      </form>
    </Layout>
  );
}
