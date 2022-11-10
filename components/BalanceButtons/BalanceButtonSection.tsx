import React, { FC, useEffect, useState, useRef } from "react";
import { Dimensions, StyleSheet, View, ScrollView } from "react-native";
import Animated from "react-native-reanimated";
import { BalanceButtonPage } from "./BalanceButtonPage";
import { budgetData, goalData } from "../shared/balanceData";

import { CONTENT_WIDTH_PERCENTAGE } from "../shared/sizes";
import { BALANCE_PAGE_MARGIN } from "../shared/sizes";
import { BalanceButtonProps, BalanceButtonSectionProps } from "./types";
import { PageIndicator } from "../PageIndicator/PageIndicator";
const { width, height } = Dimensions.get("window");

export const BalanceButtonSection: FC<BalanceButtonSectionProps> = ({
  goalsToggled,
}) => {
  const [data, setData] = useState(budgetData);

  // Used to track pagination
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const [BalanceButtonPageElements, setBalanceButtonPageElements] = useState([
    <BalanceButtonPage data={data} key={0} page={0} />,
  ]);
  const scrollRef = useRef<Animated.ScrollView>(null);

  const scrollToStart = () => {
    scrollRef.current?.scrollTo({ x: 0, y: 0, animated: false });
  };

  const populatePages = (data: BalanceButtonProps[]) => {
    const pages = [];
    for (let i = 0; i < Math.ceil(data.length / 6); i++) {
      pages.push(<BalanceButtonPage data={data} key={i} page={i} />);
    }
    setPageCount(pages.length);
    return pages;
  };

  useEffect(() => {
    console.log("data switched");
    setActivePage(0);
    goalsToggled ? setData(goalData) : setData(budgetData);
    goalsToggled
      ? setBalanceButtonPageElements((prevState) => {
          return (prevState = populatePages(goalData));
        })
      : setBalanceButtonPageElements((prevState) => {
          return (prevState = populatePages(budgetData));
        });
  }, [goalsToggled]);

  // console.log(`data.length: ${data.length}`);
  // console.log(`Math.ceil(data.length / 6): ${Math.ceil(data.length / 6)}`);
  // console.log(`Button page length: ${BalanceButtonPageElements.length}`);

  const handleScroll = (event: {
    nativeEvent: { contentOffset: { x: any } };
  }) => {
    let x = event.nativeEvent.contentOffset.x;
    // console.log(`x: ${x}`);
    // console.log(`activePage: ${activePage}`);
  };

  const handleScrollEnd = (event: {
    nativeEvent: { contentOffset: { x: any } };
  }) => {
    let x = event.nativeEvent.contentOffset.x;
    setActivePage(
      Math.round(x / (width * CONTENT_WIDTH_PERCENTAGE + BALANCE_PAGE_MARGIN))
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.slider}>
          <Animated.ScrollView
            horizontal
            snapToInterval={
              width * CONTENT_WIDTH_PERCENTAGE + BALANCE_PAGE_MARGIN
            }
            // onScroll={handleScroll}
            onMomentumScrollBegin={handleScrollEnd}
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            scrollEventThrottle={1}
            style={styles.ScrollView}
            onContentSizeChange={() => {
              scrollToStart();
            }}
            ref={scrollRef}
          >
            {BalanceButtonPageElements}
          </Animated.ScrollView>
        </View>
      </View>
      <PageIndicator
        activePageIndex={activePage}
        toggledRight={goalsToggled}
        pageCount={pageCount}
      />
    </>
  );
};

const styles = StyleSheet.create({
  ScrollView: {
    height: "100%",
  },
  slider: {
    height: 0.61 * height,
    // backgroundColor: "cyan",
  },
  container: {
    flex: 1,
  },
});
