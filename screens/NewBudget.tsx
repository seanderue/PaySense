import React, { FC, useEffect, useState } from "react";
import { Pressable, StyleSheet, View, Text, TextInput } from "react-native";
import { SectionHeader } from "../components/SectionHeader/SectionHeader";
import { DataStore } from "@aws-amplify/datastore";
import { Fund, FundTypes, FundOptions, EagerFund } from "../src/models";
import { colors } from "../components/shared/colors";
import { newFund } from "../util/dataStoreHelpers/dataHelpers";
import { FundButtonProps } from "../components/FundButtons/types";
import { Predicates } from "aws-amplify";

export const NewBudget: FC = () => {
  const [fund, setFund] = useState<Fund>(
    new Fund({
      title: "",
      icon: "",
      fund_balance: 0,
      total_fund_size: 0,
      placement_index: 0,
      type: FundTypes.BUDGET,
    })
  );
  const [funds, setFunds] = useState<Fund[]>([]);

  useEffect(() => {
    fetchFunds();
    try {
      const subscription = DataStore.observe(Fund).subscribe(() =>
        fetchFunds()
      );
      return () => subscription.unsubscribe();
    } catch (error) {
      console.log("Error subscribing to Fund model", error);
    }
  }, []);

  useEffect(() => {
    console.log(`Latest Placement Index Updated to: ${funds?.length + 1}`);
    setFund(
      Fund.copyOf(fund!, (draft) => {
        draft.placement_index = funds?.length + 1;
      })
    );
  }, [funds]);

  function onChangeText(key: string, value: any) {
    /**
     * Each keypress updates the post in local react state.
     */
    switch (key) {
      case "title":
        setFund(
          Fund.copyOf(fund!, (draft) => {
            draft.title = value;
          })
        );
        break;
      case "icon":
        setFund(
          Fund.copyOf(fund!, (draft) => {
            draft.icon = value;
          })
        );
        break;
      case "fund_balance":
        setFund(
          Fund.copyOf(fund!, (draft) => {
            draft.fund_balance = value;
          })
        );
        break;
      case "total_fund_size":
        setFund(
          Fund.copyOf(fund!, (draft) => {
            draft.total_fund_size = value;
          })
        );
        break;
      default:
        console.warn(
          "Key called in onChangeText() does not match a switch case within it"
        );
    }
    console.log(JSON.stringify(fund, null, 2));
  }

  async function deleteAllFunds() {
    try {
      await DataStore.delete(Fund, Predicates.ALL);
      fetchFunds();
    } catch (error) {
      console.log("Error deleting all Fund models", error);
    }
  }

  async function fetchFunds() {
    try {
      const funds = await DataStore.query(Fund);
      setFunds(funds);
    } catch (error) {
      console.log("Error querying Fund model", error);
    }
  }

  async function createFund() {
    if (
      !fund!.title ||
      !fund!.icon ||
      !fund!.fund_balance ||
      !fund!.total_fund_size ||
      !fund!.type
    ) {
      console.log("formState returned falsy values");
      console.log(fund!.title ? "title truth" : "title falsy");
      console.log(fund!.icon ? "icon truth" : "icon falsy");
      console.log(
        fund!.fund_balance ? "fund_balance truth" : "fund_balance falsy"
      );
      console.log(
        fund!.total_fund_size
          ? "total_fund_size truth"
          : "total_fund_size falsy"
      );
      console.log(fund!.type ? "type truth" : "type falsy");
      console.log(fund!.title);
      return;
    }

    try {
      await DataStore.save(fund!);
      setFund(
        new Fund({
          title: "",
          icon: "",
          fund_balance: 0,
          total_fund_size: 0,
          placement_index: 0,
          type: FundTypes.BUDGET,
        })
      );
      console.log("Post saved successfully!");
    } catch (error) {
      console.log("Error saving post", error);
    }
    console.log(`placement_index updated to: ${fund!.placement_index}`);
    // setFund();
    // May need to somehow clear the form here
  }

  // useEffect(() => {
  //   /**
  //    * This keeps `Fund` fresh.
  //    */
  //   const sub = DataStore.observeQuery(Fund, (fund) =>
  //     //@ts-ignore
  //     fund.id.eq("546fdfd7-b82e-443a-b6a2-b519e956bd68")
  //   ).subscribe(({ items }) => {
  //     console.log(items);
  //   });

  //   return () => {
  //     sub.unsubscribe();
  //   };
  // }, []);

  // const id = "546fdfd7-b82e-443a-b6a2-b519e956bd68";

  // const subscription = DataStore.observeQuery(Fund, (f) =>
  //   f.and((f) => f.title.beginsWith(id))
  // ).subscribe((snapshot) => {
  //   const { items, isSynced } = snapshot;
  //   console.log(
  //     `[Snapshot] item count: ${items.length}, isSynced: ${isSynced}`
  //   );
  // });

  // useEffect(() => {
  //   /**
  //    * This keeps `Fund` fresh.
  //    */
  //   const sub = DataStore.observeQuery(Fund, (fund) =>
  //     fund.id.contains(id)).subscribe(({ items }) => {
  //     console.log( items)
  //   });

  //   return () => {
  //     sub.unsubscribe();
  //   };
  // }, []);

  const queryFunds = async () => {
    try {
      return await DataStore.query(Fund);
    } catch (error) {
      console.log("Error querying Fund model", error);
      return null;
    }
  };

  const newFundTemplate: FundButtonProps = {
    id: "template-id-1",
    title: "Wedding",
    emojiIcon: "💎",
    fundBalance: 120,
    totalFundSize: 300,
    placementIndex: 0,
    fundType: FundTypes.BUDGET,
  };

  const deleteFund = async () => {
    try {
      const modelToDelete = await queryFunds();
      modelToDelete && DataStore.delete(modelToDelete[0]);
      fetchFunds();
    } catch (error) {
      console.log("Error deleting model Fund[0]", error);
    }
  };

  const clearLocalStorage = async () => {
    try {
      await DataStore.clear();
    } catch (error) {
      console.log("Error deleting local storage", error);
    }
  };

  const startSync = async () => {
    try {
      await DataStore.start();
    } catch (error) {
      console.log("Error starting sync", error);
    }
  };

  return (
    <View>
      <SectionHeader text={"Budget Name"} />
      <Text>Budget Title</Text>
      <TextInput
        onChangeText={(value) => onChangeText("title", value)}
        placeholder="Budget Title"
        value={fund?.title}
        style={styles.input}
      />
      <Text>Budget Icon</Text>
      <TextInput
        onChangeText={(value) => onChangeText("icon", value)}
        placeholder="Budget Icon"
        value={fund?.icon}
        style={styles.input}
      />
      <Text>Fund Balance</Text>
      <TextInput
        onChangeText={(value) => onChangeText("fund_balance", Number(value))}
        placeholder="Fund Balance"
        value={`${fund?.fund_balance}`}
        style={styles.input}
      />
      <Text>Fund Size</Text>
      <TextInput
        onChangeText={(value) => onChangeText("total_fund_size", Number(value))}
        placeholder="Fund Size"
        value={`${fund?.total_fund_size}`}
        style={styles.input}
      />
      <Pressable
        onPress={deleteFund}
        style={[styles.button, { backgroundColor: colors.redDark }]}
      >
        <Text>Delete 0th fund</Text>
      </Pressable>
      <Pressable
        onPress={async () => {
          console.log(JSON.stringify(await queryFunds(), null, 4));
          console.log(
            `funds count: ${
              (await queryFunds()) ? funds.length : "queryFunds returned Null"
            }`
          );
        }}
        style={[styles.button, { backgroundColor: colors.greenDark }]}
      >
        <Text>log funds count</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          createFund();
        }}
        style={[styles.button, { backgroundColor: colors.gradientBlue }]}
      >
        <Text>Create New fund</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          console.group();
          console.log(JSON.stringify(fund, null, 2));
          console.groupEnd();
          // console.log(funds)
        }}
        style={[styles.button, { backgroundColor: colors.gradientBlue }]}
      >
        <Text>Log fund state</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          console.log(JSON.stringify(funds, null, 2));
          // console.log(funds)
        }}
        style={[styles.button, { backgroundColor: colors.gradientBlue }]}
      >
        <Text>Log funds state</Text>
      </Pressable>
      <Pressable
        onPress={() => deleteFund()}
        style={[styles.button, { backgroundColor: colors.red }]}
      >
        <Text>Delete index 0 fund</Text>
      </Pressable>
      <Pressable
        onPress={() => deleteAllFunds()}
        style={[styles.button, { backgroundColor: colors.red }]}
      >
        <Text>Delete ALL funds</Text>
      </Pressable>
      <Pressable
        onPress={() => clearLocalStorage()}
        style={[styles.button, { backgroundColor: colors.red }]}
      >
        <Text>Clear local storage</Text>
      </Pressable>
      <Pressable
        onPress={() => startSync()}
        style={[styles.button, { backgroundColor: colors.gradientOrange }]}
      >
        <Text>Force Sync</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  newBudgetWrapper: {},
  input: {
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#000",
    padding: 10,
    marginBottom: 20,
  },
  button: {
    padding: 5,
    marginBottom: 10,
    width: "50%",
  },
});
