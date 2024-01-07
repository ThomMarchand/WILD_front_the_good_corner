import {
  TagsDocument,
  TagsQuery,
  useCreateTagMutation,
  useDeleteTagMutation,
  useTagsQuery,
} from "@/graphql/generated/schema";
import { client } from "@/graphql/client";

import AdminTagRow from "@/components/admin/AdminTagRow";
import AdminLayout from "@/components/admin/AdminLayout";

export default function AdminTags() {
  const [createTag] = useCreateTagMutation();
  const [deleteTag] = useDeleteTagMutation();

  const { data } = useTagsQuery();
  const tags = data?.getTagByName || [];

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const json = Object.fromEntries(data.entries());

    try {
      const { data } = await createTag({
        variables: {
          data: {
            name: json.name as string,
          },
        },
      });

      if (data?.createTag) {
        client.writeQuery<TagsQuery>({
          query: TagsDocument,
          data: {
            getTagByName: [data?.createTag, ...tags],
          },
        });
      }

      form.reset();
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteTag = async (id: number) => {
    try {
      await deleteTag({
        variables: {
          tadId: id,
        },
      });

      client.writeQuery<TagsQuery>({
        query: TagsDocument,
        data: {
          getTagByName: tags.filter((t) => t.id !== id),
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AdminLayout title="gestion des tags - TGC">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nouveau Tag :{" "}
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

      {tags?.length !== 0 && (
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nom</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tags?.map((c) => (
              <AdminTagRow
                key={c.id}
                handleDeleteTag={handleDeleteTag}
                tag={c}
              />
            ))}
          </tbody>
        </table>
      )}
    </AdminLayout>
  );
}
