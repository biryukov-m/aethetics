import {SchemaTypeDefinition} from 'sanity'

export const CategorySchema: SchemaTypeDefinition = {
  name: 'category',
  title: 'Категорія',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the category, e.g., Toner, Mask.',
      validation: (rule) => rule.required(),
    },
  ],
}
