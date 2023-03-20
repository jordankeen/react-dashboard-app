import { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

// Item - for each side bar menu item
const Item = ({ title, to, icon, selected, setSelected }) => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   return (
      <MenuItem
         active={selected === title}
         style={{
            color: colors.grey[100],
         }}
         onClick={() => setSelected(title)}
         icon={icon}
         component={<Link to={to} />}
      >
         <Typography>{title}</Typography>
      </MenuItem>
   );
};

const Sidebar = () => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const { toggleSidebar } = useProSidebar();
   const [isCollapsed, setIsCollapsed] = useState(false);
   const [selected, setSelected] = useState("Dashboard");

   return (
      <Box
         sx={{
            position: "sticky",
            display: "flex",
            minHeight: "100vh",
            top: 0,
            bottom: 0,
            zIndex: 10000,
            "& .ps-sidebar-root": {
               border: "none",
            },
            "& .ps-menu-button:hover": {
               color: `${colors.blueAccent[500]} !important`,
               backgroundColor: "transparent !important",
            },
            "& .ps-menu-button.ps-active": {
               color: `${colors.blueAccent[500]} !important`,
               backgroundColor: "transparent !important",
            },
         }}
      >
         <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            position="absolute"
            zIndex="2"
            top="16px"
            left="15px"
         >
            <IconButton
               onClick={() => toggleSidebar()}
            >
               <MenuOutlinedIcon />
            </IconButton>
         </Box>
         <ProSidebar
            collapsed={isCollapsed}
            breakPoint="lg"
            backgroundColor={colors.primary[400]}
            borderColor="transparent"
         >
            <Menu iconShape="square">
               {/* LOGO AND MENU ICON */}
               <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p="10px 10px 10px 15px"
               >
                  <Typography variant="h3" color={colors.grey[100]}>
                     ADMIN
                  </Typography>
                  <IconButton
                     onClick={() => toggleSidebar()}
                     sx={{
                        display: {
                           md: "none",
                        },
                     }}
                  >
                     <ArrowBackIosNewOutlinedIcon />
                  </IconButton>
               </Box>
               {/* </MenuItem> */}

               {/* User */}
               {!isCollapsed && (
                  <Box
                     mb="25px"
                  >
                     <Box display="flex" justifyContent="center" alignItems="center">
                        <img
                           alt="profile-user"
                           width="100px"
                           height="100px"
                           src={`../../assets/user.jpg`}
                           style={{ cursor: "pointer", borderRadius: "50%" }}
                        />
                     </Box>
                     <Box textAlign="center">
                        <Typography
                           variant="h2"
                           color={colors.grey[100]}
                           fontWeight="bold"
                           sx={{ m: "10px 0 0 0" }}
                        >
                           Jordan Keen
                        </Typography>
                        <Typography variant="h5" color={colors.greenAccent[500]}>
                           Software Engineer
                        </Typography>
                     </Box>
                  </Box>
               )}

               {/* Menu Items */}
               <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                  <Item
                     title="Dashboard"
                     to="/"
                     icon={<HomeOutlinedIcon />}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <Typography
                     variant="h6"
                     color={colors.grey[300]}
                     sx={{ m: "15px 0 5px 20px" }}
                  >
                     Data
                  </Typography>
                  <Item
                     title="Manage Team"
                     to="/team"
                     icon={<PeopleOutlinedIcon />}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <Item
                     title="Contacts Information"
                     to="/contacts"
                     icon={<ContactsOutlinedIcon />}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <Item
                     title="Invoices Balances"
                     to="/invoices"
                     icon={<ReceiptOutlinedIcon />}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <Typography
                     variant="h6"
                     color={colors.grey[300]}
                     sx={{ m: "15px 0 5px 20px" }}
                  >
                     Pages
                  </Typography>
                  <Item
                     title="Profile Form"
                     to="/form"
                     icon={<PersonOutlinedIcon />}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <Item
                     title="Calendar"
                     to="/calendar"
                     icon={<CalendarTodayOutlinedIcon />}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <Item
                     title="FAQ Page"
                     to="/faq"
                     icon={<HelpOutlineOutlinedIcon />}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <Typography
                     variant="h6"
                     color={colors.grey[300]}
                     sx={{ m: "15px 0 5px 20px" }}
                  >
                     Charts
                  </Typography>
                  <Item
                     title="Bar Chart"
                     to="/bar"
                     icon={<BarChartOutlinedIcon />}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <Item
                     title="Pie Chart"
                     to="/pie"
                     icon={<PieChartOutlineOutlinedIcon />}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <Item
                     title="Line Chart"
                     to="/line"
                     icon={<TimelineOutlinedIcon />}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <Item
                     title="Geography Chart"
                     to="/geography"
                     icon={<MapOutlinedIcon />}
                     selected={selected}
                     setSelected={setSelected}
                  />
               </Box>
            </Menu>
         </ProSidebar>
      </Box>
   )
}

export default Sidebar;