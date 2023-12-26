import {
  apiVersion,
  dataset,
  projectId,
  studioUrl,
  useCdn,
} from 'lib/sanity.api'
import {
  indexQuery,
  type Post,

  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'
// Schema types
import {
  Physiotherapist,
  Education,
  WorkExperience,
  License,
  ConditionCategory,
  Condition,
  TherapyMethod,
  TherapyProgram,
  Exercise
} from './sanity.queries'

// Queries
import {
  physiotherapistsQuery,
  physiotherapistBySlugQuery,
  educationQuery,
  workExperienceQuery,
  licensesQuery,
  conditionCategoryQuery,
  conditionCategoryBySlugQuery,
  conditionsQuery,
  conditionBySlugQuery,
  therapyMethodsQuery,
  therapyProgramsQuery,
  exercisesQuery,
  exerciseBySlugQuery
} from './sanity.queries'

import { createClient, type SanityClient } from 'next-sanity'

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
    encodeSourceMap: preview?.token ? true : false,
    studioUrl,
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}

export const getSanityImageConfig = () => getClient()

export async function getSettings(client: SanityClient): Promise<Settings> {
  return (await client.fetch(settingsQuery)) || {}
}

export async function getAllPosts(client: SanityClient): Promise<Post[]> {
  return (await client.fetch(indexQuery)) || []
}



// Get all physiotherapists
export async function getAllPhysiotherapists(client: SanityClient) {
  return await client.fetch(physiotherapistsQuery);
}

// Get a single physiotherapist by slug
export async function getPhysiotherapistBySlug(client: SanityClient, slug: string) {
  return await client.fetch(physiotherapistBySlugQuery, {slug}); 
}

// Get all education documents
export async function getAllEducation(client: SanityClient) {
  return await client.fetch(educationQuery);
}

// Get all work experience documents
export async function getAllWorkExperience(client: SanityClient) {
  return await client.fetch(workExperienceQuery);
}

// Get all licenses 
export async function getAllLicenses(client: SanityClient) {
  return await client.fetch(licensesQuery);
}

// Get all condition categories
export async function getAllconditionCategory(client: SanityClient) {
  return await client.fetch(conditionCategoryQuery);
}

// Get a single condition category by slug
export async function getConditionCategoryBySlug(client: SanityClient, slug: string) {
  return await client.fetch(conditionCategoryBySlugQuery, {slug});
}

// Get all conditions
export async function getAllConditions(client: SanityClient) {
  return await client.fetch(conditionsQuery); 
}

// Get a single condition by slug
export async function getConditionBySlug(client: SanityClient, slug: string) {
  return await client.fetch(conditionBySlugQuery, {slug});
} 

// Get all therapy methods
export async function getAllTherapyMethods(client: SanityClient) {
  return await client.fetch(therapyMethodsQuery);
}

// Get all therapy programs
export async function getAllTherapyPrograms(client: SanityClient) {
  return await client.fetch(therapyProgramsQuery);
}

// Get all exercises 
export async function getAllExercises(client: SanityClient) {
  return await client.fetch(exercisesQuery);
}

// Get a single exercise by slug
export async function getExerciseBySlug(client: SanityClient, slug: string) {
  return await client.fetch(exerciseBySlugQuery, {slug});
}
