import { gql } from "../../__generated__/gql";

export const GET_WELCOME = gql(/* GraphQL */ `
  query GetWelcome {
    welcome
  }
`);

export const GET_USERS = gql(/* GraphQL */ `
query GetUsers{
  users {
    id
    userdesc
  }
}
`);

export const GET_USERSBYID = gql(/* GraphQL */ `
query GetUsersById($prmId: Long!) {
  users(where: { id: { eq: $prmId } }) {
    id
    userdesc
  }
}
`); 
