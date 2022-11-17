// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const FundTypes = {
  BUDGET: "BUDGET",
  GOAL: "GOAL",
};

const Categories = {
  NEED: "NEED",
  SAVE: "SAVE",
  WANT: "WANT",
};

const { Fund, FundOptions, FundRule, Transaction } = initSchema(schema);

export { Fund, FundOptions, FundRule, Transaction, FundTypes, Categories };
