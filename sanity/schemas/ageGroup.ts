import {SchemaTypeDefinition} from 'sanity'

export const AgeGroupSchema: SchemaTypeDefinition = {
  name: 'ageGroup',
  title: 'Age Group',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The age group for the product, e.g., Teens, Kids, Adults.',
    },
  ],
}
