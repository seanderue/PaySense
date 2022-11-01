export const schema = {
  models: {
    Transaction: {
      name: "Transaction",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        name: {
          name: "name",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        amount: {
          name: "amount",
          isArray: false,
          type: "Float",
          isRequired: true,
          attributes: [],
        },
        date: {
          name: "date",
          isArray: false,
          type: "AWSDate",
          isRequired: true,
          attributes: [],
        },
        memo: {
          name: "memo",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        is_sorted: {
          name: "is_sorted",
          isArray: false,
          type: "Boolean",
          isRequired: true,
          attributes: [],
        },
        iso_currency_code: {
          name: "iso_currency_code",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        budgetID: {
          name: "budgetID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Transactions",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "byBudget",
            fields: ["budgetID"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    SavingGoal: {
      name: "SavingGoal",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        name: {
          name: "name",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        percent_of_income: {
          name: "percent_of_income",
          isArray: false,
          type: "Float",
          isRequired: true,
          attributes: [],
        },
        date_created: {
          name: "date_created",
          isArray: false,
          type: "AWSDate",
          isRequired: true,
          attributes: [],
        },
        date_affordable: {
          name: "date_affordable",
          isArray: false,
          type: "AWSDate",
          isRequired: true,
          attributes: [],
        },
        is_paused: {
          name: "is_paused",
          isArray: false,
          type: "Boolean",
          isRequired: false,
          attributes: [],
        },
        pause_duration_hour: {
          name: "pause_duration_hour",
          isArray: false,
          type: "Int",
          isRequired: false,
          attributes: [],
        },
        userID: {
          name: "userID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "SavingGoals",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "byUser",
            fields: ["userID"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
              {
                provider: "userPools",
                ownerField: "owner",
                allow: "owner",
                identityClaim: "cognito:username",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    User: {
      name: "User",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        username: {
          name: "username",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        Budgets: {
          name: "Budgets",
          isArray: true,
          type: {
            model: "SavingGoal",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: "userID",
          },
        },
        email: {
          name: "email",
          isArray: false,
          type: "AWSEmail",
          isRequired: true,
          attributes: [],
        },
        income_distribution: {
          name: "income_distribution",
          isArray: true,
          type: "AWSJSON",
          isRequired: true,
          attributes: [],
          isArrayNullable: false,
        },
        is_premium: {
          name: "is_premium",
          isArray: false,
          type: "Boolean",
          isRequired: true,
          attributes: [],
        },
        img: {
          name: "img",
          isArray: false,
          type: "AWSURL",
          isRequired: false,
          attributes: [],
        },
        promo_code: {
          name: "promo_code",
          isArray: false,
          type: "AWSURL",
          isRequired: false,
          attributes: [],
        },
        SavingGoals: {
          name: "SavingGoals",
          isArray: true,
          type: {
            model: "SavingGoal",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: "userID",
          },
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Users",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
              {
                provider: "userPools",
                ownerField: "owner",
                allow: "owner",
                identityClaim: "cognito:username",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    Budget: {
      name: "Budget",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        name: {
          name: "name",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        percent_of_income: {
          name: "percent_of_income",
          isArray: false,
          type: "Float",
          isRequired: true,
          attributes: [],
        },
        balance: {
          name: "balance",
          isArray: false,
          type: "Float",
          isRequired: true,
          attributes: [],
        },
        img: {
          name: "img",
          isArray: false,
          type: "AWSURL",
          isRequired: true,
          attributes: [],
        },
        userID: {
          name: "userID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        category: {
          name: "category",
          isArray: false,
          type: {
            enum: "Categories",
          },
          isRequired: false,
          attributes: [],
        },
        Transactions: {
          name: "Transactions",
          isArray: true,
          type: {
            model: "Transaction",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: "budgetID",
          },
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Budgets",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "byUser",
            fields: ["userID"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
              {
                provider: "userPools",
                ownerField: "owner",
                allow: "owner",
                identityClaim: "cognito:username",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
  },
  enums: {
    Categories: {
      name: "Categories",
      values: ["NEED", "SAVE", "WANT"],
    },
  },
  nonModels: {},
  version: "7b2704f9d0a8a87a7074441d7963e9e9",
};
