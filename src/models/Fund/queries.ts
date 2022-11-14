export const listSortedBudgets = /* GraphQL */ `
  query listSortedBudgets {
    byPlacementIndex(type: BUDGET, sortDirection: DESC) {
      items {
        title
        icon
        fund_balance
        total_fund_size
        placement_index
        type
        owner
      }
    }
  }
`;

export const listSortedGoals = /* GraphQL */ `
  query listSortedBudgets {
    byPlacementIndex(type: GOAL, sortDirection: DESC) {
      items {
        title
        icon
        fund_balance
        total_fund_size
        placement_index
        type
        owner
      }
    }
  }
`;
