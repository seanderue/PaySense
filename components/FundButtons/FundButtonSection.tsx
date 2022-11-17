import React, { FC, useEffect, useState, useRef } from "react";
import { Dimensions, StyleSheet, View, ScrollView } from "react-native";
import Animated from "react-native-reanimated";
import { FundButtonPage } from "./FundButtonPage";
import { fundDataHardCoded, goalData } from "../shared/fundData";

import { CONTENT_WIDTH_PERCENTAGE } from "../shared/sizes";
import { FUND_PAGE_MARGIN } from "../shared/sizes";
import { FundButtonProps, FundButtonSectionProps } from "./types";
import { PageIndicator } from "../PageIndicator/PageIndicator";
const { width, height } = Dimensions.get("window");

export const FundButtonSection: FC<FundButtonSectionProps> = ({
  fundData,
  goalsToggled,
}) => {
  const [activeData, setActiveData] = useState(fundData);
  // console.log("data in section component");
  // console.log(fundData);

  // Used to track pagination
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const [FundButtonPageElements, setFundButtonPageElements] = useState([
    <FundButtonPage data={activeData} key={0} page={0} />,
  ]);
  const scrollRef = useRef<Animated.ScrollView>(null);

  const scrollToStart = () => {
    scrollRef.current?.scrollTo({ x: 0, y: 0, animated: false });
  };

  const populatePages = (data: FundButtonProps[]) => {
    const pages = [];
    for (let i = 0; i < Math.ceil(data.length / 6); i++) {
      pages.push(<FundButtonPage data={data} key={i} page={i} />);
    }
    setPageCount(pages.length);
    return pages;
  };

  useEffect(() => {
    console.log("data switched");
    setActivePage(0);
    goalsToggled ? setActiveData(fundData) : setActiveData(fundData);
    goalsToggled
      ? setFundButtonPageElements((prevState) => {
          return (prevState = populatePages(fundData));
        })
      : setFundButtonPageElements((prevState) => {
          //EVENTUALLY SET THIS TO GOAL DATA
          return (prevState = populatePages(fundData));
        });
  }, [goalsToggled]);

  // console.log(`data.length: ${data.length}`);
  // console.log(`Math.ceil(data.length / 6): ${Math.ceil(data.length / 6)}`);
  // console.log(`Button page length: ${FundButtonPageElements.length}`);

  const handleScroll = (event: {
    nativeEvent: { contentOffset: { x: any } };
  }) => {
    let x = event.nativeEvent.contentOffset.x;
    // // console.log(`x: ${x}`);
    // // console.log(`activePage: ${activePage}`);
    // console.log(activePage);
    setActivePage(
      Math.round(x / (width * CONTENT_WIDTH_PERCENTAGE + FUND_PAGE_MARGIN))
    );
  };

  const handleScrollEnd = (event: {
    nativeEvent: { contentOffset: { x: any } };
  }) => {
    let x = event.nativeEvent.contentOffset.x;
    // console.log(`x: ${x}`);
    // console.log(
    //   `calc: ${x / (width * CONTENT_WIDTH_PERCENTAGE + FUND_PAGE_MARGIN)}`
    // );
    // console.log(
    //   `rounded calc: ${Math.round(
    //     x / (width * CONTENT_WIDTH_PERCENTAGE + FUND_PAGE_MARGIN)
    //   )}`
    // );
    setActivePage(
      Math.round(x / (width * CONTENT_WIDTH_PERCENTAGE + FUND_PAGE_MARGIN))
    );
  };

  const handleTabSwitch = () => {
    scrollToStart();
    setActivePage(0);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.slider}>
          <Animated.ScrollView
            horizontal
            snapToInterval={width * CONTENT_WIDTH_PERCENTAGE + FUND_PAGE_MARGIN}
            onScroll={handleScroll}
            // onMomentumScrollEnd={handleScrollEnd}
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            scrollEventThrottle={1}
            style={styles.ScrollView}
            onContentSizeChange={handleTabSwitch}
            ref={scrollRef}
          >
            {FundButtonPageElements}
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
