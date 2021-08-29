export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      codegen: { required: true },
      validation: (Rule) => Rule.required().error('"Title" is missing.'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
