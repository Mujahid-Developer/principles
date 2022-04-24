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
      name: "author",
      title: "Author",
      type: "string",
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