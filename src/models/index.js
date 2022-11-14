// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Categories = {
  "NEED": "NEED",
  "SAVE": "SAVE",
  "WANT": "WANT"
};

const BalanceTypes = {
  "GOAL": "GOAL",
  "BUDGET": "BUDGET"
};

const { Transaction, BalanceOptions, BalanceRule, Balance } = initSchema(schema);

export {
  Transaction,
  BalanceOptions,
  BalanceRule,
  Balance,
  Categories,
  BalanceTypes
};