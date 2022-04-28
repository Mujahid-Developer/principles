export default {
  name: "principles",
  title: "Principles",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Post title",
      type: "string",
    },
    {
      name: "description",
      type: "text",
    },
    {
      title: "Image URL",
      name: "imageUrl",
      type: "url",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      title: "Author ID URL",
      name: "authorUrl",
      type: "url",
    },
    {
      title: "Derived From Url",
      name: "derivedUrl",
      type: "url",
    },

    {
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],
};
