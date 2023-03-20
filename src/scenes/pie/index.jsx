import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
   return (
      <Box m="20px">
         <Header title="Pie Chart" subtitle="Simple Pie Chart" />
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
            <PieChart />
         </Box>
      </Box>
   );
};

export default Pie;