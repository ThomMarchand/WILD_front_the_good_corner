import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type Ad = {
  __typename?: 'Ad';
  category: Category;
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  location: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  picture: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  tags: Array<Tag>;
  title: Scalars['String']['output'];
};

export type Category = {
  __typename?: 'Category';
  ads: Array<Ad>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type CategoryInput = {
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAd: Ad;
  createCategory: Category;
  createTag: Tag;
  deleteAd: Scalars['String']['output'];
  deleteCategory: Scalars['String']['output'];
  deleteTag: Scalars['String']['output'];
  updateAd: Ad;
  updateCategory: Category;
  updateTag: Tag;
};


export type MutationCreateAdArgs = {
  data: NewAdInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateTagArgs = {
  data: NewTagCategory;
};


export type MutationDeleteAdArgs = {
  adId: Scalars['Float']['input'];
};


export type MutationDeleteCategoryArgs = {
  categoryId: Scalars['Float']['input'];
};


export type MutationDeleteTagArgs = {
  tadId: Scalars['Float']['input'];
};


export type MutationUpdateAdArgs = {
  adId: Scalars['Float']['input'];
  data?: InputMaybe<UpdateAdInput>;
};


export type MutationUpdateCategoryArgs = {
  categoryId: Scalars['Float']['input'];
  data: CategoryInput;
};


export type MutationUpdateTagArgs = {
  data: TagCategory;
  tagId: Scalars['Float']['input'];
};

export type NewAdInput = {
  category: ObjectId;
  description: Scalars['String']['input'];
  location: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  picture: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  tags?: InputMaybe<Array<ObjectId>>;
  title: Scalars['String']['input'];
};

export type NewTagCategory = {
  name: Scalars['String']['input'];
};

export type ObjectId = {
  id: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  ads: Array<Ad>;
  categories: Array<Category>;
  getAdById: Ad;
  getCategoryById: Category;
  getTagById: Tag;
  getTagByName: Array<Tag>;
};


export type QueryAdsArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  tagsId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategoriesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAdByIdArgs = {
  adId: Scalars['Int']['input'];
  isTrue?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetCategoryByIdArgs = {
  categoryId: Scalars['Float']['input'];
};


export type QueryGetTagByIdArgs = {
  tagId: Scalars['Float']['input'];
};


export type QueryGetTagByNameArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  ads: Array<Ad>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type TagCategory = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAdInput = {
  category?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  tags?: InputMaybe<Array<ObjectId>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AdDetailsQueryVariables = Exact<{
  adId: Scalars['Int']['input'];
}>;


export type AdDetailsQuery = { __typename?: 'Query', getAdById: { __typename?: 'Ad', title: string, price: number, id: number, description: string, owner: string, location: string, picture: string, tags: Array<{ __typename?: 'Tag', name: string, id: number }>, category: { __typename?: 'Category', id: number } } };

export type CategoriesQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: number, name: string }> };

export type RecentAdsQueryVariables = Exact<{ [key: string]: never; }>;


export type RecentAdsQuery = { __typename?: 'Query', ads: Array<{ __typename?: 'Ad', id: number, title: string, price: number, picture: string }> };

export type SearchAdsQueryVariables = Exact<{
  title?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchAdsQuery = { __typename?: 'Query', ads: Array<{ __typename?: 'Ad', id: number, title: string, picture: string, price: number }> };

export type TagsQueryVariables = Exact<{ [key: string]: never; }>;


export type TagsQuery = { __typename?: 'Query', getTagByName: Array<{ __typename?: 'Tag', id: number, name: string }> };

export type UpdateAdMutationVariables = Exact<{
  adId: Scalars['Float']['input'];
  data?: InputMaybe<UpdateAdInput>;
}>;


export type UpdateAdMutation = { __typename?: 'Mutation', updateAd: { __typename?: 'Ad', id: number } };

export type DeleteAdMutationMutationVariables = Exact<{
  adId: Scalars['Float']['input'];
}>;


export type DeleteAdMutationMutation = { __typename?: 'Mutation', deleteAd: string };


export const AdDetailsDocument = gql`
    query AdDetails($adId: Int!) {
  getAdById(adId: $adId) {
    title
    price
    id
    description
    owner
    location
    picture
    tags {
      name
      id
    }
    category {
      id
    }
  }
}
    `;

/**
 * __useAdDetailsQuery__
 *
 * To run a query within a React component, call `useAdDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdDetailsQuery({
 *   variables: {
 *      adId: // value for 'adId'
 *   },
 * });
 */
export function useAdDetailsQuery(baseOptions: Apollo.QueryHookOptions<AdDetailsQuery, AdDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdDetailsQuery, AdDetailsQueryVariables>(AdDetailsDocument, options);
      }
export function useAdDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdDetailsQuery, AdDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdDetailsQuery, AdDetailsQueryVariables>(AdDetailsDocument, options);
        }
export function useAdDetailsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AdDetailsQuery, AdDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdDetailsQuery, AdDetailsQueryVariables>(AdDetailsDocument, options);
        }
export type AdDetailsQueryHookResult = ReturnType<typeof useAdDetailsQuery>;
export type AdDetailsLazyQueryHookResult = ReturnType<typeof useAdDetailsLazyQuery>;
export type AdDetailsSuspenseQueryHookResult = ReturnType<typeof useAdDetailsSuspenseQuery>;
export type AdDetailsQueryResult = Apollo.QueryResult<AdDetailsQuery, AdDetailsQueryVariables>;
export const CategoriesDocument = gql`
    query Categories($name: String) {
  categories(name: $name) {
    id
    name
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export function useCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesSuspenseQueryHookResult = ReturnType<typeof useCategoriesSuspenseQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const RecentAdsDocument = gql`
    query RecentAds {
  ads {
    id
    title
    price
    picture
  }
}
    `;

/**
 * __useRecentAdsQuery__
 *
 * To run a query within a React component, call `useRecentAdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentAdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentAdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecentAdsQuery(baseOptions?: Apollo.QueryHookOptions<RecentAdsQuery, RecentAdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecentAdsQuery, RecentAdsQueryVariables>(RecentAdsDocument, options);
      }
export function useRecentAdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecentAdsQuery, RecentAdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecentAdsQuery, RecentAdsQueryVariables>(RecentAdsDocument, options);
        }
export function useRecentAdsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RecentAdsQuery, RecentAdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RecentAdsQuery, RecentAdsQueryVariables>(RecentAdsDocument, options);
        }
export type RecentAdsQueryHookResult = ReturnType<typeof useRecentAdsQuery>;
export type RecentAdsLazyQueryHookResult = ReturnType<typeof useRecentAdsLazyQuery>;
export type RecentAdsSuspenseQueryHookResult = ReturnType<typeof useRecentAdsSuspenseQuery>;
export type RecentAdsQueryResult = Apollo.QueryResult<RecentAdsQuery, RecentAdsQueryVariables>;
export const SearchAdsDocument = gql`
    query SearchAds($title: String, $categoryId: Int) {
  ads(title: $title, categoryId: $categoryId) {
    id
    title
    picture
    price
  }
}
    `;

/**
 * __useSearchAdsQuery__
 *
 * To run a query within a React component, call `useSearchAdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchAdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchAdsQuery({
 *   variables: {
 *      title: // value for 'title'
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useSearchAdsQuery(baseOptions?: Apollo.QueryHookOptions<SearchAdsQuery, SearchAdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchAdsQuery, SearchAdsQueryVariables>(SearchAdsDocument, options);
      }
export function useSearchAdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchAdsQuery, SearchAdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchAdsQuery, SearchAdsQueryVariables>(SearchAdsDocument, options);
        }
export function useSearchAdsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchAdsQuery, SearchAdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchAdsQuery, SearchAdsQueryVariables>(SearchAdsDocument, options);
        }
export type SearchAdsQueryHookResult = ReturnType<typeof useSearchAdsQuery>;
export type SearchAdsLazyQueryHookResult = ReturnType<typeof useSearchAdsLazyQuery>;
export type SearchAdsSuspenseQueryHookResult = ReturnType<typeof useSearchAdsSuspenseQuery>;
export type SearchAdsQueryResult = Apollo.QueryResult<SearchAdsQuery, SearchAdsQueryVariables>;
export const TagsDocument = gql`
    query Tags {
  getTagByName {
    id
    name
  }
}
    `;

/**
 * __useTagsQuery__
 *
 * To run a query within a React component, call `useTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTagsQuery(baseOptions?: Apollo.QueryHookOptions<TagsQuery, TagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
      }
export function useTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagsQuery, TagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
        }
export function useTagsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TagsQuery, TagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
        }
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>;
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>;
export type TagsSuspenseQueryHookResult = ReturnType<typeof useTagsSuspenseQuery>;
export type TagsQueryResult = Apollo.QueryResult<TagsQuery, TagsQueryVariables>;
export const UpdateAdDocument = gql`
    mutation UpdateAd($adId: Float!, $data: UpdateAdInput) {
  updateAd(adId: $adId, data: $data) {
    id
  }
}
    `;
export type UpdateAdMutationFn = Apollo.MutationFunction<UpdateAdMutation, UpdateAdMutationVariables>;

/**
 * __useUpdateAdMutation__
 *
 * To run a mutation, you first call `useUpdateAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdMutation, { data, loading, error }] = useUpdateAdMutation({
 *   variables: {
 *      adId: // value for 'adId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAdMutation, UpdateAdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAdMutation, UpdateAdMutationVariables>(UpdateAdDocument, options);
      }
export type UpdateAdMutationHookResult = ReturnType<typeof useUpdateAdMutation>;
export type UpdateAdMutationResult = Apollo.MutationResult<UpdateAdMutation>;
export type UpdateAdMutationOptions = Apollo.BaseMutationOptions<UpdateAdMutation, UpdateAdMutationVariables>;
export const DeleteAdMutationDocument = gql`
    mutation DeleteAdMutation($adId: Float!) {
  deleteAd(adId: $adId)
}
    `;
export type DeleteAdMutationMutationFn = Apollo.MutationFunction<DeleteAdMutationMutation, DeleteAdMutationMutationVariables>;

/**
 * __useDeleteAdMutationMutation__
 *
 * To run a mutation, you first call `useDeleteAdMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAdMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdMutationMutation, { data, loading, error }] = useDeleteAdMutationMutation({
 *   variables: {
 *      adId: // value for 'adId'
 *   },
 * });
 */
export function useDeleteAdMutationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAdMutationMutation, DeleteAdMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAdMutationMutation, DeleteAdMutationMutationVariables>(DeleteAdMutationDocument, options);
      }
export type DeleteAdMutationMutationHookResult = ReturnType<typeof useDeleteAdMutationMutation>;
export type DeleteAdMutationMutationResult = Apollo.MutationResult<DeleteAdMutationMutation>;
export type DeleteAdMutationMutationOptions = Apollo.BaseMutationOptions<DeleteAdMutationMutation, DeleteAdMutationMutationVariables>;