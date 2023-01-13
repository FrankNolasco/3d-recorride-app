import React from "react";
import { useMediaQuery } from "react-responsive";

export const useMediaQueryCustom = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isDesktopMedium = useMediaQuery({ query: "(min-width: 777px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 777px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobile,
    isPortrait,
    isDesktopMedium,
    isRetina,
  };
};
