/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFundRule = /* GraphQL */ `
  mutation CreateFundRule(
    $input: CreateFundRuleInput!
    $condition: ModelFundRuleConditionInput
  ) {
    createFundRule(input: $input, condition: $condition) {
      id
      name
      description
      fundoptionsID
      createdAt
      updatedAt
    }
  }
`;
export const updateFundRule = /* GraphQL */ `
  mutation UpdateFundRule(
    $input: UpdateFundRuleInput!
    $condition: ModelFundRuleConditionInput
  ) {
    updateFundRule(input: $input, condition: $condition) {
      id
      name
      description
      fundoptionsID
      createdAt
      updatedAt
    }
  }
`;
export const deleteFundRule = /* GraphQL */ `
  mutation DeleteFundRule(
    $input: DeleteFundRuleInput!
    $condition: ModelFundRuleConditionInput
  ) {
    deleteFundRule(input: $input, condition: $condition) {
      id
      name
      description
      fundoptionsID
      createdAt
      updatedAt
    }
  }
`;
export const createFund = /* GraphQL */ `
  mutation CreateFund(
    $input: CreateFundInput!
    $condition: ModelFundConditionInput
  ) {
    createFund(input: $input, condition: $condition) {
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
export const updateFund = /* GraphQL */ `
  mutation UpdateFund(
    $input: UpdateFundInput!
    $condition: ModelFundConditionInput
  ) {
    updateFund(input: $input, condition: $condition) {
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
export const deleteFund = /* GraphQL */ `
  mutation DeleteFund(
    $input: DeleteFundInput!
    $condition: ModelFundConditionInput
  ) {
    deleteFund(input: $input, condition: $condition) {
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
export const createFundOptions = /* GraphQL */ `
  mutation CreateFundOptions(
    $input: CreateFundOptionsInput!
    $condition: ModelFundOptionsConditionInput
  ) {
    createFundOptions(input: $input, condition: $condition) {
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
export const updateFundOptions = /* GraphQL */ `
  mutation UpdateFundOptions(
    $input: UpdateFundOptionsInput!
    $condition: ModelFundOptionsConditionInput
  ) {
    updateFundOptions(input: $input, condition: $condition) {
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
export const deleteFundOptions = /* GraphQL */ `
  mutation DeleteFundOptions(
    $input: DeleteFundOptionsInput!
    $condition: ModelFundOptionsConditionInput
  ) {
    deleteFundOptions(input: $input, condition: $condition) {
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
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
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
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
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
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
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
