import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
   return (
      <Box m="20px">
         <Header title="Line Chart" subtitle="Simple Line Chart" />
         <Box
            maxWidth="1440px"
            sx={{
               height: {
                  xs: "250px",
                  sm: "500px",
                  lg: "50vh",
               }
            }}
         >
            <LineChart />
         </Box>
      </Box>
   );
};

export default Line;