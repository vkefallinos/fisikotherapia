import { groq } from 'next-sanity'

export interface Author {
  name?: string
  picture?: any
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  _updatedAt?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
}

export const settingsQuery = groq`*[_type == "settings"][0]`
export const physiotherapistPreviewQuery = groq`
*[_type == "physiotherapist"] {
      _id, 
    name,
    email,
    phone,
    slug
  }`
export const conditionCategoryPreviewQuery = groq`
*[_type == "conditionCategory"] {
  _id,
  name,
  description,
  slug
}`

export const therapyMethodsPreviewQuery = groq`
*[_type == "therapyMethod"] {
  _id,
  name,
  description,
  slug
}`
export const indexQuery = groq`
{
  "physiotherapists": ${physiotherapistPreviewQuery},
  "conditionCategories": ${conditionCategoryPreviewQuery},
  "therapyMethods": ${therapyMethodsPreviewQuery}
}

`


export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}

// Existing imports and queries

// Physiotherapist
export interface Physiotherapist {
  _id: string
  _type: 'physiotherapist'
  name: string
  email: string
  phone: string
  education: Education[]
  workExperience: WorkExperience[]
  skills?: TherapyMethod[]
  conditions?: Condition[]
  licenses: License[]
  slug: string
}

export const physiotherapistsQuery = groq`
  *[_type == 'physiotherapist'] {
    _id, 
    name,
    email,
    phone,
    education[] {
      _id,
      institution,
      area,
      startDate,
      endDate,
      grade
    },
    workExperience[] {
      _id,
      company,
      position,
      startDate,
      endDate
    },
    skills,
    licenses[] {
      _id,
      licenseType,
      licensingBody,
      licenseNumber,
      issueDate,
      expiryDate
    },
    slug
  }
`

// export const postBySlugQuery = groq`
// *[_type == "post" && slug.current == $slug][0] {
//   ${postFields}
// }
// `
export const physiotherapistBySlugQuery = groq`
*[_type == 'physiotherapist' && slug.current == $slug][0] {
  _id,
  name,
  email,
  phone,
  education[] {
    _id,
    institution,
    area,
    startDate,
    endDate,
    grade
  },
  workExperience[] {
    _id,
    company,
    position,
    startDate,
    endDate
  },
  skills,
  licenses[] {
    _id,
    licenseType,
    licensingBody,
    licenseNumber,
    issueDate,
    expiryDate
  },
  slug
}
`;

// Education
export interface Education {
  _id: string
  _type: 'education'
  institution: string
  area: string
  startDate: string
  endDate: string
  grade: string
}

// Work Experience
export interface WorkExperience {
  _id: string
  _type: 'workExperience'
  company: string
  position: string
  startDate: string
  endDate: string
}

// License
export interface License {
  _id: string
  _type: 'license'
  licenseType: string
  licensingBody: string
  licenseNumber: string
  issueDate: string
  expiryDate: string
}

// Condition Categories
export interface ConditionCategory {
  _id: string
  _type: 'conditionCategory'
  name?: string
  description?: string
  article?: string
  conditions?: Condition[]
  slug?: string
}

export const conditionCategoryQuery = groq`
  *[_type == 'conditionCategory'] {
    _id,
    name,
    description,
    conditions[] {
      _id,
      name  
    },
    slug
  }
`

// Condition
export interface Condition {
  _id: string
  _type: 'condition'
  name?: string
  description?: string
  article?: string
  categories?: ConditionCategory[]
  slug?: string
}

// Therapy Methods
export interface TherapyMethod {
  _id: string
  _type: 'therapyMethod'
  name: string
  description: string
  article?: string
  conditions?: Condition[]
}

// Therapy Programs
export interface TherapyProgram {
  _id: string
  _type: 'therapyProgram'
  name: string
  description: string
  article: string
  conditions: Condition[]
}

// Exercise
export interface Exercise {
  _id: string
  _type: 'exercise'
  name: string
  description: string
  article: string
  conditions: Condition[]
}

// Additional queries...
// Condition
export const conditionsQuery = groq`
  *[_type == 'condition'] {
    _id,
    name,
    description,
    article,
    categories[] {
      _id,
      name
    },
    slug
  }
`

export const conditionBySlugQuery = groq`
  *[_type == 'condition' && slug.current == $slug][0] {
    _id,
    name,
    description,
    article,
    categories[] {
      _id,
      name
    },
    slug
  }
`

// Therapy Methods
export const therapyMethodsQuery = groq`
  *[_type == 'therapyMethods'] {
    _id,
    name,
    description,
    article,
    conditions[] {
      _id,
      name
    }
  }
`

// Therapy Programs
export const therapyProgramsQuery = groq`
  *[_type == 'therapyPrograms'] {
    _id,
    name, 
    description,
    article,
    conditions[] {
      _id,
      name  
    }
  }
`

// Exercises
export const exercisesQuery = groq`
  *[_type == 'exercise'] {
    _id,
    name,
    description,
    article,
    conditions[] {
      _id,
      name
    }
  }
`

// Query to get a single exercise by slug
export const exerciseBySlugQuery = groq`
  *[_type == 'exercise' && slug.current == $slug][0] {
    _id,
    name,
    description,
    article,
    conditions[] {
      _id,
      name
    }
  }
`

// Query to get all education documents
export const educationQuery = groq`
  *[_type == 'education'] {
    _id,
    institution,
    area,
    startDate,
    endDate,
    grade
  }
`

// Query to get all work experience documents
export const workExperienceQuery = groq`
  *[_type == 'workExperience'] {
    _id,
    company,
    position,
    startDate,
    endDate
  }   
`

// Query to get all licenses
export const licensesQuery = groq`
  *[_type == 'license'] {
    _id,
    licenseType,
    licensingBody,
    licenseNumber,
    issueDate,
    expiryDate
  }
`

// Query to get a single condition category by slug
export const conditionCategoryBySlugQuery = groq`
  *[_type == 'conditionCategory' && slug.current == $slug][0] {
    _id,
    name,
    description,
    conditions[] {
      _id,
      name
    }
  }
`
