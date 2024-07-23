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
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      description: 'The category this product belongs to.',
      validation: (rule) => rule.required(),
    },
    {
      name: 'skinTypes',
      title: 'Suitable for Skin Types',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skinType'}]}],
      description: 'The skin types this product is suitable for.',
    },
    {
      name: 'ageGroups',
      title: 'Age Groups',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'ageGroup'}]}],
      description: 'The age groups this product is suitable for.',
    },
    {
      name: 'purposes',
      title: 'Purposes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'purpose'}]}],
      description: 'The purposes of the product.',
    },
  ],
}
