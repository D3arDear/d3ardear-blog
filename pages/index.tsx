import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/layouts/footer";
import Header from "../components/layouts/header/header";
import ArrowLink from "../components/arrowLink/arrowLink";
import { FullPageMain } from "../components/styledComponents/fullPageMain";
import {
  HomePageBackgroundImg,
  HomePageMainContainer,
} from "../components/styledComponents/homePageComponents";
import FullPageScroll from "../components/utils/FullPage/FullPage";
import { useMemo, useState, useCallback } from "react";
import { HomePageBlog } from "../components/home/blogHome/homeBlog";
import { HomePageWork } from "../components/home/workHome/workHomePage";
import { AnimatePresence, motion } from "framer-motion";
import { MotionWrapper } from "../components/common/motionWrapper";
import { defaultVariants } from "../components/constant/animation";

const Home: NextPage = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  const onClickArrow = (direction: "up" | "down") => {
    direction === "down" ? handlePageChanged(pageIndex + 1) : handlePageChanged(pageIndex - 1);
  };
  const themeColor = useMemo(() => (pageIndex === 0 ? "light" : "dark"), [pageIndex]);
  const onBeforePageScroll = (index: number) => {
    console.log(index);
  };
  const handlePageChanged = useCallback(
    (index: number) => {
      setPageIndex(index);
      index === 0 ? setHeaderVisible(true) : setHeaderVisible(false);
    },
    [setPageIndex, setHeaderVisible]
  );

  return (
    <MotionWrapper className={styles.container}>
      <AnimatePresence exitBeforeEnter>
        {pageIndex === 0 && <Header mode={"light"} />}
      </AnimatePresence>

      <AnimatePresence exitBeforeEnter>
        {pageIndex !== 2 && <ArrowLink color={themeColor} clickTrigger={onClickArrow} />}
      </AnimatePresence>
      <FullPageScroll
        onBeforePageScroll={onBeforePageScroll}
        onPageChanged={handlePageChanged}
        customPageIndex={pageIndex}
        minimalScrollDistance={3}
        animationDuration={1000}>
        <HomePageMainContainer key={0} className="section">
          <HomePageBackgroundImg />
        </HomePageMainContainer>
        <FullPageMain key={1} className="section">
          <HomePageBlog />
        </FullPageMain>
        <FullPageMain key={2} className="section">
          <HomePageWork />
        </FullPageMain>
      </FullPageScroll>
      <Footer />
    </MotionWrapper>
  );
};

export default Home;
