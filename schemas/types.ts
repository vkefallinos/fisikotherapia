import { UserIcon } from '@sanity/icons'
import { groq } from 'next-sanity'

import { defineField, defineType } from 'sanity'


export const physiotherapist = defineType({
  name: 'physiotherapist',
  title: 'Physiotherapist',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email'
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string'
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'education' } }]
    }),
    defineField({
      name: 'workExperience',
      title: 'Work Experience',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'workExperience' } }]
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'reference', to: { type:'therapyMethod' } }]
    }),
    defineField({
      name: 'conditions',
      title: 'Conditions',
      type: 'array',
      of: [{ type: 'reference', to: { type:'conditionCategory' } }]
    }),
    defineField({
      name: 'licenses',
      title: 'Licenses & Certifications',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'license' } }]
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    })
  ]
})


export const education = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'institution',
      title: 'Institution',
      type: 'string'
    }),
    defineField({
      name: 'area',
      title: 'Area of Study',
      type: 'string'
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date'
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date'
    }),
    defineField({
      name: 'grade',
      title: 'Grade',
      type: 'string'
    })
  ]
})


export const workExperience = defineType({
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string'
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string'
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date'
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date'
    })
  ]
})

export const license = defineType({
  name: 'license',
  title: 'License',
  type: 'document',
  fields: [
    defineField({
      name: 'licenseType',
      title: 'License Type',
      type: 'string'
    }),
    defineField({
      name: 'licensingBody',
      title: 'Licensing Body',
      type: 'string'
    }),
    defineField({
      name: 'licenseNumber',
      title: 'License Number',
      type: 'string'
    }),
    defineField({
      name: 'issueDate',
      title: 'Issue Date',
      type: 'date'
    }),
    defineField({
      name: 'expiryDate',
      title: 'Expiry Date',
      type: 'date'
    })
  ]
})

// Other types...
// Condition Categories
export const conditionCategory = defineType({
  name: 'conditionCategory',
  title: 'Condition Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string'
    }),
    defineField({
      name: 'conditions',
      title: 'Conditions',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'condition' } }]
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    })
  ]
})

// Condition
export const condition = defineType({
  name: 'condition',
  title: 'Condition',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string'
    }),
    defineField({
      name: 'article',
      title: 'Article',
      type: 'string'
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'conditionCategory' } }]
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    })
  ]
})

// Therapy Methods
export const therapyMethods = defineType({
  name: 'therapyMethods',
  title: 'Therapy Methods',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string'
    }),
    defineField({
      name: 'article',
      title: 'Article',
      type: 'string'
    }),
    defineField({
      name: 'conditions',
      title: 'Conditions',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'condition' } }]
    })
  ]
})

// Therapy Programs
export const therapyPrograms = defineType({
  name: 'therapyPrograms',
  title: 'Therapy Programs',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string'
    }),
    defineField({
      name: 'article',
      title: 'Article',
      type: 'string'
    }),
    defineField({
      name: 'conditions',
      title: 'Conditions',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'condition' } }]
    })
  ]
})

// Exercise
export const exercise = defineType({
  name: 'exercise',
  title: 'Exercise',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string'
    }),
    defineField({
      name: 'article',
      title: 'Article',
      type: 'string'
    }),
    defineField({
      name: 'conditions',
      title: 'Conditions',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'condition' } }]
    })
  ]
})
