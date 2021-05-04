export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: Record<string, unknown>
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: Record<string, unknown>
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: string
}

export type CreatePetInput = {
  name: Scalars['String']
  species: Scalars['String']
}

export type Pet = {
  __typename?: 'Pet'
  id: Scalars['Int']
  name: Scalars['String']
  species: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  redwood?: Maybe<Redwood>
  pets: Array<Pet>
}

export type Redwood = {
  __typename?: 'Redwood'
  version?: Maybe<Scalars['String']>
  currentUser?: Maybe<Scalars['JSON']>
  prismaVersion?: Maybe<Scalars['String']>
}

export type UpdatePetInput = {
  name?: Maybe<Scalars['String']>
  species?: Maybe<Scalars['String']>
}

export type PetQueryQueryVariables = Exact<{ [key: string]: never }>

export type PetQueryQuery = { __typename?: 'Query' } & {
  pets: Array<{ __typename?: 'Pet' } & Pick<Pet, 'id'>>
}
