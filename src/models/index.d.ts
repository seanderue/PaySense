import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import {
  LazyLoading,
  LazyLoadingDisabled,
  AsyncItem,
  AsyncCollection,
} from "@aws-amplify/datastore";

export enum FundTypes {
  BUDGET = "BUDGET",
  GOAL = "GOAL",
}

export enum Categories {
  NEED = "NEED",
  SAVE = "SAVE",
  WANT = "WANT",
}

type FundMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type FundOptionsMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type FundRuleMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type TransactionMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type EagerFund = {
  readonly id: string;
  readonly title: string;
  readonly icon: string;
  readonly fund_balance: number;
  readonly total_fund_size: number;
  readonly placement_index: number;
  readonly type: FundTypes | keyof typeof FundTypes;
  readonly FundOptions?: FundOptions | null;
  readonly Transactions?: (Transaction | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly fundFundOptionsId?: string | null;
};

type LazyFund = {
  readonly id: string;
  readonly title: string;
  readonly icon: string;
  readonly fund_balance: number;
  readonly total_fund_size: number;
  readonly placement_index: number;
  readonly type: FundTypes | keyof typeof FundTypes;
  readonly FundOptions: AsyncItem<FundOptions | undefined>;
  readonly Transactions: AsyncCollection<Transaction>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly fundFundOptionsId?: string | null;
};

export declare type Fund = LazyLoading extends LazyLoadingDisabled
  ? EagerFund
  : LazyFund;

export declare const Fund: (new (
  init: ModelInit<Fund, FundMetaData>
) => Fund) & {
  copyOf(
    source: Fund,
    mutator: (
      draft: MutableModel<Fund, FundMetaData>
    ) => MutableModel<Fund, FundMetaData> | void
  ): Fund;
};

type EagerFundOptions = {
  readonly id: string;
  readonly monthly_allocation?: number | null;
  readonly is_paused?: boolean | null;
  readonly pause_duration_hours?: number | null;
  readonly categories?: Categories | keyof typeof Categories | null;
  readonly FundRules?: (FundRule | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyFundOptions = {
  readonly id: string;
  readonly monthly_allocation?: number | null;
  readonly is_paused?: boolean | null;
  readonly pause_duration_hours?: number | null;
  readonly categories?: Categories | keyof typeof Categories | null;
  readonly FundRules: AsyncCollection<FundRule>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type FundOptions = LazyLoading extends LazyLoadingDisabled
  ? EagerFundOptions
  : LazyFundOptions;

export declare const FundOptions: (new (
  init: ModelInit<FundOptions, FundOptionsMetaData>
) => FundOptions) & {
  copyOf(
    source: FundOptions,
    mutator: (
      draft: MutableModel<FundOptions, FundOptionsMetaData>
    ) => MutableModel<FundOptions, FundOptionsMetaData> | void
  ): FundOptions;
};

type EagerFundRule = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly fundoptionsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyFundRule = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly fundoptionsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type FundRule = LazyLoading extends LazyLoadingDisabled
  ? EagerFundRule
  : LazyFundRule;

export declare const FundRule: (new (
  init: ModelInit<FundRule, FundRuleMetaData>
) => FundRule) & {
  copyOf(
    source: FundRule,
    mutator: (
      draft: MutableModel<FundRule, FundRuleMetaData>
    ) => MutableModel<FundRule, FundRuleMetaData> | void
  ): FundRule;
};

type EagerTransaction = {
  readonly id: string;
  readonly name: string;
  readonly amount: number;
  readonly date: string;
  readonly memo?: string | null;
  readonly iso_currency_code?: string | null;
  readonly fundID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyTransaction = {
  readonly id: string;
  readonly name: string;
  readonly amount: number;
  readonly date: string;
  readonly memo?: string | null;
  readonly iso_currency_code?: string | null;
  readonly fundID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Transaction = LazyLoading extends LazyLoadingDisabled
  ? EagerTransaction
  : LazyTransaction;

export declare const Transaction: (new (
  init: ModelInit<Transaction, TransactionMetaData>
) => Transaction) & {
  copyOf(
    source: Transaction,
    mutator: (
      draft: MutableModel<Transaction, TransactionMetaData>
    ) => MutableModel<Transaction, TransactionMetaData> | void
  ): Transaction;
};
