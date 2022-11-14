/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
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
  }
`;
export const syncTransactions = /* GraphQL */ `
  query SyncTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getBalanceOptions = /* GraphQL */ `
  query GetBalanceOptions($id: ID!) {
    getBalanceOptions(id: $id) {
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
export const listBalanceOptions = /* GraphQL */ `
  query ListBalanceOptions(
    $filter: ModelBalanceOptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBalanceOptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBalanceOptions = /* GraphQL */ `
  query SyncBalanceOptions(
    $filter: ModelBalanceOptionsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBalanceOptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBalanceRule = /* GraphQL */ `
  query GetBalanceRule($id: ID!) {
    getBalanceRule(id: $id) {
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
export const listBalanceRules = /* GraphQL */ `
  query ListBalanceRules(
    $filter: ModelBalanceRuleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBalanceRules(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncBalanceRules = /* GraphQL */ `
  query SyncBalanceRules(
    $filter: ModelBalanceRuleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBalanceRules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getBalance = /* GraphQL */ `
  query GetBalance($id: ID!) {
    getBalance(id: $id) {
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
export const listBalances = /* GraphQL */ `
  query ListBalances(
    $filter: ModelBalanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBalances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Transactions {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBalances = /* GraphQL */ `
  query SyncBalances(
    $filter: ModelBalanceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBalances(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Transactions {
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
      nextToken
      startedAt
    }
  }
`;
export const byPlacementIndex = /* GraphQL */ `
  query ByPlacementIndex(
    $type: BalanceTypes!
    $placement_index: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBalanceFilterInput
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
        BalanceOptions {
          id
          monthly_allocation
          is_paused
          pause_duration_hours
          category
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Transactions {
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
      nextToken
      startedAt
    }
  }
`;
