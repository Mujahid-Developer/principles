export default {
  name: "dailypicks",
  title: "Daily Picks",
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
