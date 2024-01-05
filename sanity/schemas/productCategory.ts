import {SchemaTypeDefinition} from 'sanity'

export const ProductCategorySchema: SchemaTypeDefinition = {
  name: 'productCategory',
  type: 'document',
  title: 'Product Category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'name',
      validation: (rule) => rule.required(),
    },
  ],
}
