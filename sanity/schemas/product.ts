import {SchemaTypeDefinition} from 'sanity'

export const ProductSchema: SchemaTypeDefinition = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      fields: [
        {
          name: 'imageAlt',
          type: 'string',
          title: 'ImageAlt',
          description: 'Text definition of what displayed on image',
          placeholder: 'ex. books',
        },
      ],
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule) => Rule.min(0),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'composition',
      type: 'text',
      title: 'Composition',
    },
    {
      name: 'category',
      type: 'reference',
      to: [{type: 'productCategory'}],
      title: 'Category',
      validation: (rule) => rule.required(),
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
    },
  ],
}
