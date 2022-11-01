// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const Categories = {
  NEED: "NEED",
  SAVE: "SAVE",
  WANT: "WANT",
};

const { Transaction, SavingGoal, User, Budget } = initSchema(schema);

export { Transaction, SavingGoal, User, Budget, Categories };
