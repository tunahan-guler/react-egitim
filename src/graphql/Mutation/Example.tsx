import { gql } from "../../__generated__/gql";


export const UPDATE = gql(/* GraphQL */ `
mutation UpdateEgitimTable($prmEgitimTable: Modum_public_EgitimTableInput!) {
  updateEgitimTable(prmEgitimTable: $prmEgitimTable)
}
`);

export const INSERT = gql(/* GraphQL */ `
mutation InsertEgitimTable($prmEgitim: Modum_public_EgitimTableInput!) {
  insertEgitimTable(prmEgitim: $prmEgitim)
}
`);

export const DELETE = gql(/* GraphQL */ `
mutation DeleteEgitimTable($prmId:Long!){
  deleteEgitimTable(prmId: $prmId)
}
`);