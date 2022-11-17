/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFundRuleInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  fundoptionsID: string,
};

export type ModelFundRuleConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  fundoptionsID?: ModelIDInput | null,
  and?: Array< ModelFundRuleConditionInput | null > | null,
  or?: Array< ModelFundRuleConditionInput | null > | null,
  not?: ModelFundRuleConditionInput | null,
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

export type FundRule = {
  __typename: "FundRule",
  id: string,
  name: string,
  description?: string | null,
  fundoptionsID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFundRuleInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  fundoptionsID?: string | null,
};

export type DeleteFundRuleInput = {
  id: string,
};

export type CreateFundInput = {
  id?: string | null,
  title: string,
  icon: string,
  fund_balance: number,
  total_fund_size: number,
  placement_index: number,
  type: FundTypes,
  fundFundOptionsId?: string | null,
};

export enum FundTypes {
  BUDGET = "BUDGET",
  GOAL = "GOAL",
}


export type ModelFundConditionInput = {
  title?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  fund_balance?: ModelFloatInput | null,
  total_fund_size?: ModelFloatInput | null,
  placement_index?: ModelIntInput | null,
  type?: ModelFundTypesInput | null,
  and?: Array< ModelFundConditionInput | null > | null,
  or?: Array< ModelFundConditionInput | null > | null,
  not?: ModelFundConditionInput | null,
  fundFundOptionsId?: ModelIDInput | null,
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

export type ModelFundTypesInput = {
  eq?: FundTypes | null,
  ne?: FundTypes | null,
};

export type Fund = {
  __typename: "Fund",
  id: string,
  title: string,
  icon: string,
  fund_balance: number,
  total_fund_size: number,
  placement_index: number,
  type: FundTypes,
  FundOptions?: FundOptions | null,
  Transactions?: ModelTransactionConnection | null,
  createdAt: string,
  updatedAt: string,
  fundFundOptionsId?: string | null,
  owner?: string | null,
};

export type FundOptions = {
  __typename: "FundOptions",
  id: string,
  monthly_allocation?: number | null,
  is_paused?: boolean | null,
  pause_duration_hours?: number | null,
  categories?: Categories | null,
  FundRules?: ModelFundRuleConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export enum Categories {
  NEED = "NEED",
  SAVE = "SAVE",
  WANT = "WANT",
}


export type ModelFundRuleConnection = {
  __typename: "ModelFundRuleConnection",
  items:  Array<FundRule | null >,
  nextToken?: string | null,
};

export type ModelTransactionConnection = {
  __typename: "ModelTransactionConnection",
  items:  Array<Transaction | null >,
  nextToken?: string | null,
};

export type Transaction = {
  __typename: "Transaction",
  id: string,
  name: string,
  amount: number,
  date: string,
  memo?: string | null,
  iso_currency_code?: string | null,
  fundID: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateFundInput = {
  id: string,
  title?: string | null,
  icon?: string | null,
  fund_balance?: number | null,
  total_fund_size?: number | null,
  placement_index?: number | null,
  type?: FundTypes | null,
  fundFundOptionsId?: string | null,
};

export type DeleteFundInput = {
  id: string,
};

export type CreateFundOptionsInput = {
  id?: string | null,
  monthly_allocation?: number | null,
  is_paused?: boolean | null,
  pause_duration_hours?: number | null,
  categories?: Categories | null,
};

export type ModelFundOptionsConditionInput = {
  monthly_allocation?: ModelFloatInput | null,
  is_paused?: ModelBooleanInput | null,
  pause_duration_hours?: ModelFloatInput | null,
  categories?: ModelCategoriesInput | null,
  and?: Array< ModelFundOptionsConditionInput | null > | null,
  or?: Array< ModelFundOptionsConditionInput | null > | null,
  not?: ModelFundOptionsConditionInput | null,
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

export type UpdateFundOptionsInput = {
  id: string,
  monthly_allocation?: number | null,
  is_paused?: boolean | null,
  pause_duration_hours?: number | null,
  categories?: Categories | null,
};

export type DeleteFundOptionsInput = {
  id: string,
};

export type CreateTransactionInput = {
  id?: string | null,
  name: string,
  amount: number,
  date: string,
  memo?: string | null,
  iso_currency_code?: string | null,
  fundID: string,
};

export type ModelTransactionConditionInput = {
  name?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  date?: ModelStringInput | null,
  memo?: ModelStringInput | null,
  iso_currency_code?: ModelStringInput | null,
  fundID?: ModelIDInput | null,
  and?: Array< ModelTransactionConditionInput | null > | null,
  or?: Array< ModelTransactionConditionInput | null > | null,
  not?: ModelTransactionConditionInput | null,
};

export type UpdateTransactionInput = {
  id: string,
  name?: string | null,
  amount?: number | null,
  date?: string | null,
  memo?: string | null,
  iso_currency_code?: string | null,
  fundID?: string | null,
};

export type DeleteTransactionInput = {
  id: string,
};

export type ModelFundRuleFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  fundoptionsID?: ModelIDInput | null,
  and?: Array< ModelFundRuleFilterInput | null > | null,
  or?: Array< ModelFundRuleFilterInput | null > | null,
  not?: ModelFundRuleFilterInput | null,
};

export type ModelFundFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  fund_balance?: ModelFloatInput | null,
  total_fund_size?: ModelFloatInput | null,
  placement_index?: ModelIntInput | null,
  type?: ModelFundTypesInput | null,
  and?: Array< ModelFundFilterInput | null > | null,
  or?: Array< ModelFundFilterInput | null > | null,
  not?: ModelFundFilterInput | null,
  fundFundOptionsId?: ModelIDInput | null,
};

export type ModelFundConnection = {
  __typename: "ModelFundConnection",
  items:  Array<Fund | null >,
  nextToken?: string | null,
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


export type ModelFundOptionsFilterInput = {
  id?: ModelIDInput | null,
  monthly_allocation?: ModelFloatInput | null,
  is_paused?: ModelBooleanInput | null,
  pause_duration_hours?: ModelFloatInput | null,
  categories?: ModelCategoriesInput | null,
  and?: Array< ModelFundOptionsFilterInput | null > | null,
  or?: Array< ModelFundOptionsFilterInput | null > | null,
  not?: ModelFundOptionsFilterInput | null,
};

export type ModelFundOptionsConnection = {
  __typename: "ModelFundOptionsConnection",
  items:  Array<FundOptions | null >,
  nextToken?: string | null,
};

export type ModelTransactionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  date?: ModelStringInput | null,
  memo?: ModelStringInput | null,
  iso_currency_code?: ModelStringInput | null,
  fundID?: ModelIDInput | null,
  and?: Array< ModelTransactionFilterInput | null > | null,
  or?: Array< ModelTransactionFilterInput | null > | null,
  not?: ModelTransactionFilterInput | null,
};

export type ModelSubscriptionFundRuleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  fundoptionsID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionFundRuleFilterInput | null > | null,
  or?: Array< ModelSubscriptionFundRuleFilterInput | null > | null,
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

export type ModelSubscriptionFundFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  icon?: ModelSubscriptionStringInput | null,
  fund_balance?: ModelSubscriptionFloatInput | null,
  total_fund_size?: ModelSubscriptionFloatInput | null,
  placement_index?: ModelSubscriptionIntInput | null,
  type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFundFilterInput | null > | null,
  or?: Array< ModelSubscriptionFundFilterInput | null > | null,
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

export type ModelSubscriptionFundOptionsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  monthly_allocation?: ModelSubscriptionFloatInput | null,
  is_paused?: ModelSubscriptionBooleanInput | null,
  pause_duration_hours?: ModelSubscriptionFloatInput | null,
  categories?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFundOptionsFilterInput | null > | null,
  or?: Array< ModelSubscriptionFundOptionsFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionTransactionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  date?: ModelSubscriptionStringInput | null,
  memo?: ModelSubscriptionStringInput | null,
  iso_currency_code?: ModelSubscriptionStringInput | null,
  fundID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
  or?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
};

export type CreateFundRuleMutationVariables = {
  input: CreateFundRuleInput,
  condition?: ModelFundRuleConditionInput | null,
};

export type CreateFundRuleMutation = {
  createFundRule?:  {
    __typename: "FundRule",
    id: string,
    name: string,
    description?: string | null,
    fundoptionsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFundRuleMutationVariables = {
  input: UpdateFundRuleInput,
  condition?: ModelFundRuleConditionInput | null,
};

export type UpdateFundRuleMutation = {
  updateFundRule?:  {
    __typename: "FundRule",
    id: string,
    name: string,
    description?: string | null,
    fundoptionsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFundRuleMutationVariables = {
  input: DeleteFundRuleInput,
  condition?: ModelFundRuleConditionInput | null,
};

export type DeleteFundRuleMutation = {
  deleteFundRule?:  {
    __typename: "FundRule",
    id: string,
    name: string,
    description?: string | null,
    fundoptionsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFundMutationVariables = {
  input: CreateFundInput,
  condition?: ModelFundConditionInput | null,
};

export type CreateFundMutation = {
  createFund?:  {
    __typename: "Fund",
    id: string,
    title: string,
    icon: string,
    fund_balance: number,
    total_fund_size: number,
    placement_index: number,
    type: FundTypes,
    FundOptions?:  {
      __typename: "FundOptions",
      id: string,
      monthly_allocation?: number | null,
      is_paused?: boolean | null,
      pause_duration_hours?: number | null,
      categories?: Categories | null,
      FundRules?:  {
        __typename: "ModelFundRuleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        amount: number,
        date: string,
        memo?: string | null,
        iso_currency_code?: string | null,
        fundID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    fundFundOptionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateFundMutationVariables = {
  input: UpdateFundInput,
  condition?: ModelFundConditionInput | null,
};

export type UpdateFundMutation = {
  updateFund?:  {
    __typename: "Fund",
    id: string,
    title: string,
    icon: string,
    fund_balance: number,
    total_fund_size: number,
    placement_index: number,
    type: FundTypes,
    FundOptions?:  {
      __typename: "FundOptions",
      id: string,
      monthly_allocation?: number | null,
      is_paused?: boolean | null,
      pause_duration_hours?: number | null,
      categories?: Categories | null,
      FundRules?:  {
        __typename: "ModelFundRuleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        amount: number,
        date: string,
        memo?: string | null,
        iso_currency_code?: string | null,
        fundID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    fundFundOptionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteFundMutationVariables = {
  input: DeleteFundInput,
  condition?: ModelFundConditionInput | null,
};

export type DeleteFundMutation = {
  deleteFund?:  {
    __typename: "Fund",
    id: string,
    title: string,
    icon: string,
    fund_balance: number,
    total_fund_size: number,
    placement_index: number,
    type: FundTypes,
    FundOptions?:  {
      __typename: "FundOptions",
      id: string,
      monthly_allocation?: number | null,
      is_paused?: boolean | null,
      pause_duration_hours?: number | null,
      categories?: Categories | null,
      FundRules?:  {
        __typename: "ModelFundRuleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        amount: number,
        date: string,
        memo?: string | null,
        iso_currency_code?: string | null,
        fundID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    fundFundOptionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateFundOptionsMutationVariables = {
  input: CreateFundOptionsInput,
  condition?: ModelFundOptionsConditionInput | null,
};

export type CreateFundOptionsMutation = {
  createFundOptions?:  {
    __typename: "FundOptions",
    id: string,
    monthly_allocation?: number | null,
    is_paused?: boolean | null,
    pause_duration_hours?: number | null,
    categories?: Categories | null,
    FundRules?:  {
      __typename: "ModelFundRuleConnection",
      items:  Array< {
        __typename: "FundRule",
        id: string,
        name: string,
        description?: string | null,
        fundoptionsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateFundOptionsMutationVariables = {
  input: UpdateFundOptionsInput,
  condition?: ModelFundOptionsConditionInput | null,
};

export type UpdateFundOptionsMutation = {
  updateFundOptions?:  {
    __typename: "FundOptions",
    id: string,
    monthly_allocation?: number | null,
    is_paused?: boolean | null,
    pause_duration_hours?: number | null,
    categories?: Categories | null,
    FundRules?:  {
      __typename: "ModelFundRuleConnection",
      items:  Array< {
        __typename: "FundRule",
        id: string,
        name: string,
        description?: string | null,
        fundoptionsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteFundOptionsMutationVariables = {
  input: DeleteFundOptionsInput,
  condition?: ModelFundOptionsConditionInput | null,
};

export type DeleteFundOptionsMutation = {
  deleteFundOptions?:  {
    __typename: "FundOptions",
    id: string,
    monthly_allocation?: number | null,
    is_paused?: boolean | null,
    pause_duration_hours?: number | null,
    categories?: Categories | null,
    FundRules?:  {
      __typename: "ModelFundRuleConnection",
      items:  Array< {
        __typename: "FundRule",
        id: string,
        name: string,
        description?: string | null,
        fundoptionsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
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
    date: string,
    memo?: string | null,
    iso_currency_code?: string | null,
    fundID: string,
    createdAt: string,
    updatedAt: string,
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
    date: string,
    memo?: string | null,
    iso_currency_code?: string | null,
    fundID: string,
    createdAt: string,
    updatedAt: string,
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
    date: string,
    memo?: string | null,
    iso_currency_code?: string | null,
    fundID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetFundRuleQueryVariables = {
  id: string,
};

export type GetFundRuleQuery = {
  getFundRule?:  {
    __typename: "FundRule",
    id: string,
    name: string,
    description?: string | null,
    fundoptionsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFundRulesQueryVariables = {
  filter?: ModelFundRuleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFundRulesQuery = {
  listFundRules?:  {
    __typename: "ModelFundRuleConnection",
    items:  Array< {
      __typename: "FundRule",
      id: string,
      name: string,
      description?: string | null,
      fundoptionsID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFundQueryVariables = {
  id: string,
};

export type GetFundQuery = {
  getFund?:  {
    __typename: "Fund",
    id: string,
    title: string,
    icon: string,
    fund_balance: number,
    total_fund_size: number,
    placement_index: number,
    type: FundTypes,
    FundOptions?:  {
      __typename: "FundOptions",
      id: string,
      monthly_allocation?: number | null,
      is_paused?: boolean | null,
      pause_duration_hours?: number | null,
      categories?: Categories | null,
      FundRules?:  {
        __typename: "ModelFundRuleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        amount: number,
        date: string,
        memo?: string | null,
        iso_currency_code?: string | null,
        fundID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    fundFundOptionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListFundsQueryVariables = {
  filter?: ModelFundFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFundsQuery = {
  listFunds?:  {
    __typename: "ModelFundConnection",
    items:  Array< {
      __typename: "Fund",
      id: string,
      title: string,
      icon: string,
      fund_balance: number,
      total_fund_size: number,
      placement_index: number,
      type: FundTypes,
      FundOptions?:  {
        __typename: "FundOptions",
        id: string,
        monthly_allocation?: number | null,
        is_paused?: boolean | null,
        pause_duration_hours?: number | null,
        categories?: Categories | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      fundFundOptionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ByPlacementIndexQueryVariables = {
  type: FundTypes,
  placement_index?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFundFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByPlacementIndexQuery = {
  byPlacementIndex?:  {
    __typename: "ModelFundConnection",
    items:  Array< {
      __typename: "Fund",
      id: string,
      title: string,
      icon: string,
      fund_balance: number,
      total_fund_size: number,
      placement_index: number,
      type: FundTypes,
      FundOptions?:  {
        __typename: "FundOptions",
        id: string,
        monthly_allocation?: number | null,
        is_paused?: boolean | null,
        pause_duration_hours?: number | null,
        categories?: Categories | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Transactions?:  {
        __typename: "ModelTransactionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      fundFundOptionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFundOptionsQueryVariables = {
  id: string,
};

export type GetFundOptionsQuery = {
  getFundOptions?:  {
    __typename: "FundOptions",
    id: string,
    monthly_allocation?: number | null,
    is_paused?: boolean | null,
    pause_duration_hours?: number | null,
    categories?: Categories | null,
    FundRules?:  {
      __typename: "ModelFundRuleConnection",
      items:  Array< {
        __typename: "FundRule",
        id: string,
        name: string,
        description?: string | null,
        fundoptionsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListFundOptionsQueryVariables = {
  filter?: ModelFundOptionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFundOptionsQuery = {
  listFundOptions?:  {
    __typename: "ModelFundOptionsConnection",
    items:  Array< {
      __typename: "FundOptions",
      id: string,
      monthly_allocation?: number | null,
      is_paused?: boolean | null,
      pause_duration_hours?: number | null,
      categories?: Categories | null,
      FundRules?:  {
        __typename: "ModelFundRuleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
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
    date: string,
    memo?: string | null,
    iso_currency_code?: string | null,
    fundID: string,
    createdAt: string,
    updatedAt: string,
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
      date: string,
      memo?: string | null,
      iso_currency_code?: string | null,
      fundID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFundRuleSubscriptionVariables = {
  filter?: ModelSubscriptionFundRuleFilterInput | null,
};

export type OnCreateFundRuleSubscription = {
  onCreateFundRule?:  {
    __typename: "FundRule",
    id: string,
    name: string,
    description?: string | null,
    fundoptionsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFundRuleSubscriptionVariables = {
  filter?: ModelSubscriptionFundRuleFilterInput | null,
};

export type OnUpdateFundRuleSubscription = {
  onUpdateFundRule?:  {
    __typename: "FundRule",
    id: string,
    name: string,
    description?: string | null,
    fundoptionsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFundRuleSubscriptionVariables = {
  filter?: ModelSubscriptionFundRuleFilterInput | null,
};

export type OnDeleteFundRuleSubscription = {
  onDeleteFundRule?:  {
    __typename: "FundRule",
    id: string,
    name: string,
    description?: string | null,
    fundoptionsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFundSubscriptionVariables = {
  filter?: ModelSubscriptionFundFilterInput | null,
  owner?: string | null,
};

export type OnCreateFundSubscription = {
  onCreateFund?:  {
    __typename: "Fund",
    id: string,
    title: string,
    icon: string,
    fund_balance: number,
    total_fund_size: number,
    placement_index: number,
    type: FundTypes,
    FundOptions?:  {
      __typename: "FundOptions",
      id: string,
      monthly_allocation?: number | null,
      is_paused?: boolean | null,
      pause_duration_hours?: number | null,
      categories?: Categories | null,
      FundRules?:  {
        __typename: "ModelFundRuleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        amount: number,
        date: string,
        memo?: string | null,
        iso_currency_code?: string | null,
        fundID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    fundFundOptionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateFundSubscriptionVariables = {
  filter?: ModelSubscriptionFundFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFundSubscription = {
  onUpdateFund?:  {
    __typename: "Fund",
    id: string,
    title: string,
    icon: string,
    fund_balance: number,
    total_fund_size: number,
    placement_index: number,
    type: FundTypes,
    FundOptions?:  {
      __typename: "FundOptions",
      id: string,
      monthly_allocation?: number | null,
      is_paused?: boolean | null,
      pause_duration_hours?: number | null,
      categories?: Categories | null,
      FundRules?:  {
        __typename: "ModelFundRuleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        amount: number,
        date: string,
        memo?: string | null,
        iso_currency_code?: string | null,
        fundID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    fundFundOptionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteFundSubscriptionVariables = {
  filter?: ModelSubscriptionFundFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFundSubscription = {
  onDeleteFund?:  {
    __typename: "Fund",
    id: string,
    title: string,
    icon: string,
    fund_balance: number,
    total_fund_size: number,
    placement_index: number,
    type: FundTypes,
    FundOptions?:  {
      __typename: "FundOptions",
      id: string,
      monthly_allocation?: number | null,
      is_paused?: boolean | null,
      pause_duration_hours?: number | null,
      categories?: Categories | null,
      FundRules?:  {
        __typename: "ModelFundRuleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        amount: number,
        date: string,
        memo?: string | null,
        iso_currency_code?: string | null,
        fundID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    fundFundOptionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateFundOptionsSubscriptionVariables = {
  filter?: ModelSubscriptionFundOptionsFilterInput | null,
  owner?: string | null,
};

export type OnCreateFundOptionsSubscription = {
  onCreateFundOptions?:  {
    __typename: "FundOptions",
    id: string,
    monthly_allocation?: number | null,
    is_paused?: boolean | null,
    pause_duration_hours?: number | null,
    categories?: Categories | null,
    FundRules?:  {
      __typename: "ModelFundRuleConnection",
      items:  Array< {
        __typename: "FundRule",
        id: string,
        name: string,
        description?: string | null,
        fundoptionsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateFundOptionsSubscriptionVariables = {
  filter?: ModelSubscriptionFundOptionsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFundOptionsSubscription = {
  onUpdateFundOptions?:  {
    __typename: "FundOptions",
    id: string,
    monthly_allocation?: number | null,
    is_paused?: boolean | null,
    pause_duration_hours?: number | null,
    categories?: Categories | null,
    FundRules?:  {
      __typename: "ModelFundRuleConnection",
      items:  Array< {
        __typename: "FundRule",
        id: string,
        name: string,
        description?: string | null,
        fundoptionsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteFundOptionsSubscriptionVariables = {
  filter?: ModelSubscriptionFundOptionsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFundOptionsSubscription = {
  onDeleteFundOptions?:  {
    __typename: "FundOptions",
    id: string,
    monthly_allocation?: number | null,
    is_paused?: boolean | null,
    pause_duration_hours?: number | null,
    categories?: Categories | null,
    FundRules?:  {
      __typename: "ModelFundRuleConnection",
      items:  Array< {
        __typename: "FundRule",
        id: string,
        name: string,
        description?: string | null,
        fundoptionsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    date: string,
    memo?: string | null,
    iso_currency_code?: string | null,
    fundID: string,
    createdAt: string,
    updatedAt: string,
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
    date: string,
    memo?: string | null,
    iso_currency_code?: string | null,
    fundID: string,
    createdAt: string,
    updatedAt: string,
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
    date: string,
    memo?: string | null,
    iso_currency_code?: string | null,
    fundID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
