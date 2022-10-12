/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTransactionInput = {
  id?: string | null;
  name: string;
  amount: number;
  date: string;
  memo?: string | null;
  is_sorted: boolean;
  iso_currency_code: string;
  budgetID: string;
  _version?: number | null;
};

export type ModelTransactionConditionInput = {
  name?: ModelStringInput | null;
  amount?: ModelFloatInput | null;
  date?: ModelStringInput | null;
  memo?: ModelStringInput | null;
  is_sorted?: ModelBooleanInput | null;
  iso_currency_code?: ModelStringInput | null;
  budgetID?: ModelIDInput | null;
  and?: Array<ModelTransactionConditionInput | null> | null;
  or?: Array<ModelTransactionConditionInput | null> | null;
  not?: ModelTransactionConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Transaction = {
  __typename: "Transaction";
  id: string;
  name: string;
  amount: number;
  date: string;
  memo?: string | null;
  is_sorted: boolean;
  iso_currency_code: string;
  budgetID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTransactionInput = {
  id: string;
  name?: string | null;
  amount?: number | null;
  date?: string | null;
  memo?: string | null;
  is_sorted?: boolean | null;
  iso_currency_code?: string | null;
  budgetID?: string | null;
  _version?: number | null;
};

export type DeleteTransactionInput = {
  id: string;
  _version?: number | null;
};

export type CreateSavingGoalInput = {
  id?: string | null;
  name: string;
  percent_of_income: number;
  date_created: string;
  date_affordable: string;
  is_paused?: boolean | null;
  pause_duration_hour?: number | null;
  userID: string;
  _version?: number | null;
};

export type ModelSavingGoalConditionInput = {
  name?: ModelStringInput | null;
  percent_of_income?: ModelFloatInput | null;
  date_created?: ModelStringInput | null;
  date_affordable?: ModelStringInput | null;
  is_paused?: ModelBooleanInput | null;
  pause_duration_hour?: ModelIntInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelSavingGoalConditionInput | null> | null;
  or?: Array<ModelSavingGoalConditionInput | null> | null;
  not?: ModelSavingGoalConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type SavingGoal = {
  __typename: "SavingGoal";
  id: string;
  name: string;
  percent_of_income: number;
  date_created: string;
  date_affordable: string;
  is_paused?: boolean | null;
  pause_duration_hour?: number | null;
  userID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type UpdateSavingGoalInput = {
  id: string;
  name?: string | null;
  percent_of_income?: number | null;
  date_created?: string | null;
  date_affordable?: string | null;
  is_paused?: boolean | null;
  pause_duration_hour?: number | null;
  userID?: string | null;
  _version?: number | null;
};

export type DeleteSavingGoalInput = {
  id: string;
  _version?: number | null;
};

export type CreateUserInput = {
  id?: string | null;
  username: string;
  email: string;
  income_distribution: Array<string>;
  is_premium: boolean;
  img?: string | null;
  promo_code?: string | null;
  _version?: number | null;
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null;
  email?: ModelStringInput | null;
  income_distribution?: ModelStringInput | null;
  is_premium?: ModelBooleanInput | null;
  img?: ModelStringInput | null;
  promo_code?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type User = {
  __typename: "User";
  id: string;
  username: string;
  Budgets?: ModelSavingGoalConnection | null;
  email: string;
  income_distribution: Array<string>;
  is_premium: boolean;
  img?: string | null;
  promo_code?: string | null;
  SavingGoals?: ModelSavingGoalConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ModelSavingGoalConnection = {
  __typename: "ModelSavingGoalConnection";
  items: Array<SavingGoal | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type UpdateUserInput = {
  id: string;
  username?: string | null;
  email?: string | null;
  income_distribution?: Array<string> | null;
  is_premium?: boolean | null;
  img?: string | null;
  promo_code?: string | null;
  _version?: number | null;
};

export type DeleteUserInput = {
  id: string;
  _version?: number | null;
};

export type CreateBudgetInput = {
  id?: string | null;
  name: string;
  percent_of_income: number;
  balance: number;
  img?: string | null;
  userID: string;
  category?: Categories | null;
  _version?: number | null;
};

export enum Categories {
  NEED = "NEED",
  SAVE = "SAVE",
  WANT = "WANT",
}

export type ModelBudgetConditionInput = {
  name?: ModelStringInput | null;
  percent_of_income?: ModelFloatInput | null;
  balance?: ModelFloatInput | null;
  img?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  category?: ModelCategoriesInput | null;
  and?: Array<ModelBudgetConditionInput | null> | null;
  or?: Array<ModelBudgetConditionInput | null> | null;
  not?: ModelBudgetConditionInput | null;
};

export type ModelCategoriesInput = {
  eq?: Categories | null;
  ne?: Categories | null;
};

export type Budget = {
  __typename: "Budget";
  id: string;
  name: string;
  percent_of_income: number;
  balance: number;
  img?: string | null;
  userID: string;
  category?: Categories | null;
  Transactions?: ModelTransactionConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ModelTransactionConnection = {
  __typename: "ModelTransactionConnection";
  items: Array<Transaction | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type UpdateBudgetInput = {
  id: string;
  name?: string | null;
  percent_of_income?: number | null;
  balance?: number | null;
  img?: string | null;
  userID?: string | null;
  category?: Categories | null;
  _version?: number | null;
};

export type DeleteBudgetInput = {
  id: string;
  _version?: number | null;
};

export type ModelTransactionFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  amount?: ModelFloatInput | null;
  date?: ModelStringInput | null;
  memo?: ModelStringInput | null;
  is_sorted?: ModelBooleanInput | null;
  iso_currency_code?: ModelStringInput | null;
  budgetID?: ModelIDInput | null;
  and?: Array<ModelTransactionFilterInput | null> | null;
  or?: Array<ModelTransactionFilterInput | null> | null;
  not?: ModelTransactionFilterInput | null;
};

export type ModelSavingGoalFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  percent_of_income?: ModelFloatInput | null;
  date_created?: ModelStringInput | null;
  date_affordable?: ModelStringInput | null;
  is_paused?: ModelBooleanInput | null;
  pause_duration_hour?: ModelIntInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelSavingGoalFilterInput | null> | null;
  or?: Array<ModelSavingGoalFilterInput | null> | null;
  not?: ModelSavingGoalFilterInput | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  email?: ModelStringInput | null;
  income_distribution?: ModelStringInput | null;
  is_premium?: ModelBooleanInput | null;
  img?: ModelStringInput | null;
  promo_code?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelBudgetFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  percent_of_income?: ModelFloatInput | null;
  balance?: ModelFloatInput | null;
  img?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  category?: ModelCategoriesInput | null;
  and?: Array<ModelBudgetFilterInput | null> | null;
  or?: Array<ModelBudgetFilterInput | null> | null;
  not?: ModelBudgetFilterInput | null;
};

export type ModelBudgetConnection = {
  __typename: "ModelBudgetConnection";
  items: Array<Budget | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type CreateTransactionMutationVariables = {
  input: CreateTransactionInput;
  condition?: ModelTransactionConditionInput | null;
};

export type CreateTransactionMutation = {
  createTransaction?: {
    __typename: "Transaction";
    id: string;
    name: string;
    amount: number;
    date: string;
    memo?: string | null;
    is_sorted: boolean;
    iso_currency_code: string;
    budgetID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateTransactionMutationVariables = {
  input: UpdateTransactionInput;
  condition?: ModelTransactionConditionInput | null;
};

export type UpdateTransactionMutation = {
  updateTransaction?: {
    __typename: "Transaction";
    id: string;
    name: string;
    amount: number;
    date: string;
    memo?: string | null;
    is_sorted: boolean;
    iso_currency_code: string;
    budgetID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteTransactionMutationVariables = {
  input: DeleteTransactionInput;
  condition?: ModelTransactionConditionInput | null;
};

export type DeleteTransactionMutation = {
  deleteTransaction?: {
    __typename: "Transaction";
    id: string;
    name: string;
    amount: number;
    date: string;
    memo?: string | null;
    is_sorted: boolean;
    iso_currency_code: string;
    budgetID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreateSavingGoalMutationVariables = {
  input: CreateSavingGoalInput;
  condition?: ModelSavingGoalConditionInput | null;
};

export type CreateSavingGoalMutation = {
  createSavingGoal?: {
    __typename: "SavingGoal";
    id: string;
    name: string;
    percent_of_income: number;
    date_created: string;
    date_affordable: string;
    is_paused?: boolean | null;
    pause_duration_hour?: number | null;
    userID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type UpdateSavingGoalMutationVariables = {
  input: UpdateSavingGoalInput;
  condition?: ModelSavingGoalConditionInput | null;
};

export type UpdateSavingGoalMutation = {
  updateSavingGoal?: {
    __typename: "SavingGoal";
    id: string;
    name: string;
    percent_of_income: number;
    date_created: string;
    date_affordable: string;
    is_paused?: boolean | null;
    pause_duration_hour?: number | null;
    userID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type DeleteSavingGoalMutationVariables = {
  input: DeleteSavingGoalInput;
  condition?: ModelSavingGoalConditionInput | null;
};

export type DeleteSavingGoalMutation = {
  deleteSavingGoal?: {
    __typename: "SavingGoal";
    id: string;
    name: string;
    percent_of_income: number;
    date_created: string;
    date_affordable: string;
    is_paused?: boolean | null;
    pause_duration_hour?: number | null;
    userID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type CreateUserMutationVariables = {
  input: CreateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type CreateUserMutation = {
  createUser?: {
    __typename: "User";
    id: string;
    username: string;
    Budgets?: {
      __typename: "ModelSavingGoalConnection";
      items: Array<{
        __typename: "SavingGoal";
        id: string;
        name: string;
        percent_of_income: number;
        date_created: string;
        date_affordable: string;
        is_paused?: boolean | null;
        pause_duration_hour?: number | null;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    email: string;
    income_distribution: Array<string>;
    is_premium: boolean;
    img?: string | null;
    promo_code?: string | null;
    SavingGoals?: {
      __typename: "ModelSavingGoalConnection";
      items: Array<{
        __typename: "SavingGoal";
        id: string;
        name: string;
        percent_of_income: number;
        date_created: string;
        date_affordable: string;
        is_paused?: boolean | null;
        pause_duration_hour?: number | null;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type UpdateUserMutation = {
  updateUser?: {
    __typename: "User";
    id: string;
    username: string;
    Budgets?: {
      __typename: "ModelSavingGoalConnection";
      items: Array<{
        __typename: "SavingGoal";
        id: string;
        name: string;
        percent_of_income: number;
        date_created: string;
        date_affordable: string;
        is_paused?: boolean | null;
        pause_duration_hour?: number | null;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    email: string;
    income_distribution: Array<string>;
    is_premium: boolean;
    img?: string | null;
    promo_code?: string | null;
    SavingGoals?: {
      __typename: "ModelSavingGoalConnection";
      items: Array<{
        __typename: "SavingGoal";
        id: string;
        name: string;
        percent_of_income: number;
        date_created: string;
        date_affordable: string;
        is_paused?: boolean | null;
        pause_duration_hour?: number | null;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput;
  condition?: ModelUserConditionInput | null;
};

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: "User";
    id: string;
    username: string;
    Budgets?: {
      __typename: "ModelSavingGoalConnection";
      items: Array<{
        __typename: "SavingGoal";
        id: string;
        name: string;
        percent_of_income: number;
        date_created: string;
        date_affordable: string;
        is_paused?: boolean | null;
        pause_duration_hour?: number | null;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    email: string;
    income_distribution: Array<string>;
    is_premium: boolean;
    img?: string | null;
    promo_code?: string | null;
    SavingGoals?: {
      __typename: "ModelSavingGoalConnection";
      items: Array<{
        __typename: "SavingGoal";
        id: string;
        name: string;
        percent_of_income: number;
        date_created: string;
        date_affordable: string;
        is_paused?: boolean | null;
        pause_duration_hour?: number | null;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type CreateBudgetMutationVariables = {
  input: CreateBudgetInput;
  condition?: ModelBudgetConditionInput | null;
};

export type CreateBudgetMutation = {
  createBudget?: {
    __typename: "Budget";
    id: string;
    name: string;
    percent_of_income: number;
    balance: number;
    img?: string | null;
    userID: string;
    category?: Categories | null;
    Transactions?: {
      __typename: "ModelTransactionConnection";
      items: Array<{
        __typename: "Transaction";
        id: string;
        name: string;
        amount: number;
        date: string;
        memo?: string | null;
        is_sorted: boolean;
        iso_currency_code: string;
        budgetID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type UpdateBudgetMutationVariables = {
  input: UpdateBudgetInput;
  condition?: ModelBudgetConditionInput | null;
};

export type UpdateBudgetMutation = {
  updateBudget?: {
    __typename: "Budget";
    id: string;
    name: string;
    percent_of_income: number;
    balance: number;
    img?: string | null;
    userID: string;
    category?: Categories | null;
    Transactions?: {
      __typename: "ModelTransactionConnection";
      items: Array<{
        __typename: "Transaction";
        id: string;
        name: string;
        amount: number;
        date: string;
        memo?: string | null;
        is_sorted: boolean;
        iso_currency_code: string;
        budgetID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type DeleteBudgetMutationVariables = {
  input: DeleteBudgetInput;
  condition?: ModelBudgetConditionInput | null;
};

export type DeleteBudgetMutation = {
  deleteBudget?: {
    __typename: "Budget";
    id: string;
    name: string;
    percent_of_income: number;
    balance: number;
    img?: string | null;
    userID: string;
    category?: Categories | null;
    Transactions?: {
      __typename: "ModelTransactionConnection";
      items: Array<{
        __typename: "Transaction";
        id: string;
        name: string;
        amount: number;
        date: string;
        memo?: string | null;
        is_sorted: boolean;
        iso_currency_code: string;
        budgetID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type GetTransactionQueryVariables = {
  id: string;
};

export type GetTransactionQuery = {
  getTransaction?: {
    __typename: "Transaction";
    id: string;
    name: string;
    amount: number;
    date: string;
    memo?: string | null;
    is_sorted: boolean;
    iso_currency_code: string;
    budgetID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListTransactionsQuery = {
  listTransactions?: {
    __typename: "ModelTransactionConnection";
    items: Array<{
      __typename: "Transaction";
      id: string;
      name: string;
      amount: number;
      date: string;
      memo?: string | null;
      is_sorted: boolean;
      iso_currency_code: string;
      budgetID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncTransactionsQuery = {
  syncTransactions?: {
    __typename: "ModelTransactionConnection";
    items: Array<{
      __typename: "Transaction";
      id: string;
      name: string;
      amount: number;
      date: string;
      memo?: string | null;
      is_sorted: boolean;
      iso_currency_code: string;
      budgetID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetSavingGoalQueryVariables = {
  id: string;
};

export type GetSavingGoalQuery = {
  getSavingGoal?: {
    __typename: "SavingGoal";
    id: string;
    name: string;
    percent_of_income: number;
    date_created: string;
    date_affordable: string;
    is_paused?: boolean | null;
    pause_duration_hour?: number | null;
    userID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type ListSavingGoalsQueryVariables = {
  filter?: ModelSavingGoalFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListSavingGoalsQuery = {
  listSavingGoals?: {
    __typename: "ModelSavingGoalConnection";
    items: Array<{
      __typename: "SavingGoal";
      id: string;
      name: string;
      percent_of_income: number;
      date_created: string;
      date_affordable: string;
      is_paused?: boolean | null;
      pause_duration_hour?: number | null;
      userID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncSavingGoalsQueryVariables = {
  filter?: ModelSavingGoalFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncSavingGoalsQuery = {
  syncSavingGoals?: {
    __typename: "ModelSavingGoalConnection";
    items: Array<{
      __typename: "SavingGoal";
      id: string;
      name: string;
      percent_of_income: number;
      date_created: string;
      date_affordable: string;
      is_paused?: boolean | null;
      pause_duration_hour?: number | null;
      userID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetUserQueryVariables = {
  id: string;
};

export type GetUserQuery = {
  getUser?: {
    __typename: "User";
    id: string;
    username: string;
    Budgets?: {
      __typename: "ModelSavingGoalConnection";
      items: Array<{
        __typename: "SavingGoal";
        id: string;
        name: string;
        percent_of_income: number;
        date_created: string;
        date_affordable: string;
        is_paused?: boolean | null;
        pause_duration_hour?: number | null;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    email: string;
    income_distribution: Array<string>;
    is_premium: boolean;
    img?: string | null;
    promo_code?: string | null;
    SavingGoals?: {
      __typename: "ModelSavingGoalConnection";
      items: Array<{
        __typename: "SavingGoal";
        id: string;
        name: string;
        percent_of_income: number;
        date_created: string;
        date_affordable: string;
        is_paused?: boolean | null;
        pause_duration_hour?: number | null;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUsersQuery = {
  listUsers?: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      username: string;
      Budgets?: {
        __typename: "ModelSavingGoalConnection";
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      email: string;
      income_distribution: Array<string>;
      is_premium: boolean;
      img?: string | null;
      promo_code?: string | null;
      SavingGoals?: {
        __typename: "ModelSavingGoalConnection";
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncUsersQuery = {
  syncUsers?: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      username: string;
      Budgets?: {
        __typename: "ModelSavingGoalConnection";
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      email: string;
      income_distribution: Array<string>;
      is_premium: boolean;
      img?: string | null;
      promo_code?: string | null;
      SavingGoals?: {
        __typename: "ModelSavingGoalConnection";
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetBudgetQueryVariables = {
  id: string;
};

export type GetBudgetQuery = {
  getBudget?: {
    __typename: "Budget";
    id: string;
    name: string;
    percent_of_income: number;
    balance: number;
    img?: string | null;
    userID: string;
    category?: Categories | null;
    Transactions?: {
      __typename: "ModelTransactionConnection";
      items: Array<{
        __typename: "Transaction";
        id: string;
        name: string;
        amount: number;
        date: string;
        memo?: string | null;
        is_sorted: boolean;
        iso_currency_code: string;
        budgetID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type ListBudgetsQueryVariables = {
  filter?: ModelBudgetFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListBudgetsQuery = {
  listBudgets?: {
    __typename: "ModelBudgetConnection";
    items: Array<{
      __typename: "Budget";
      id: string;
      name: string;
      percent_of_income: number;
      balance: number;
      img?: string | null;
      userID: string;
      category?: Categories | null;
      Transactions?: {
        __typename: "ModelTransactionConnection";
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncBudgetsQueryVariables = {
  filter?: ModelBudgetFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncBudgetsQuery = {
  syncBudgets?: {
    __typename: "ModelBudgetConnection";
    items: Array<{
      __typename: "Budget";
      id: string;
      name: string;
      percent_of_income: number;
      balance: number;
      img?: string | null;
      userID: string;
      category?: Categories | null;
      Transactions?: {
        __typename: "ModelTransactionConnection";
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type OnCreateTransactionSubscription = {
  onCreateTransaction?: {
    __typename: "Transaction";
    id: string;
    name: string;
    amount: number;
    date: string;
    memo?: string | null;
    is_sorted: boolean;
    iso_currency_code: string;
    budgetID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateTransactionSubscription = {
  onUpdateTransaction?: {
    __typename: "Transaction";
    id: string;
    name: string;
    amount: number;
    date: string;
    memo?: string | null;
    is_sorted: boolean;
    iso_currency_code: string;
    budgetID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteTransactionSubscription = {
  onDeleteTransaction?: {
    __typename: "Transaction";
    id: string;
    name: string;
    amount: number;
    date: string;
    memo?: string | null;
    is_sorted: boolean;
    iso_currency_code: string;
    budgetID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateSavingGoalSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateSavingGoalSubscription = {
  onCreateSavingGoal?: {
    __typename: "SavingGoal";
    id: string;
    name: string;
    percent_of_income: number;
    date_created: string;
    date_affordable: string;
    is_paused?: boolean | null;
    pause_duration_hour?: number | null;
    userID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnUpdateSavingGoalSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateSavingGoalSubscription = {
  onUpdateSavingGoal?: {
    __typename: "SavingGoal";
    id: string;
    name: string;
    percent_of_income: number;
    date_created: string;
    date_affordable: string;
    is_paused?: boolean | null;
    pause_duration_hour?: number | null;
    userID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnDeleteSavingGoalSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteSavingGoalSubscription = {
  onDeleteSavingGoal?: {
    __typename: "SavingGoal";
    id: string;
    name: string;
    percent_of_income: number;
    date_created: string;
    date_affordable: string;
    is_paused?: boolean | null;
    pause_duration_hour?: number | null;
    userID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateUserSubscription = {
  onCreateUser?: {
    __typename: "User";
    id: string;
    username: string;
    Budgets?: {
      __typename: "ModelSavingGoalConnection";
      items: Array<{
        __typename: "SavingGoal";
        id: string;
        name: string;
        percent_of_income: number;
        date_created: string;
        date_affordable: string;
        is_paused?: boolean | null;
        pause_duration_hour?: number | null;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    email: string;
    income_distribution: Array<string>;
    is_premium: boolean;
    img?: string | null;
    promo_code?: string | null;
    SavingGoals?: {
      __typename: "ModelSavingGoalConnection";
      items: Array<{
        __typename: "SavingGoal";
        id: string;
        name: string;
        percent_of_income: number;
        date_created: string;
        date_affordable: string;
        is_paused?: boolean | null;
        pause_duration_hour?: number | null;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateUserSubscription = {
  onUpdateUser?: {
    __typename: "User";
    id: string;
    username: string;
    Budgets?: {
      __typename: "ModelSavingGoalConnection";
      items: Array<{
        __typename: "SavingGoal";
        id: string;
        name: string;
        percent_of_income: number;
        date_created: string;
        date_affordable: string;
        is_paused?: boolean | null;
        pause_duration_hour?: number | null;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    email: string;
    income_distribution: Array<string>;
    is_premium: boolean;
    img?: string | null;
    promo_code?: string | null;
    SavingGoals?: {
      __typename: "ModelSavingGoalConnection";
      items: Array<{
        __typename: "SavingGoal";
        id: string;
        name: string;
        percent_of_income: number;
        date_created: string;
        date_affordable: string;
        is_paused?: boolean | null;
        pause_duration_hour?: number | null;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteUserSubscription = {
  onDeleteUser?: {
    __typename: "User";
    id: string;
    username: string;
    Budgets?: {
      __typename: "ModelSavingGoalConnection";
      items: Array<{
        __typename: "SavingGoal";
        id: string;
        name: string;
        percent_of_income: number;
        date_created: string;
        date_affordable: string;
        is_paused?: boolean | null;
        pause_duration_hour?: number | null;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    email: string;
    income_distribution: Array<string>;
    is_premium: boolean;
    img?: string | null;
    promo_code?: string | null;
    SavingGoals?: {
      __typename: "ModelSavingGoalConnection";
      items: Array<{
        __typename: "SavingGoal";
        id: string;
        name: string;
        percent_of_income: number;
        date_created: string;
        date_affordable: string;
        is_paused?: boolean | null;
        pause_duration_hour?: number | null;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnCreateBudgetSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateBudgetSubscription = {
  onCreateBudget?: {
    __typename: "Budget";
    id: string;
    name: string;
    percent_of_income: number;
    balance: number;
    img?: string | null;
    userID: string;
    category?: Categories | null;
    Transactions?: {
      __typename: "ModelTransactionConnection";
      items: Array<{
        __typename: "Transaction";
        id: string;
        name: string;
        amount: number;
        date: string;
        memo?: string | null;
        is_sorted: boolean;
        iso_currency_code: string;
        budgetID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnUpdateBudgetSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateBudgetSubscription = {
  onUpdateBudget?: {
    __typename: "Budget";
    id: string;
    name: string;
    percent_of_income: number;
    balance: number;
    img?: string | null;
    userID: string;
    category?: Categories | null;
    Transactions?: {
      __typename: "ModelTransactionConnection";
      items: Array<{
        __typename: "Transaction";
        id: string;
        name: string;
        amount: number;
        date: string;
        memo?: string | null;
        is_sorted: boolean;
        iso_currency_code: string;
        budgetID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnDeleteBudgetSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteBudgetSubscription = {
  onDeleteBudget?: {
    __typename: "Budget";
    id: string;
    name: string;
    percent_of_income: number;
    balance: number;
    img?: string | null;
    userID: string;
    category?: Categories | null;
    Transactions?: {
      __typename: "ModelTransactionConnection";
      items: Array<{
        __typename: "Transaction";
        id: string;
        name: string;
        amount: number;
        date: string;
        memo?: string | null;
        is_sorted: boolean;
        iso_currency_code: string;
        budgetID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};
