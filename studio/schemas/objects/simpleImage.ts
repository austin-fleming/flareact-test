export default {
  name: "simpleImage",
  type: "image",
  title: "Simple Image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      description: "Important for SEO and accessibility.",
      codegen: { required: true },
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "caption",
    },
  },
};
