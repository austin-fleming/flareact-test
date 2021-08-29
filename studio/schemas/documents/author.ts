export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error('"Name" is missing.'),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required().error('"Slug" is missing.'),
    },
    {
      name: "authorImage",
      title: "Head Shot",
      type: "simpleImage",
      options: {
        hotspot: true,
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required().error('"Head Shot" is missing.'),
    },
    {
      name: "bio",
      title: "Bio",
      type: "descriptionPortableText",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error('"Bio" is missing.'),
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
