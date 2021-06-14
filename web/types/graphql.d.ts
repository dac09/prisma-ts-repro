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
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
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
  member?: Maybe<Member>;
  members: Array<Member>;
  pets: Array<Pet>;
  redwood?: Maybe<Redwood>;
  team?: Maybe<Team>;
  teams: Array<Team>;
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

export type FindTeamQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindTeamQuery = (
  { __typename?: 'Query' }
  & { team?: Maybe<(
    { __typename?: 'Team' }
    & Pick<Team, 'id'>
  )> }
);

export type TeamsVariables = Exact<{ [key: string]: never; }>;


export type Teams = (
  { __typename?: 'Query' }
  & { teams: Array<(
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'name'>
  )> }
);
