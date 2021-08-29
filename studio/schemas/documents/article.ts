export default {
  name: "article",
  title: "Article",
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
      name: "author",
      title: "Author",
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
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
