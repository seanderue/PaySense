/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction {
    onCreateTransaction {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
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
export const onCreateSavingGoal = /* GraphQL */ `
  subscription OnCreateSavingGoal($owner: String) {
    onCreateSavingGoal(owner: $owner) {
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
export const onUpdateSavingGoal = /* GraphQL */ `
  subscription OnUpdateSavingGoal($owner: String) {
    onUpdateSavingGoal(owner: $owner) {
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
export const onDeleteSavingGoal = /* GraphQL */ `
  subscription OnDeleteSavingGoal($owner: String) {
    onDeleteSavingGoal(owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateBudget = /* GraphQL */ `
  subscription OnCreateBudget($owner: String) {
    onCreateBudget(owner: $owner) {
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
export const onUpdateBudget = /* GraphQL */ `
  subscription OnUpdateBudget($owner: String) {
    onUpdateBudget(owner: $owner) {
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
export const onDeleteBudget = /* GraphQL */ `
  subscription OnDeleteBudget($owner: String) {
    onDeleteBudget(owner: $owner) {
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
