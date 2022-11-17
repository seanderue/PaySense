/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFundRule = /* GraphQL */ `
  subscription OnCreateFundRule($filter: ModelSubscriptionFundRuleFilterInput) {
    onCreateFundRule(filter: $filter) {
      id
      name
      description
      fundoptionsID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFundRule = /* GraphQL */ `
  subscription OnUpdateFundRule($filter: ModelSubscriptionFundRuleFilterInput) {
    onUpdateFundRule(filter: $filter) {
      id
      name
      description
      fundoptionsID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFundRule = /* GraphQL */ `
  subscription OnDeleteFundRule($filter: ModelSubscriptionFundRuleFilterInput) {
    onDeleteFundRule(filter: $filter) {
      id
      name
      description
      fundoptionsID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFund = /* GraphQL */ `
  subscription OnCreateFund(
    $filter: ModelSubscriptionFundFilterInput
    $owner: String
  ) {
    onCreateFund(filter: $filter, owner: $owner) {
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
export const onUpdateFund = /* GraphQL */ `
  subscription OnUpdateFund(
    $filter: ModelSubscriptionFundFilterInput
    $owner: String
  ) {
    onUpdateFund(filter: $filter, owner: $owner) {
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
export const onDeleteFund = /* GraphQL */ `
  subscription OnDeleteFund(
    $filter: ModelSubscriptionFundFilterInput
    $owner: String
  ) {
    onDeleteFund(filter: $filter, owner: $owner) {
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
export const onCreateFundOptions = /* GraphQL */ `
  subscription OnCreateFundOptions(
    $filter: ModelSubscriptionFundOptionsFilterInput
    $owner: String
  ) {
    onCreateFundOptions(filter: $filter, owner: $owner) {
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
export const onUpdateFundOptions = /* GraphQL */ `
  subscription OnUpdateFundOptions(
    $filter: ModelSubscriptionFundOptionsFilterInput
    $owner: String
  ) {
    onUpdateFundOptions(filter: $filter, owner: $owner) {
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
export const onDeleteFundOptions = /* GraphQL */ `
  subscription OnDeleteFundOptions(
    $filter: ModelSubscriptionFundOptionsFilterInput
    $owner: String
  ) {
    onDeleteFundOptions(filter: $filter, owner: $owner) {
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
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
    $owner: String
  ) {
    onCreateTransaction(filter: $filter, owner: $owner) {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
    $owner: String
  ) {
    onUpdateTransaction(filter: $filter, owner: $owner) {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
    $owner: String
  ) {
    onDeleteTransaction(filter: $filter, owner: $owner) {
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
