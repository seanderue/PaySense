/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      balanceID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      balanceID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      balanceID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createBalanceOptions = /* GraphQL */ `
  mutation CreateBalanceOptions(
    $input: CreateBalanceOptionsInput!
    $condition: ModelBalanceOptionsConditionInput
  ) {
    createBalanceOptions(input: $input, condition: $condition) {
      id
      monthly_allocation
      is_paused
      pause_duration_hours
      category
      BalanceRules {
        items {
          id
          name
          description
          balance_optionsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateBalanceOptions = /* GraphQL */ `
  mutation UpdateBalanceOptions(
    $input: UpdateBalanceOptionsInput!
    $condition: ModelBalanceOptionsConditionInput
  ) {
    updateBalanceOptions(input: $input, condition: $condition) {
      id
      monthly_allocation
      is_paused
      pause_duration_hours
      category
      BalanceRules {
        items {
          id
          name
          description
          balance_optionsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteBalanceOptions = /* GraphQL */ `
  mutation DeleteBalanceOptions(
    $input: DeleteBalanceOptionsInput!
    $condition: ModelBalanceOptionsConditionInput
  ) {
    deleteBalanceOptions(input: $input, condition: $condition) {
      id
      monthly_allocation
      is_paused
      pause_duration_hours
      category
      BalanceRules {
        items {
          id
          name
          description
          balance_optionsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createBalanceRule = /* GraphQL */ `
  mutation CreateBalanceRule(
    $input: CreateBalanceRuleInput!
    $condition: ModelBalanceRuleConditionInput
  ) {
    createBalanceRule(input: $input, condition: $condition) {
      id
      name
      description
      balance_optionsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateBalanceRule = /* GraphQL */ `
  mutation UpdateBalanceRule(
    $input: UpdateBalanceRuleInput!
    $condition: ModelBalanceRuleConditionInput
  ) {
    updateBalanceRule(input: $input, condition: $condition) {
      id
      name
      description
      balance_optionsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteBalanceRule = /* GraphQL */ `
  mutation DeleteBalanceRule(
    $input: DeleteBalanceRuleInput!
    $condition: ModelBalanceRuleConditionInput
  ) {
    deleteBalanceRule(input: $input, condition: $condition) {
      id
      name
      description
      balance_optionsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createBalance = /* GraphQL */ `
  mutation CreateBalance(
    $input: CreateBalanceInput!
    $condition: ModelBalanceConditionInput
  ) {
    createBalance(input: $input, condition: $condition) {
      id
      title
      icon
      fund_balance
      total_fund_size
      placement_index
      type
      BalanceOptions {
        id
        monthly_allocation
        is_paused
        pause_duration_hours
        category
        BalanceRules {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          balanceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      balanceBalanceOptionsId
      owner
    }
  }
`;
export const updateBalance = /* GraphQL */ `
  mutation UpdateBalance(
    $input: UpdateBalanceInput!
    $condition: ModelBalanceConditionInput
  ) {
    updateBalance(input: $input, condition: $condition) {
      id
      title
      icon
      fund_balance
      total_fund_size
      placement_index
      type
      BalanceOptions {
        id
        monthly_allocation
        is_paused
        pause_duration_hours
        category
        BalanceRules {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          balanceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      balanceBalanceOptionsId
      owner
    }
  }
`;
export const deleteBalance = /* GraphQL */ `
  mutation DeleteBalance(
    $input: DeleteBalanceInput!
    $condition: ModelBalanceConditionInput
  ) {
    deleteBalance(input: $input, condition: $condition) {
      id
      title
      icon
      fund_balance
      total_fund_size
      placement_index
      type
      BalanceOptions {
        id
        monthly_allocation
        is_paused
        pause_duration_hours
        category
        BalanceRules {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          balanceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      balanceBalanceOptionsId
      owner
    }
  }
`;
