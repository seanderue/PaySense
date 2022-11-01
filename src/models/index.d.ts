import {
  ModelInit,
  MutableModel,
  PersistentModelConstructor,
} from "@aws-amplify/datastore";

export enum Categories {
  NEED = "NEED",
  SAVE = "SAVE",
  WANT = "WANT",
}

type TransactionMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type SavingGoalMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type UserMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type BudgetMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

export declare class Transaction {
  readonly id: string;
  readonly name: string;
  readonly amount: number;
  readonly date: string;
  readonly memo?: string | null;
  readonly is_sorted: boolean;
  readonly iso_currency_code: string;
  readonly budgetID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Transaction, TransactionMetaData>);
  static copyOf(
    source: Transaction,
    mutator: (
      draft: MutableModel<Transaction, TransactionMetaData>
    ) => MutableModel<Transaction, TransactionMetaData> | void
  ): Transaction;
}

export declare class SavingGoal {
  readonly id: string;
  readonly name: string;
  readonly percent_of_income: number;
  readonly date_created: string;
  readonly date_affordable: string;
  readonly is_paused?: boolean | null;
  readonly pause_duration_hour?: number | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SavingGoal, SavingGoalMetaData>);
  static copyOf(
    source: SavingGoal,
    mutator: (
      draft: MutableModel<SavingGoal, SavingGoalMetaData>
    ) => MutableModel<SavingGoal, SavingGoalMetaData> | void
  ): SavingGoal;
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly Budgets?: (SavingGoal | null)[] | null;
  readonly email: string;
  readonly income_distribution: string[];
  readonly is_premium: boolean;
  readonly img?: string | null;
  readonly promo_code?: string | null;
  readonly SavingGoals?: (SavingGoal | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(
    source: User,
    mutator: (
      draft: MutableModel<User, UserMetaData>
    ) => MutableModel<User, UserMetaData> | void
  ): User;
}

export declare class Budget {
  readonly id: string;
  readonly name: string;
  readonly percent_of_income: number;
  readonly balance: number;
  readonly img: string;
  readonly userID: string;
  readonly category?: Categories | keyof typeof Categories | null;
  readonly Transactions?: (Transaction | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Budget, BudgetMetaData>);
  static copyOf(
    source: Budget,
    mutator: (
      draft: MutableModel<Budget, BudgetMetaData>
    ) => MutableModel<Budget, BudgetMetaData> | void
  ): Budget;
}
