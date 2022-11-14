import { ByPlacementIndexQuery } from "../../API";
import { GraphQLResult } from "@aws-amplify/api";
import { Storage } from "@aws-amplify/storage";
import { FundButtonProps } from "../../../components/FundButtons/types";
import { ImageURISource } from "react-native";

// interface BudgetCardProps {
//     id: string;
//     title: string;
//     balance: number;
//     flag?: boolean;
//     background: ImageSourcePropType;
// }

//Depreciated Function: Marked for deletion
async function retrieveImage(imgURI: any): Promise<string | null | undefined> {
  try {
    const fileAccessURL: string | null | undefined = await Storage.get(imgURI);
    console.log("access url ", fileAccessURL);
    return fileAccessURL;
  } catch (e) {
    console.error("error accessing the file from s3:", e);
    return;
  }
}

function mapListBudgetsQuery(
  sortedBudgets: GraphQLResult<ByPlacementIndexQuery>
): FundButtonProps[] {
  return (
    sortedBudgets.data?.byPlacementIndex?.items?.map(
      (budget) =>
        ({
          id: budget?.id,
          placement_index: budget?.placement_index,
          title: budget?.title,
          balance: budget?.fund_balance || -69.0,
          emojiIcon: budget?.icon,
          percentRemaining: budget
            ? budget.fund_balance / budget.total_fund_size
            : 0,
          fundType: "BUDGET",
        } as FundButtonProps)
    ) || []
  );
}

export { mapListBudgetsQuery as mapListBudgets };
