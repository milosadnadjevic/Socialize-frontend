import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info5.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Revlon</Typography>
        <Typography color={medium}>revlon.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Are you tired of makeup that's as serious as a tax audit? 
      Look no further! Our makeup line is here to make you beautiful 
      and look fabulous while doing it.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;