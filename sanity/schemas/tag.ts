import {SchemaTypeDefinition} from 'sanity'

export const TagSchema: SchemaTypeDefinition = {
  name: 'tag',
  type: 'document',
  title: 'Tag',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'category',
      type: 'reference',
      to: [{type: 'tagCategory'}],
      title: 'Category',
      validation: (rule) => rule.required(),
    },
  ],
}
