import { DataStore } from "@aws-amplify/datastore";
import { Fund, FundTypes, FundOptions } from "../../src/models";
import { FundButtonProps } from "../../components/FundButtons/types";
import { useEffect } from "react";

export const newFund = async ({
  title,
  emojiIcon,
  fundBalance,
  totalFundSize,
  placementIndex,
  fundType,
}: FundButtonProps) => {
  await DataStore.save(
    new Fund({
      title: title,
      icon: emojiIcon,
      fund_balance: fundBalance,
      total_fund_size: totalFundSize,
      placement_index: placementIndex,
      type: fundType,
      FundOptions: null,
      Transactions: [],
    })
  );
};

export const useEditFund = (fundId: string) => {
  useEffect(() => {
    /**
     * This keeps `Fund` fresh.
     */
    const sub = DataStore.observeQuery(Fund, (fund) =>
      //@ts-ignore
      fund.id.eq(fundId)
    ).subscribe(({ items }) => {
      console.log(items);
    });

    return () => {
      sub.unsubscribe();
    };
  }, []);
};
