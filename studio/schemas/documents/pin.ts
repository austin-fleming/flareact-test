export default {
  name: "pin",
  title: "Pin",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("'Title' is missing."),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("'Slug' is missing."),
    },
    {
      name: "creator",
      title: "Created By",
      type: "string",
      description: "Who created this piece?",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("'Designer' is missing."),
    },
    {
      name: "pinnedBy",
      title: "Pinned By",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "figure",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("'Main Image' is missing."),
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("'Published at' is missing."),
    },
    {
      name: "body",
      title: "Body",
      type: "articlePortableText",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("'Body' is missing."),
    },
    {
      name: "credits",
      title: "Credits",
      type: "descriptionPortableText",
    },
  ],
  preview: {
    select: {
      title: "title",
      creator: "creator",
      media: "mainImage",
    },
    prepare(selection) {
      const { creator } = selection;
      return Object.assign({}, selection, {
        subtitle: creator && `by ${creator}`,
      });
    },
  },
};
