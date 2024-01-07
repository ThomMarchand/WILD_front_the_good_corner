import { client } from "@/graphql/client";
import {
  CategoriesQuery,
  useCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
} from "@/graphql/generated/schema";

import { CategoriesDocument } from "../../graphql/generated/schema";
import AdminCategoryRow from "@/components/admin/AdminCategoryRow";
import AdminLayout from "@/components/admin/AdminLayout";

export default function AdminCategories() {
  const [deleteCategory] = useDeleteCategoryMutation();
  const [createCategory] = useCreateCategoryMutation();

  const { data } = useCategoriesQuery();
  const categories = data?.categories || [];

  const handleDeleteCategory = async (id: number) => {
    try {
      await deleteCategory({
        variables: {
          categoryId: id,
        },
      });

      client.writeQuery<CategoriesQuery>({
        query: CategoriesDocument,
        data: {
          categories: categories.filter((c) => c.id !== id),
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const json = Object.fromEntries(data.entries());

    try {
      const { data } = await createCategory({
        variables: {
          data: json as any,
        },
      });

      if (data?.createCategory) {
        client.writeQuery<CategoriesQuery>({
          query: CategoriesDocument,
          data: {
            categories: [data?.createCategory, ...categories],
          },
        });
      }

      form.reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AdminLayout title="gestion des categories - TGC">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nouvelle Catégorie :{" "}
          <input
            type="text"
            id="name"
            name="name"
            className="input mr-2"
            required
          />
        </label>
        <button className="btn">Enregistrer</button>
      </form>

      {categories?.length !== 0 && (
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nom</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((c) => (
              <AdminCategoryRow
                key={c.id}
                handleDeleteCategory={handleDeleteCategory}
                category={c}
              />
            ))}
          </tbody>
        </table>
      )}
    </AdminLayout>
  );
}
