/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nmutation UpdateEgitimTable($prmEgitimTable: Modum_public_EgitimTableInput!) {\n  updateEgitimTable(prmEgitimTable: $prmEgitimTable)\n}\n": types.UpdateEgitimTableDocument,
    "\nmutation InsertEgitimTable($prmEgitim: Modum_public_EgitimTableInput!) {\n  insertEgitimTable(prmEgitim: $prmEgitim)\n}\n": types.InsertEgitimTableDocument,
    "\nmutation DeleteEgitimTable($prmId:Long!){\n  deleteEgitimTable(prmId: $prmId)\n}\n": types.DeleteEgitimTableDocument,
    "\n query GetEgitim {\n  egitimData {\n    id\n    desc\n  }\n}\n": types.GetEgitimDocument,
    "\n  query GetWelcome {\n    welcome\n  }\n": types.GetWelcomeDocument,
    "\n  query GetUsers {\n    users {\n      id\n      userdesc\n    }\n  }\n": types.GetUsersDocument,
    "\n  query GetUsersById($prmId: Long!) {\n    users(where: { id: { eq: $prmId } }) {\n      id\n      userdesc\n    }\n  }\n": types.GetUsersByIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UpdateEgitimTable($prmEgitimTable: Modum_public_EgitimTableInput!) {\n  updateEgitimTable(prmEgitimTable: $prmEgitimTable)\n}\n"): (typeof documents)["\nmutation UpdateEgitimTable($prmEgitimTable: Modum_public_EgitimTableInput!) {\n  updateEgitimTable(prmEgitimTable: $prmEgitimTable)\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation InsertEgitimTable($prmEgitim: Modum_public_EgitimTableInput!) {\n  insertEgitimTable(prmEgitim: $prmEgitim)\n}\n"): (typeof documents)["\nmutation InsertEgitimTable($prmEgitim: Modum_public_EgitimTableInput!) {\n  insertEgitimTable(prmEgitim: $prmEgitim)\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation DeleteEgitimTable($prmId:Long!){\n  deleteEgitimTable(prmId: $prmId)\n}\n"): (typeof documents)["\nmutation DeleteEgitimTable($prmId:Long!){\n  deleteEgitimTable(prmId: $prmId)\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n query GetEgitim {\n  egitimData {\n    id\n    desc\n  }\n}\n"): (typeof documents)["\n query GetEgitim {\n  egitimData {\n    id\n    desc\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetWelcome {\n    welcome\n  }\n"): (typeof documents)["\n  query GetWelcome {\n    welcome\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUsers {\n    users {\n      id\n      userdesc\n    }\n  }\n"): (typeof documents)["\n  query GetUsers {\n    users {\n      id\n      userdesc\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUsersById($prmId: Long!) {\n    users(where: { id: { eq: $prmId } }) {\n      id\n      userdesc\n    }\n  }\n"): (typeof documents)["\n  query GetUsersById($prmId: Long!) {\n    users(where: { id: { eq: $prmId } }) {\n      id\n      userdesc\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;