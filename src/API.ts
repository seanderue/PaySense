/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTransactionInput = {
  id?: string | null,
  name: string,
  amount: number,
  date?: string | null,
  memo?: string | null,
  iso_currency_code?: string | null,
  balanceID: string,
  _version?: number | null,
};

export type ModelTransactionConditionInput = {
  name?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  date?: ModelStringInput | null,
  memo?: ModelStringInput | null,
  iso_currency_code?: ModelStringInput | null,
  balanceID?: ModelIDInput | null,
  and?: Array< ModelTransactionConditionInput | null > | null,
  or?: Array< ModelTransactionConditionInput | null > | null,
  not?: ModelTransactionConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
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
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Transaction = {
  __typename: "Transaction",
  id: string,
  name: string,
  amount: number,
  date?: string | null,
  memo?: string | null,
  iso_currency_code?: string | null,
  balanceID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateTransactionInput = {
  id: string,
  name?: string | null,
  amount?: number | null,
  date?: string | null,
  memo?: string | null,
  iso_currency_code?: string | null,
  balanceID?: string | null,
  _version?: number | null,
};

export type DeleteTransactionInput = {
  id: string,
  _version?: number | null,
};

export type CreateBalanceOptionsInput = {
  id?: string | null,
  monthly_allocation?: number | null,
  is_paused?: boolean | null,
  pause_duration_hours?: number | null,
  category?: Categories | null,
  _version?: number | null,
};

export enum Categories {
  NEED = "NEED",
  SAVE = "SAVE",
  WANT = "WANT",
}


export type ModelBalanceOptionsConditionInput = {
  monthly_allocation?: ModelFloatInput | null,
  is_paused?: ModelBooleanInput | null,
  pause_duration_hours?: ModelFloatInput | null,
  category?: ModelCategoriesInput | null,
  and?: Array< ModelBalanceOptionsConditionInput | null > | null,
  or?: Array< ModelBalanceOptionsConditionInput | null > | null,
  not?: ModelBalanceOptionsConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelCategoriesInput = {
  eq?: Categories | null,
  ne?: Categories | null,
};

export type BalanceOptions = {
  __typename: "BalanceOptions",
  id: string,
  monthly_allocation?: number | null,
  is_paused?: boolean | null,
  pause_duration_hours?: number | null,
  category?: Categories | null,
  BalanceRules?: ModelBalanceRuleConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelBalanceRuleConnection = {
  __typename: "ModelBalanceRuleConnection",
  items:  Array<BalanceRule | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type BalanceRule = {
  __typename: "BalanceRule",
  id: string,
  name: string,
  description?: string | null,
  balance_optionsID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateBalanceOptionsInput = {
  id: string,
  monthly_allocation?: number | null,
  is_paused?: boolean | null,
  pause_duration_hours?: number | null,
  category?: Categories | null,
  _version?: number | null,
};

export type DeleteBalanceOptionsInput = {
  id: string,
  _version?: number | null,
};

export type CreateBalanceRuleInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  balance_optionsID: string,
  _version?: number | null,
};

export type ModelBalanceRuleConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  balance_optionsID?: ModelIDInput | null,
  and?: Array< ModelBalanceRuleConditionInput | null > | null,
  or?: Array< ModelBalanceRuleConditionInput | null > | null,
  not?: ModelBalanceRuleConditionInput | null,
};

export type UpdateBalanceRuleInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  balance_optionsID?: string | null,
  _version?: number | null,
};

export type DeleteBalanceRuleInput = {
  id: string,
  _version?: number | null,
};

export type CreateBalanceInput = {
  id?: string | null,
  title: string,
  icon: string,
  fund_balance: number,
  total_fund_size: number,
  placement_index: number,
  type: BalanceTypes,
  _version?: number | null,
  balanceBalanceOptionsId?: string | null,
};

export enum BalanceTypes {
  GOAL = "GOAL",
  BUDGET = "BUDGET",
}


export type ModelBalanceConditionInput = {
  title?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  fund_balance?: ModelFloatInput | null,
  total_fund_size?: ModelFloatInput | null,
  placement_index?: ModelIntInput | null,
  type?: ModelBalanceTypesInput | null,
  and?: Array< ModelBalanceConditionInput | null > | null,
  or?: Array< ModelBalanceConditionInput | null > | null,
  not?: ModelBalanceConditionInput | null,
  balanceBalanceOptionsId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBalanceTypesInput = {
  eq?: BalanceTypes | null,
  ne?: BalanceTypes | null,
};

export type Balance = {
  __typename: "Balance",
  id: string,
  title: string,
  icon: string,
  fund_balance: number,
  total_fund_size: number,
  placement_index: number,
  type: BalanceTypes,
  BalanceOptions?: BalanceOptions | null,
  Transactions?: ModelTransactionConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  balanceBalanceOptionsId?: string | null,
  owner?: string | null,
};

export type ModelTransactionConnection = {
  __typename: "ModelTransactionConnection",
  items:  Array<Transaction | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateBalanceInput = {
  id: string,
  title?: string | null,
  icon?: string | null,
  fund_balance?: number | null,
  total_fund_size?: number | null,
  placement_index?: number | null,
  type?: BalanceTypes | null,
  _version?: number | null,
  balanceBalanceOptionsId?: string | null,
};

export type DeleteBalanceInput = {
  id: string,
  _version?: number | null,
};

export type ModelTransactionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  date?: ModelStringInput | null,
  memo?: ModelStringInput | null,
  iso_currency_code?: ModelStringInput | null,
  balanceID?: ModelIDInput | null,
  and?: Array< ModelTransactionFilterInput | null > | null,
  or?: Array< ModelTransactionFilterInput | null > | null,
  not?: ModelTransactionFilterInput | null,
};

export type ModelBalanceOptionsFilterInput = {
  id?: ModelIDInput | null,
  monthly_allocation?: ModelFloatInput | null,
  is_paused?: ModelBooleanInput | null,
  pause_duration_hours?: ModelFloatInput | null,
  category?: ModelCategoriesInput | null,
  and?: Array< ModelBalanceOptionsFilterInput | null > | null,
  or?: Array< ModelBalanceOptionsFilterInput | null > | null,
  not?: ModelBalanceOptionsFilterInput | null,
};

export type ModelBalanceOptionsConnection = {
  __typename: "ModelBalanceOptionsConnection",
  items:  Array<BalanceOptions | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelBalanceRuleFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  balance_optionsID?: ModelIDInput | null,
  and?: Array< ModelBalanceRuleFilterInput | null > | null,
  or?: Array< ModelBalanceRuleFilterInput | null > | null,
  not?: ModelBalanceRuleFilterInput | null,
};

export type ModelBalanceFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  fund_balance?: ModelFloatInput | null,
  total_fund_size?: ModelFloatInput | null,
  placement_index?: ModelIntInput | null,
  type?: ModelBalanceTypesInput | null,
  and?: Array< ModelBalanceFilterInput | null > | null,
  or?: Array< ModelBalanceFilterInput | null > | null,
  not?: ModelBalanceFilterInput | null,
  balanceBalanceOptionsId?: ModelIDInput | null,
};

export type ModelBalanceConnection = {
  __typename: "ModelBalanceConnection",
  items:  Array<Balance | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionTransactionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  date?: ModelSubscriptionStringInput | null,
  memo?: ModelSubscriptionStringInput | null,
  iso_currency_code?: ModelSubscriptionStringInput | null,
  balanceID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
  or?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBalanceOptionsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  monthly_allocation?: ModelSubscriptionFloatInput | null,
  is_paused?: ModelSubscriptionBooleanInput | null,
  pause_duration_hours?: ModelSubscriptionFloatInput | null,
  category?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBalanceOptionsFilterInput | null > | null,
  or?: Array< ModelSubscriptionBalanceOptionsFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionBalanceRuleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  balance_optionsID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBalanceRuleFilterInput | null > | null,
  or?: Array< ModelSubscriptionBalanceRuleFilterInput | null > | null,
};

export type ModelSubscriptionBalanceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  icon?: ModelSubscriptionStringInput | null,
  fund_balance?: ModelSubscriptionFloatInput | null,
  total_fund_size?: ModelSubscriptionFloatInput | null,
  placement_index?: ModelSubscriptionIntInput | null,
  type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBalanceFilterInput | null > | null,
  or?: Array< ModelSubscriptionBalanceFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateTransactionMutationVariables = {
  input: CreateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type CreateTransactionMutation = {
  createTransaction?:  {
    __typename: "Transaction",
    id: string,
    name: string,
    amount: number,
    date?: string | null,
    memo?: string | null,
    iso_currency_code?: string | null,
    balanceID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateTransactionMutationVariables = {
  input: UpdateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type UpdateTransactionMutation = {
  updateTransaction?:  {
    __typename: "Transaction",
    id: string,
    name: string,
    amount: number,
    date?: string | null,
    memo?: string | null,
    iso_currency_code?: string | null,
    balanceID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteTransactionMutationVariables = {
  input: DeleteTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type DeleteTransactionMutation = {
  deleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    name: string,
    amount: number,
    date?: string | null,
    memo?: string | null,
    iso_currency_code?: string | null,
    balanceID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateBalanceOptionsMutationVariables = {
  input: CreateBalanceOptionsInput,
  condition?: ModelBalanceOptionsConditionInput | null,
};

export type CreateBalanceOptionsMutation = {
  createBalanceOptions?:  {
    __typename: "BalanceOptions",
    id: string,
    monthly_allocation?: number | null,
    is_paused?: boolean | null,
    pause_duration_hours?: number | null,
    category?: Categories | null,
    BalanceRules?:  {
      __typename: "ModelBalanceRuleConnection",
      items:  Array< {
        __typename: "BalanceRule",
        id: string,
        name: string,
        description?: string | null,
        balance_optionsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateBalanceOptionsMutationVariables = {
  input: UpdateBalanceOptionsInput,
  condition?: ModelBalanceOptionsConditionInput | null,
};

export type UpdateBalanceOptionsMutation = {
  updateBalanceOptions?:  {
    __typename: "BalanceOptions",
    id: string,
    monthly_allocation?: number | null,
    is_paused?: boolean | null,
    pause_duration_hours?: number | null,
    category?: Categories | null,
    BalanceRules?:  {
      __typename: "ModelBalanceRuleConnection",
      items:  Array< {
        __typename: "BalanceRule",
        id: string,
        name: string,
        description?: string | null,
        balance_optionsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteBalanceOptionsMutationVariables = {
  input: DeleteBalanceOptionsInput,
  condition?: ModelBalanceOptionsConditionInput | null,
};

export type DeleteBalanceOptionsMutation = {
  deleteBalanceOptions?:  {
    __typename: "BalanceOptions",
    id: string,
    monthly_allocation?: number | null,
    is_paused?: boolean | null,
    pause_duration_hours?: number | null,
    category?: Categories | null,
    BalanceRules?:  {
      __typename: "ModelBalanceRuleConnection",
      items:  Array< {
        __typename: "BalanceRule",
        id: string,
        name: string,
        description?: string | null,
        balance_optionsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateBalanceRuleMutationVariables = {
  input: CreateBalanceRuleInput,
  condition?: ModelBalanceRuleConditionInput | null,
};

export type CreateBalanceRuleMutation = {
  createBalanceRule?:  {
    __typename: "BalanceRule",
    id: string,
    name: string,
    description?: string | null,
    balance_optionsID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateBalanceRuleMutationVariables = {
  input: UpdateBalanceRuleInput,
  condition?: ModelBalanceRuleConditionInput | null,
};

export type UpdateBalanceRuleMutation = {
  updateBalanceRule?:  {
    __typename: "BalanceRule",
    id: string,
    name: string,
    description?: string | null,
    balance_optionsID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteBalanceRuleMutationVariables = {
  input: DeleteBalanceRuleInput,
  condition?: ModelBalanceRuleConditionInput | null,
};

export type DeleteBalanceRuleMutation = {
  deleteBalanceRule?:  {
    __typename: "BalanceRule",
    id: string,
    name: string,
    description?: string | null,
    balance_optionsID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateBalanceMutationVariables = {
  input: CreateBalanceInput,
  condition?: ModelBalanceConditionInput | null,
};

export type CreateBalanceMutation = {
  createBalance?:  {
    __typename: "Balance",
    id: string,
    title: string,
    icon: string,
    fund_balance: number,
    total_fund_size: number,
    placement_index: number,
    type: BalanceTypes,
    BalanceOptions?:  {
      __typename: "BalanceOptions",
      id: string,
      monthly_allocation?: number | null,
      is_paused?: boolean | null,
      pause_duration_hours?: number | null,
      category?: Categories | null,
      BalanceRules?:  {
        __typename: "ModelBalanceRuleConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        amount: number,
        date?: string | null,
        memo?: string | null,
        iso_currency_code?: string | null,
        balanceID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    balanceBalanceOptionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateBalanceMutationVariables = {
  input: UpdateBalanceInput,
  condition?: ModelBalanceConditionInput | null,
};

export type UpdateBalanceMutation = {
  updateBalance?:  {
    __typename: "Balance",
    id: string,
    title: string,
    icon: string,
    fund_balance: number,
    total_fund_size: number,
    placement_index: number,
    type: BalanceTypes,
    BalanceOptions?:  {
      __typename: "BalanceOptions",
      id: string,
      monthly_allocation?: number | null,
      is_paused?: boolean | null,
      pause_duration_hours?: number | null,
      category?: Categories | null,
      BalanceRules?:  {
        __typename: "ModelBalanceRuleConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        amount: number,
        date?: string | null,
        memo?: string | null,
        iso_currency_code?: string | null,
        balanceID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    balanceBalanceOptionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteBalanceMutationVariables = {
  input: DeleteBalanceInput,
  condition?: ModelBalanceConditionInput | null,
};

export type DeleteBalanceMutation = {
  deleteBalance?:  {
    __typename: "Balance",
    id: string,
    title: string,
    icon: string,
    fund_balance: number,
    total_fund_size: number,
    placement_index: number,
    type: BalanceTypes,
    BalanceOptions?:  {
      __typename: "BalanceOptions",
      id: string,
      monthly_allocation?: number | null,
      is_paused?: boolean | null,
      pause_duration_hours?: number | null,
      category?: Categories | null,
      BalanceRules?:  {
        __typename: "ModelBalanceRuleConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        amount: number,
        date?: string | null,
        memo?: string | null,
        iso_currency_code?: string | null,
        balanceID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    balanceBalanceOptionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetTransactionQueryVariables = {
  id: string,
};

export type GetTransactionQuery = {
  getTransaction?:  {
    __typename: "Transaction",
    id: string,
    name: string,
    amount: number,
    date?: string | null,
    memo?: string | null,
    iso_currency_code?: string | null,
    balanceID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransactionsQuery = {
  listTransactions?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      id: string,
      name: string,
      amount: number,
      date?: string | null,
      memo?: string | null,
      iso_currency_code?: string | null,
      balanceID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTransactionsQuery = {
  syncTransactions?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      id: string,
      name: string,
      amount: number,
      date?: string | null,
      memo?: string | null,
      iso_currency_code?: string | null,
      balanceID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBalanceOptionsQueryVariables = {
  id: string,
};

export type GetBalanceOptionsQuery = {
  getBalanceOptions?:  {
    __typename: "BalanceOptions",
    id: string,
    monthly_allocation?: number | null,
    is_paused?: boolean | null,
    pause_duration_hours?: number | null,
    category?: Categories | null,
    BalanceRules?:  {
      __typename: "ModelBalanceRuleConnection",
      items:  Array< {
        __typename: "BalanceRule",
        id: string,
        name: string,
        description?: string | null,
        balance_optionsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListBalanceOptionsQueryVariables = {
  filter?: ModelBalanceOptionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBalanceOptionsQuery = {
  listBalanceOptions?:  {
    __typename: "ModelBalanceOptionsConnection",
    items:  Array< {
      __typename: "BalanceOptions",
      id: string,
      monthly_allocation?: number | null,
      is_paused?: boolean | null,
      pause_duration_hours?: number | null,
      category?: Categories | null,
      BalanceRules?:  {
        __typename: "ModelBalanceRuleConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBalanceOptionsQueryVariables = {
  filter?: ModelBalanceOptionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBalanceOptionsQuery = {
  syncBalanceOptions?:  {
    __typename: "ModelBalanceOptionsConnection",
    items:  Array< {
      __typename: "BalanceOptions",
      id: string,
      monthly_allocation?: number | null,
      is_paused?: boolean | null,
      pause_duration_hours?: number | null,
      category?: Categories | null,
      BalanceRules?:  {
        __typename: "ModelBalanceRuleConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBalanceRuleQueryVariables = {
  id: string,
};

export type GetBalanceRuleQuery = {
  getBalanceRule?:  {
    __typename: "BalanceRule",
    id: string,
    name: string,
    description?: string | null,
    balance_optionsID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListBalanceRulesQueryVariables = {
  filter?: ModelBalanceRuleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBalanceRulesQuery = {
  listBalanceRules?:  {
    __typename: "ModelBalanceRuleConnection",
    items:  Array< {
      __typename: "BalanceRule",
      id: string,
      name: string,
      description?: string | null,
      balance_optionsID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBalanceRulesQueryVariables = {
  filter?: ModelBalanceRuleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBalanceRulesQuery = {
  syncBalanceRules?:  {
    __typename: "ModelBalanceRuleConnection",
    items:  Array< {
      __typename: "BalanceRule",
      id: string,
      name: string,
      description?: string | null,
      balance_optionsID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBalanceQueryVariables = {
  id: string,
};

export type GetBalanceQuery = {
  getBalance?:  {
    __typename: "Balance",
    id: string,
    title: string,
    icon: string,
    fund_balance: number,
    total_fund_size: number,
    placement_index: number,
    type: BalanceTypes,
    BalanceOptions?:  {
      __typename: "BalanceOptions",
      id: string,
      monthly_allocation?: number | null,
      is_paused?: boolean | null,
      pause_duration_hours?: number | null,
      category?: Categories | null,
      BalanceRules?:  {
        __typename: "ModelBalanceRuleConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        amount: number,
        date?: string | null,
        memo?: string | null,
        iso_currency_code?: string | null,
        balanceID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    balanceBalanceOptionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListBalancesQueryVariables = {
  filter?: ModelBalanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBalancesQuery = {
  listBalances?:  {
    __typename: "ModelBalanceConnection",
    items:  Array< {
      __typename: "Balance",
      id: string,
      title: string,
      icon: string,
      fund_balance: number,
      total_fund_size: number,
      placement_index: number,
      type: BalanceTypes,
      BalanceOptions?:  {
        __typename: "BalanceOptions",
        id: string,
        monthly_allocation?: number | null,
        is_paused?: boolean | null,
        pause_duration_hours?: number | null,
        category?: Categories | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      balanceBalanceOptionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBalancesQueryVariables = {
  filter?: ModelBalanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBalancesQuery = {
  syncBalances?:  {
    __typename: "ModelBalanceConnection",
    items:  Array< {
      __typename: "Balance",
      id: string,
      title: string,
      icon: string,
      fund_balance: number,
      total_fund_size: number,
      placement_index: number,
      type: BalanceTypes,
      BalanceOptions?:  {
        __typename: "BalanceOptions",
        id: string,
        monthly_allocation?: number | null,
        is_paused?: boolean | null,
        pause_duration_hours?: number | null,
        category?: Categories | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      balanceBalanceOptionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ByPlacementIndexQueryVariables = {
  type: BalanceTypes,
  placement_index?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBalanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByPlacementIndexQuery = {
  byPlacementIndex?:  {
    __typename: "ModelBalanceConnection",
    items:  Array< {
      __typename: "Balance",
      id: string,
      title: string,
      icon: string,
      fund_balance: number,
      total_fund_size: number,
      placement_index: number,
      type: BalanceTypes,
      BalanceOptions?:  {
        __typename: "BalanceOptions",
        id: string,
        monthly_allocation?: number | null,
        is_paused?: boolean | null,
        pause_duration_hours?: number | null,
        category?: Categories | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      balanceBalanceOptionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
  owner?: string | null,
};

export type OnCreateTransactionSubscription = {
  onCreateTransaction?:  {
    __typename: "Transaction",
    id: string,
    name: string,
    amount: number,
    date?: string | null,
    memo?: string | null,
    iso_currency_code?: string | null,
    balanceID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTransactionSubscription = {
  onUpdateTransaction?:  {
    __typename: "Transaction",
    id: string,
    name: string,
    amount: number,
    date?: string | null,
    memo?: string | null,
    iso_currency_code?: string | null,
    balanceID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTransactionSubscription = {
  onDeleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    name: string,
    amount: number,
    date?: string | null,
    memo?: string | null,
    iso_currency_code?: string | null,
    balanceID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateBalanceOptionsSubscriptionVariables = {
  filter?: ModelSubscriptionBalanceOptionsFilterInput | null,
  owner?: string | null,
};

export type OnCreateBalanceOptionsSubscription = {
  onCreateBalanceOptions?:  {
    __typename: "BalanceOptions",
    id: string,
    monthly_allocation?: number | null,
    is_paused?: boolean | null,
    pause_duration_hours?: number | null,
    category?: Categories | null,
    BalanceRules?:  {
      __typename: "ModelBalanceRuleConnection",
      items:  Array< {
        __typename: "BalanceRule",
        id: string,
        name: string,
        description?: string | null,
        balance_optionsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateBalanceOptionsSubscriptionVariables = {
  filter?: ModelSubscriptionBalanceOptionsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBalanceOptionsSubscription = {
  onUpdateBalanceOptions?:  {
    __typename: "BalanceOptions",
    id: string,
    monthly_allocation?: number | null,
    is_paused?: boolean | null,
    pause_duration_hours?: number | null,
    category?: Categories | null,
    BalanceRules?:  {
      __typename: "ModelBalanceRuleConnection",
      items:  Array< {
        __typename: "BalanceRule",
        id: string,
        name: string,
        description?: string | null,
        balance_optionsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteBalanceOptionsSubscriptionVariables = {
  filter?: ModelSubscriptionBalanceOptionsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBalanceOptionsSubscription = {
  onDeleteBalanceOptions?:  {
    __typename: "BalanceOptions",
    id: string,
    monthly_allocation?: number | null,
    is_paused?: boolean | null,
    pause_duration_hours?: number | null,
    category?: Categories | null,
    BalanceRules?:  {
      __typename: "ModelBalanceRuleConnection",
      items:  Array< {
        __typename: "BalanceRule",
        id: string,
        name: string,
        description?: string | null,
        balance_optionsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateBalanceRuleSubscriptionVariables = {
  filter?: ModelSubscriptionBalanceRuleFilterInput | null,
  owner?: string | null,
};

export type OnCreateBalanceRuleSubscription = {
  onCreateBalanceRule?:  {
    __typename: "BalanceRule",
    id: string,
    name: string,
    description?: string | null,
    balance_optionsID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateBalanceRuleSubscriptionVariables = {
  filter?: ModelSubscriptionBalanceRuleFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBalanceRuleSubscription = {
  onUpdateBalanceRule?:  {
    __typename: "BalanceRule",
    id: string,
    name: string,
    description?: string | null,
    balance_optionsID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteBalanceRuleSubscriptionVariables = {
  filter?: ModelSubscriptionBalanceRuleFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBalanceRuleSubscription = {
  onDeleteBalanceRule?:  {
    __typename: "BalanceRule",
    id: string,
    name: string,
    description?: string | null,
    balance_optionsID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateBalanceSubscriptionVariables = {
  filter?: ModelSubscriptionBalanceFilterInput | null,
  owner?: string | null,
};

export type OnCreateBalanceSubscription = {
  onCreateBalance?:  {
    __typename: "Balance",
    id: string,
    title: string,
    icon: string,
    fund_balance: number,
    total_fund_size: number,
    placement_index: number,
    type: BalanceTypes,
    BalanceOptions?:  {
      __typename: "BalanceOptions",
      id: string,
      monthly_allocation?: number | null,
      is_paused?: boolean | null,
      pause_duration_hours?: number | null,
      category?: Categories | null,
      BalanceRules?:  {
        __typename: "ModelBalanceRuleConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        amount: number,
        date?: string | null,
        memo?: string | null,
        iso_currency_code?: string | null,
        balanceID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    balanceBalanceOptionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateBalanceSubscriptionVariables = {
  filter?: ModelSubscriptionBalanceFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBalanceSubscription = {
  onUpdateBalance?:  {
    __typename: "Balance",
    id: string,
    title: string,
    icon: string,
    fund_balance: number,
    total_fund_size: number,
    placement_index: number,
    type: BalanceTypes,
    BalanceOptions?:  {
      __typename: "BalanceOptions",
      id: string,
      monthly_allocation?: number | null,
      is_paused?: boolean | null,
      pause_duration_hours?: number | null,
      category?: Categories | null,
      BalanceRules?:  {
        __typename: "ModelBalanceRuleConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        amount: number,
        date?: string | null,
        memo?: string | null,
        iso_currency_code?: string | null,
        balanceID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    balanceBalanceOptionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteBalanceSubscriptionVariables = {
  filter?: ModelSubscriptionBalanceFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBalanceSubscription = {
  onDeleteBalance?:  {
    __typename: "Balance",
    id: string,
    title: string,
    icon: string,
    fund_balance: number,
    total_fund_size: number,
    placement_index: number,
    type: BalanceTypes,
    BalanceOptions?:  {
      __typename: "BalanceOptions",
      id: string,
      monthly_allocation?: number | null,
      is_paused?: boolean | null,
      pause_duration_hours?: number | null,
      category?: Categories | null,
      BalanceRules?:  {
        __typename: "ModelBalanceRuleConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        amount: number,
        date?: string | null,
        memo?: string | null,
        iso_currency_code?: string | null,
        balanceID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    balanceBalanceOptionsId?: string | null,
    owner?: string | null,
  } | null,
};
