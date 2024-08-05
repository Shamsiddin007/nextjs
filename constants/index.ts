import { FaHome, FaCalendarAlt, FaHistory, FaVideo, FaUser } from "react-icons/fa";

export const sidebarLinks = [
  {
    label: "Home",
    route: "/",
    Icon: FaHome,
  },
  {
    label: "Upcoming",
    route: "/upcoming",
    Icon: FaCalendarAlt,
  },
  {
    label: "Previous",
    route: "/previous",
    Icon: FaHistory,
  },
  {
    label: "Recordings",
    route: "/recordings",
    Icon: FaVideo,
  },
  {
    label: "Personal Room",
    route: "/personal-room",
    Icon: FaUser,
  },
];
