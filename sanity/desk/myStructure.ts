import type { StructureBuilder } from "sanity/desk";

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title("Pages")
    .items([
      ...S.documentTypeListItems().filter((listItem) => {
        const id = listItem.getId();
        return id && !["media.tag"].includes(id);
      }),
    ]);
