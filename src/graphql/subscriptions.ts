/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateBalanceOptions = /* GraphQL */ `
  subscription OnCreateBalanceOptions(
    $filter: ModelSubscriptionBalanceOptionsFilterInput
    $owner: String
  ) {
    onCreateBalanceOptions(filter: $filter, owner: $owner) {
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
export const onUpdateBalanceOptions = /* GraphQL */ `
  subscription OnUpdateBalanceOptions(
    $filter: ModelSubscriptionBalanceOptionsFilterInput
    $owner: String
  ) {
    onUpdateBalanceOptions(filter: $filter, owner: $owner) {
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
export const onDeleteBalanceOptions = /* GraphQL */ `
  subscription OnDeleteBalanceOptions(
    $filter: ModelSubscriptionBalanceOptionsFilterInput
    $owner: String
  ) {
    onDeleteBalanceOptions(filter: $filter, owner: $owner) {
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
export const onCreateBalanceRule = /* GraphQL */ `
  subscription OnCreateBalanceRule(
    $filter: ModelSubscriptionBalanceRuleFilterInput
    $owner: String
  ) {
    onCreateBalanceRule(filter: $filter, owner: $owner) {
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
export const onUpdateBalanceRule = /* GraphQL */ `
  subscription OnUpdateBalanceRule(
    $filter: ModelSubscriptionBalanceRuleFilterInput
    $owner: String
  ) {
    onUpdateBalanceRule(filter: $filter, owner: $owner) {
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
export const onDeleteBalanceRule = /* GraphQL */ `
  subscription OnDeleteBalanceRule(
    $filter: ModelSubscriptionBalanceRuleFilterInput
    $owner: String
  ) {
    onDeleteBalanceRule(filter: $filter, owner: $owner) {
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
export const onCreateBalance = /* GraphQL */ `
  subscription OnCreateBalance(
    $filter: ModelSubscriptionBalanceFilterInput
    $owner: String
  ) {
    onCreateBalance(filter: $filter, owner: $owner) {
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
export const onUpdateBalance = /* GraphQL */ `
  subscription OnUpdateBalance(
    $filter: ModelSubscriptionBalanceFilterInput
    $owner: String
  ) {
    onUpdateBalance(filter: $filter, owner: $owner) {
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
export const onDeleteBalance = /* GraphQL */ `
  subscription OnDeleteBalance(
    $filter: ModelSubscriptionBalanceFilterInput
    $owner: String
  ) {
    onDeleteBalance(filter: $filter, owner: $owner) {
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
