import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
   return (
      <Box m="20px">
         <Header title="Bar Chart" subtitle="Simple Bar Chart" />
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
            <BarChart />
         </Box>
      </Box>
   );
};

export default Bar;