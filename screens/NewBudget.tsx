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
  const [latestPlacementIndex, setLatestPlacementIndex] = useState<number>();
  const initialState = {
    title: "",
    icon: "",
    fund_balance: 0,
    total_fund_size: 0,
    placement_index: latestPlacementIndex,
    type: FundTypes.BUDGET,
  };
  const [formState, setFormState] = useState(initialState);
  const [funds, setFunds] = useState<Fund[]>([]);

  useEffect(() => {
    fetchFunds();
    const subscription = DataStore.observe(Fund).subscribe(() => fetchFunds());
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    console.log(`Latest Placement Index Updated to: ${funds?.length + 1}`);
    setFormState({ ...formState, placement_index: funds?.length + 1 });
  }, [funds]);

  function onChangeText(key: string, value: any) {
    console.log(formState);
    setFormState({ ...formState, [key]: value });
  }

  async function deleteAllFunds() {
    await DataStore.delete(Fund, Predicates.ALL);
    fetchFunds();
  }

  async function fetchFunds() {
    const funds = await DataStore.query(Fund);
    setFunds(funds);
  }

  async function createFund() {
    if (
      !formState.title ||
      !formState.icon ||
      !formState.fund_balance ||
      !formState.total_fund_size ||
      !formState.type
    ) {
      console.log("formState returned falsy values");
      console.log(formState.title ? "title truth" : "title falsy");
      console.log(formState.icon ? "icon truth" : "icon falsy");
      console.log(
        formState.fund_balance ? "fund_balance truth" : "fund_balance falsy"
      );
      console.log(
        formState.total_fund_size
          ? "total_fund_size truth"
          : "total_fund_size falsy"
      );
      console.log(formState.type ? "type truth" : "type falsy");
      console.log(formState.title);
      return;
    }

    async () => {
      // const fundsCount = (await queryFunds()).length;
      // setFormState({
      //   ...formState,
      //   placement_index: 10,
      // });
    };
    await DataStore.save(new Fund({ ...(formState as EagerFund) }));
    console.log(`placement_index updated to: ${formState.placement_index}`);
    console.log("new fund saved (hopefully)");
    setFormState(initialState);
  }

  // console.log("models:");
  // console.log(models);

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

  const id = "546fdfd7-b82e-443a-b6a2-b519e956bd68";

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
    return await DataStore.query(Fund);
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
    const modelToDelete = await queryFunds();
    DataStore.delete(modelToDelete[0]);
    fetchFunds();
  };

  return (
    <View>
      <SectionHeader text={"Budget Name"} />
      <Text>Budget Title</Text>
      <TextInput
        onChangeText={(value) => onChangeText("title", value)}
        placeholder="Budget Title"
        value={formState.title}
        style={styles.input}
      />
      <Text>Budget Icon</Text>
      <TextInput
        onChangeText={(value) => onChangeText("icon", value)}
        placeholder="Budget Icon"
        value={formState.icon}
        style={styles.input}
      />
      <Text>Fund Balance</Text>
      <TextInput
        onChangeText={(value) => onChangeText("fund_balance", Number(value))}
        placeholder="Fund Balance"
        value={`${formState.fund_balance}`}
        style={styles.input}
      />
      <Text>Fund Size</Text>
      <TextInput
        onChangeText={(value) => onChangeText("total_fund_size", Number(value))}
        placeholder="Fund Size"
        value={`${formState.total_fund_size}`}
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
          console.log(await queryFunds());
          console.log(`funds count: ${(await queryFunds()).length}`);
        }}
        style={[styles.button, { backgroundColor: colors.greenDark }]}
      >
        <Text>log funds</Text>
      </Pressable>
      {/* <Pressable
        onPress={async () => {
          console.log(newFund(newFundTemplate));
          console.log(`new Fund: ${await (await queryFunds()).at(0)}`);
        }}
        style={[styles.button, { backgroundColor: colors.gradientBlue }]}
      >
        <Text>New template fund</Text>
      </Pressable> */}
      <Pressable
        onPress={() => {
          setFormState({
            ...formState,
            ["placement_index"]: funds?.length + 1,
          });
          createFund();
        }}
        style={[styles.button, { backgroundColor: colors.gradientBlue }]}
      >
        <Text>Create New fund</Text>
      </Pressable>
      {/* <Pressable
        onPress={() => {
          setFormState({ ...formState, ["placement_index"]: 69 });
        }}
        style={[styles.button, { backgroundColor: colors.gradientBlue }]}
      >
        <Text>Set placement index to 69</Text>
      </Pressable> */}
      <Pressable
        onPress={() => console.log(funds)}
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
