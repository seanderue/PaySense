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
      is_sorted
      iso_currency_code
      budgetID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        is_sorted
        iso_currency_code
        budgetID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        is_sorted
        iso_currency_code
        budgetID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSavingGoal = /* GraphQL */ `
  query GetSavingGoal($id: ID!) {
    getSavingGoal(id: $id) {
      id
      name
      percent_of_income
      date_created
      date_affordable
      is_paused
      pause_duration_hour
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listSavingGoals = /* GraphQL */ `
  query ListSavingGoals(
    $filter: ModelSavingGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSavingGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        percent_of_income
        date_created
        date_affordable
        is_paused
        pause_duration_hour
        userID
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
export const syncSavingGoals = /* GraphQL */ `
  query SyncSavingGoals(
    $filter: ModelSavingGoalFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSavingGoals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        percent_of_income
        date_created
        date_affordable
        is_paused
        pause_duration_hour
        userID
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      Budgets {
        items {
          id
          name
          percent_of_income
          date_created
          date_affordable
          is_paused
          pause_duration_hour
          userID
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
      email
      income_distribution
      is_premium
      img
      promo_code
      SavingGoals {
        items {
          id
          name
          percent_of_income
          date_created
          date_affordable
          is_paused
          pause_duration_hour
          userID
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        Budgets {
          nextToken
          startedAt
        }
        email
        income_distribution
        is_premium
        img
        promo_code
        SavingGoals {
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
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        Budgets {
          nextToken
          startedAt
        }
        email
        income_distribution
        is_premium
        img
        promo_code
        SavingGoals {
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
export const getBudget = /* GraphQL */ `
  query GetBudget($id: ID!) {
    getBudget(id: $id) {
      id
      name
      percent_of_income
      balance
      img
      userID
      category
      Transactions {
        items {
          id
          name
          amount
          date
          memo
          is_sorted
          iso_currency_code
          budgetID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
export const listBudgets = /* GraphQL */ `
  query ListBudgets(
    $filter: ModelBudgetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBudgets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        percent_of_income
        balance
        img
        userID
        category
        Transactions {
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
export const syncBudgets = /* GraphQL */ `
  query SyncBudgets(
    $filter: ModelBudgetFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBudgets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        percent_of_income
        balance
        img
        userID
        category
        Transactions {
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
