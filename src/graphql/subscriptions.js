/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee($owner: String!) {
    onCreateEmployee(owner: $owner) {
      id
      firstname
      lastname
      skills {
        id
        name
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee($owner: String!) {
    onUpdateEmployee(owner: $owner) {
      id
      firstname
      lastname
      skills {
        id
        name
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee($owner: String!) {
    onDeleteEmployee(owner: $owner) {
      id
      firstname
      lastname
      skills {
        id
        name
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
