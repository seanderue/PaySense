import { ListBudgetsQuery } from "../../API";
import { GraphQLResult } from "@aws-amplify/api";
import { Storage } from "@aws-amplify/storage";
import { BudgetCardProps } from "../../../components/BudgetButtons/types";
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
  ListBudgetsQuery: GraphQLResult<ListBudgetsQuery>
): BudgetCardProps[] {
  return (
    ListBudgetsQuery.data?.listBudgets?.items?.map(
      (budget) =>
        ({
          id: budget?.id,
          title: budget?.name,
          balance: budget?.balance || 5.0,
          background: { uri: `${budget?.img}` },
        } as BudgetCardProps)
    ) || []
  );
}

export { mapListBudgetsQuery as mapListBudgets };
