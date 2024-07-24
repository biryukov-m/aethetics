import {SchemaTypeDefinition} from 'sanity'

export const SkinTypeSchema: SchemaTypeDefinition = {
  name: 'skinType',
  title: 'Тип шкіри',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the skin type, e.g., Normal, Oily, Dry.',
    },
  ],
}
