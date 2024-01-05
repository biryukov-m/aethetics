import {SchemaTypeDefinition} from 'sanity'

export const TagCategorySchema: SchemaTypeDefinition = {
  name: 'tagCategory',
  type: 'document',
  title: 'Tag Category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    },
  ],
}
