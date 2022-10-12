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
export const createSavingGoal = /* GraphQL */ `
  mutation CreateSavingGoal(
    $input: CreateSavingGoalInput!
    $condition: ModelSavingGoalConditionInput
  ) {
    createSavingGoal(input: $input, condition: $condition) {
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
export const updateSavingGoal = /* GraphQL */ `
  mutation UpdateSavingGoal(
    $input: UpdateSavingGoalInput!
    $condition: ModelSavingGoalConditionInput
  ) {
    updateSavingGoal(input: $input, condition: $condition) {
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
export const deleteSavingGoal = /* GraphQL */ `
  mutation DeleteSavingGoal(
    $input: DeleteSavingGoalInput!
    $condition: ModelSavingGoalConditionInput
  ) {
    deleteSavingGoal(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createBudget = /* GraphQL */ `
  mutation CreateBudget(
    $input: CreateBudgetInput!
    $condition: ModelBudgetConditionInput
  ) {
    createBudget(input: $input, condition: $condition) {
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
export const updateBudget = /* GraphQL */ `
  mutation UpdateBudget(
    $input: UpdateBudgetInput!
    $condition: ModelBudgetConditionInput
  ) {
    updateBudget(input: $input, condition: $condition) {
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
export const deleteBudget = /* GraphQL */ `
  mutation DeleteBudget(
    $input: DeleteBudgetInput!
    $condition: ModelBudgetConditionInput
  ) {
    deleteBudget(input: $input, condition: $condition) {
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
