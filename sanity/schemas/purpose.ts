import {SchemaTypeDefinition} from 'sanity'

export const PurposeSchema: SchemaTypeDefinition = {
  name: 'purpose',
  title: 'Призначення',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The purpose of the product, e.g., Hydration, Cleansing, Anti-aging.',
    },
  ],
}
