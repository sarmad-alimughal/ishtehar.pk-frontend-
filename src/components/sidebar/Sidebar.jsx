import React from "react";
import "./sidebar.css";
import {
  Article,
  Edit,
  Lock,
  Category,
  LineStyle,
  PermIdentity,
} from "@mui/icons-material";
// import EditIcon from "@mui/icons-material/Edit";
// import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/newUser" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                New Users
              </li>
            </Link>
            <Link to="/noticesList" className="link">
              <li className="sidebarListItem">
                <Article className="sidebarIcon" />
                New Notices
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Users</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                View All Users
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <Edit className="sidebarIcon" />
                Update A User
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Roles</h3>
          <ul className="sidebarList">
            <Link to="/roleList" className="link">
              <li className="sidebarListItem">
                <Lock className="sidebarIcon" />
                View All Roles
              </li>
            </Link>
            <Link to="/roleList" className="link">
              <li className="sidebarListItem">
                <Edit className="sidebarIcon" />
                Update A Role
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notices</h3>
          <ul className="sidebarList">
            <Link to="/noticesList" className="link">
              <li className="sidebarListItem">
                <Article className="sidebarIcon" />
                View All Notices
              </li>
            </Link>
            <Link to="/noticesList" className="link">
              <li className="sidebarListItem">
                <Edit className="sidebarIcon" />
                Update A Notice
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Categories</h3>
          <ul className="sidebarList">
            <Link to="/categoryList" className="link">
              <li className="sidebarListItem">
                <Category className="sidebarIcon" />
                View All Categories
              </li>
            </Link>
            <Link to="/categoryList" className="link">
              <li className="sidebarListItem">
                <Edit className="sidebarIcon" />
                Update A Category
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Action</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Lock className="sidebarIcon" />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
