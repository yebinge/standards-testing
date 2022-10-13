import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const SidebarData = [
  { 
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  { 
    title: "Sectors",
    icon: <PieChartOutlineIcon />,
    link: "/sectors",
  },
  { 
    title: "Suites",
    icon: <FolderOutlinedIcon />,
    link: "/suites",
  },
  { 
    title: "Scenarios",
    icon: <GridViewIcon />,
    link: "/scenarios",
  },
  { 
    title: "Test Cases",
    icon: <ListAltIcon />,
    link: "/testcases",
  },
  { 
    title: "Assertions",
    icon: <CheckCircleOutlineIcon />,
    link: "/assertions",
  },
  { 
    title: "Settings",
    icon: <TuneIcon />,
    link: "/settings",
  },
  { 
    title: "Help",
    icon: <HelpOutlineIcon />,
    link: "/help",
  },
  { 
    title: "Log Out",
    icon: <ArrowBackIcon />,
    link: "/logout",
  },
]