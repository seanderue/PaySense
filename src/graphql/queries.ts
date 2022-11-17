/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFundRule = /* GraphQL */ `
  query GetFundRule($id: ID!) {
    getFundRule(id: $id) {
      id
      name
      description
      fundoptionsID
      createdAt
      updatedAt
    }
  }
`;
export const listFundRules = /* GraphQL */ `
  query ListFundRules(
    $filter: ModelFundRuleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFundRules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        fundoptionsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFund = /* GraphQL */ `
  query GetFund($id: ID!) {
    getFund(id: $id) {
      id
      title
      icon
      fund_balance
      total_fund_size
      placement_index
      type
      FundOptions {
        id
        monthly_allocation
        is_paused
        pause_duration_hours
        categories
        FundRules {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      Transactions {
        items {
          id
          name
          amount
          date
          memo
          iso_currency_code
          fundID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      fundFundOptionsId
      owner
    }
  }
`;
export const listFunds = /* GraphQL */ `
  query ListFunds(
    $filter: ModelFundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFunds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        icon
        fund_balance
        total_fund_size
        placement_index
        type
        FundOptions {
          id
          monthly_allocation
          is_paused
          pause_duration_hours
          categories
          createdAt
          updatedAt
          owner
        }
        Transactions {
          nextToken
        }
        createdAt
        updatedAt
        fundFundOptionsId
        owner
      }
      nextToken
    }
  }
`;
export const byPlacementIndex = /* GraphQL */ `
  query ByPlacementIndex(
    $type: FundTypes!
    $placement_index: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byPlacementIndex(
      type: $type
      placement_index: $placement_index
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        icon
        fund_balance
        total_fund_size
        placement_index
        type
        FundOptions {
          id
          monthly_allocation
          is_paused
          pause_duration_hours
          categories
          createdAt
          updatedAt
          owner
        }
        Transactions {
          nextToken
        }
        createdAt
        updatedAt
        fundFundOptionsId
        owner
      }
      nextToken
    }
  }
`;
export const getFundOptions = /* GraphQL */ `
  query GetFundOptions($id: ID!) {
    getFundOptions(id: $id) {
      id
      monthly_allocation
      is_paused
      pause_duration_hours
      categories
      FundRules {
        items {
          id
          name
          description
          fundoptionsID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listFundOptions = /* GraphQL */ `
  query ListFundOptions(
    $filter: ModelFundOptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFundOptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        monthly_allocation
        is_paused
        pause_duration_hours
        categories
        FundRules {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      id
      name
      amount
      date
      memo
      iso_currency_code
      fundID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        amount
        date
        memo
        iso_currency_code
        fundID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
