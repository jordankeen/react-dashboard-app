import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const columns = [
      {
         field: "id",
         headerName: "ID",
         minWidth: 50,
      },
      {
         field: "name",
         headerName: "Name",
         flex: 1,
         cellClassName: "name-column--cell",
         minWidth: 125,
      },
      {
         field: "age",
         headerName: "Age",
         type: "number",
         headerAlign: "left",
         align: "left",
         minWidth: 60,
      },
      {
         field: "phone",
         headerName: "Phone Number",
         flex: 1,
         minWidth: 105,
      },
      {
         field: "email",
         headerName: "Email",
         flex: 1,
         minWidth: 150,
      },
      {
         field: "accessLevel",
         headerName: "Access Level",
         flex: 1,
         minWidth: 120,
         renderCell: ({ row: { access } }) => {
            return (
               <Box
                  width="100%"
                  maxWidth="200px"
                  p="5px"
                  display="flex"
                  justifyContent="center"
                  backgroundColor={
                     access === "admin"
                     ? colors.greenAccent[600]
                     : access === "manager"
                     ? colors.greenAccent[700]
                     : colors.greenAccent[700]
                  }
                  borderRadius="4px"
               >
                  {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                  {access === "manager" && <SecurityOutlinedIcon />}
                  {access === "user" && <LockOpenOutlinedIcon />}
                  <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                     {access}
                  </Typography>
               </Box>
            );
         },
      },
   ];

   return (
      <Box m="20px">
         <Header title="TEAM" subtitle="Managing the Team Members" />
         <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
               "& .MuiDataGrid-root": {
                  border: "none",
               },
               "& .MuiDataGrid-cell": {
                  borderBottom: "none",
               },
               "& .name-column--cell": {
                  color: colors.greenAccent[300],
               },
               "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: colors.blueAccent[700],
                  borderBottom: "none",
               },
               "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: colors.primary[400],
               },
               "& .MuiDataGrid-footerContainer": {
                  borderTop: "none",
                  backgroundColor: colors.blueAccent[700],
               },
               "& .MuiCheckbox-root": {
                  color: `${colors.greenAccent[200]} !important`,
               },
            }}
            >
            <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
         </Box>
      </Box>
   );
};

export default Team;