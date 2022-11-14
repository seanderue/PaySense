import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum Categories {
  NEED = "NEED",
  SAVE = "SAVE",
  WANT = "WANT"
}

export enum BalanceTypes {
  GOAL = "GOAL",
  BUDGET = "BUDGET"
}

type TransactionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BalanceOptionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BalanceRuleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BalanceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerTransaction = {
  readonly id: string;
  readonly name: string;
  readonly amount: number;
  readonly date?: string | null;
  readonly memo?: string | null;
  readonly iso_currency_code?: string | null;
  readonly balanceID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTransaction = {
  readonly id: string;
  readonly name: string;
  readonly amount: number;
  readonly date?: string | null;
  readonly memo?: string | null;
  readonly iso_currency_code?: string | null;
  readonly balanceID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Transaction = LazyLoading extends LazyLoadingDisabled ? EagerTransaction : LazyTransaction

export declare const Transaction: (new (init: ModelInit<Transaction, TransactionMetaData>) => Transaction) & {
  copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction, TransactionMetaData>) => MutableModel<Transaction, TransactionMetaData> | void): Transaction;
}

type EagerBalanceOptions = {
  readonly id: string;
  readonly monthly_allocation?: number | null;
  readonly is_paused?: boolean | null;
  readonly pause_duration_hours?: number | null;
  readonly category?: Categories | keyof typeof Categories | null;
  readonly BalanceRules?: (BalanceRule | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBalanceOptions = {
  readonly id: string;
  readonly monthly_allocation?: number | null;
  readonly is_paused?: boolean | null;
  readonly pause_duration_hours?: number | null;
  readonly category?: Categories | keyof typeof Categories | null;
  readonly BalanceRules: AsyncCollection<BalanceRule>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BalanceOptions = LazyLoading extends LazyLoadingDisabled ? EagerBalanceOptions : LazyBalanceOptions

export declare const BalanceOptions: (new (init: ModelInit<BalanceOptions, BalanceOptionsMetaData>) => BalanceOptions) & {
  copyOf(source: BalanceOptions, mutator: (draft: MutableModel<BalanceOptions, BalanceOptionsMetaData>) => MutableModel<BalanceOptions, BalanceOptionsMetaData> | void): BalanceOptions;
}

type EagerBalanceRule = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly balance_optionsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBalanceRule = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly balance_optionsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BalanceRule = LazyLoading extends LazyLoadingDisabled ? EagerBalanceRule : LazyBalanceRule

export declare const BalanceRule: (new (init: ModelInit<BalanceRule, BalanceRuleMetaData>) => BalanceRule) & {
  copyOf(source: BalanceRule, mutator: (draft: MutableModel<BalanceRule, BalanceRuleMetaData>) => MutableModel<BalanceRule, BalanceRuleMetaData> | void): BalanceRule;
}

type EagerBalance = {
  readonly id: string;
  readonly title: string;
  readonly icon: string;
  readonly fund_balance: number;
  readonly total_fund_size: number;
  readonly placement_index: number;
  readonly type: BalanceTypes | keyof typeof BalanceTypes;
  readonly BalanceOptions?: BalanceOptions | null;
  readonly Transactions?: (Transaction | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly balanceBalanceOptionsId?: string | null;
}

type LazyBalance = {
  readonly id: string;
  readonly title: string;
  readonly icon: string;
  readonly fund_balance: number;
  readonly total_fund_size: number;
  readonly placement_index: number;
  readonly type: BalanceTypes | keyof typeof BalanceTypes;
  readonly BalanceOptions: AsyncItem<BalanceOptions | undefined>;
  readonly Transactions: AsyncCollection<Transaction>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly balanceBalanceOptionsId?: string | null;
}

export declare type Balance = LazyLoading extends LazyLoadingDisabled ? EagerBalance : LazyBalance

export declare const Balance: (new (init: ModelInit<Balance, BalanceMetaData>) => Balance) & {
  copyOf(source: Balance, mutator: (draft: MutableModel<Balance, BalanceMetaData>) => MutableModel<Balance, BalanceMetaData> | void): Balance;
}