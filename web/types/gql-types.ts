export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: Record<string, unknown>;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: Record<string, unknown>;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: string;
};

export type CreateMemberInput = {
  role: Scalars['String'];
  teamId: Scalars['String'];
  userId: Scalars['Int'];
};

export type CreatePetInput = {
  name: Scalars['String'];
  species: Scalars['String'];
};

export type CreateTeamInput = {
  name: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};





export type Member = {
  __typename?: 'Member';
  id: Scalars['String'];
  role: Scalars['String'];
  team: Team;
  teamId: Scalars['String'];
  user: User;
  userId: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTeam: Team;
  updateTeam: Team;
  deleteTeam: Team;
};


export type MutationCreateTeamArgs = {
  input: CreateTeamInput;
};


export type MutationUpdateTeamArgs = {
  id: Scalars['String'];
  input: UpdateTeamInput;
};


export type MutationDeleteTeamArgs = {
  id: Scalars['String'];
};

export type Pet = {
  __typename?: 'Pet';
  id: Scalars['Int'];
  name: Scalars['String'];
  species: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  redwood?: Maybe<Redwood>;
  members: Array<Member>;
  member?: Maybe<Member>;
  pets: Array<Pet>;
  teams: Array<Team>;
  team?: Maybe<Team>;
  users: Array<User>;
};


export type QueryMemberArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryTeamArgs = {
  id: Scalars['String'];
};

export type Redwood = {
  __typename?: 'Redwood';
  version?: Maybe<Scalars['String']>;
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['String'];
  name: Scalars['String'];
  Member: Array<Maybe<Member>>;
};


export type UpdateMemberInput = {
  role?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UpdatePetInput = {
  name?: Maybe<Scalars['String']>;
  species?: Maybe<Scalars['String']>;
};

export type UpdateTeamInput = {
  name?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  Member: Array<Maybe<Member>>;
};

export type Find_Team_By_IdVariables = Exact<{
  id: Scalars['String'];
}>;


export type Find_Team_By_Id = (
  { __typename?: 'Query' }
  & { team?: Maybe<(
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'name'>
  )> }
);

export type UpdateTeamMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateTeamInput;
}>;


export type UpdateTeamMutation = (
  { __typename?: 'Mutation' }
  & { updateTeam: (
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'name'>
  ) }
);

export type PetQueryTwoVariables = Exact<{ [key: string]: never; }>;


export type PetQueryTwo = (
  { __typename?: 'Query' }
  & { pets: Array<(
    { __typename?: 'Pet' }
    & Pick<Pet, 'id' | 'name'>
  )> }
);

export type FindMemberQuery2Variables = Exact<{
  id: Scalars['String'];
}>;


export type FindMemberQuery2 = (
  { __typename?: 'Query' }
  & { member?: Maybe<(
    { __typename?: 'Member' }
    & Pick<Member, 'id'>
  )> }
);

export type MembersQueryVariables = Exact<{ [key: string]: never; }>;


export type MembersQuery = (
  { __typename?: 'Query' }
  & { members: Array<(
    { __typename?: 'Member' }
    & Pick<Member, 'id'>
  )> }
);

export type CreateTeamMutationVariables = Exact<{
  input: CreateTeamInput;
}>;


export type CreateTeamMutation = (
  { __typename?: 'Mutation' }
  & { createTeam: (
    { __typename?: 'Team' }
    & Pick<Team, 'id'>
  ) }
);

export type PetsQueryVariables = Exact<{ [key: string]: never; }>;


export type PetsQuery = (
  { __typename?: 'Query' }
  & { pets: Array<(
    { __typename?: 'Pet' }
    & Pick<Pet, 'id'>
  )> }
);

export type DeleteTeamMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteTeamMutation = (
  { __typename?: 'Mutation' }
  & { deleteTeam: (
    { __typename?: 'Team' }
    & Pick<Team, 'id'>
  ) }
);

export type TeamsVariables = Exact<{ [key: string]: never; }>;


export type Teams = (
  { __typename?: 'Query' }
  & { teams: Array<(
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'name'>
  )> }
);
