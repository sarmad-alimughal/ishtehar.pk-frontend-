import {
  CreditCard,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";

import { Link, useLocation } from "react-router-dom";
import "./user.css";
import "../../../css/toastr.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function User(props) {
  const location = useLocation();
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({ ...location.state.userDetails });
  }, []);

  const handleUpdate = () => {
    axios
      .post("http://localhost:5000/api/user/update-profile", user)
      .then((r) => {
        if (r.data === "User Updated Successfully") {
          toast.success(r.data);
        }
      })
      .catch(function (e) {
        console.error(e.message); // "oh, no!"
      });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="user">
      <ToastContainer />

      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <div className="userShowTopTitle">
              <span className="userShowUsername">
                {user.firstName} {user.lastName}
              </span>
              <span className="userShowUserTitle">Super Admin</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">User Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <CreditCard className="userShowIcon" />
              <span className="userShowInfoTitle">{user.CNIC}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{user.phone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">
                {user.country} | {user.city}
              </span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{user.address}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>First Name</label>
                <input
                  type="text"
                  value={user.firstName}
                  onChange={(e) =>
                    setUser((current) => ({
                      ...current,
                      firstName: e.target.value,
                    }))
                  }
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Last Name</label>
                <input
                  name="lastname"
                  type="text"
                  value={user.lastName}
                  onChange={(e) =>
                    setUser((current) => ({
                      ...current,
                      lastName: e.target.value,
                    }))
                  }
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>City</label>
                <input
                  type="text"
                  value={user.city}
                  onChange={(e) =>
                    setUser((current) => ({
                      ...current,
                      city: e.target.value,
                    }))
                  }
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Country</label>
                <input
                  type="text"
                  value={user.country}
                  onChange={(e) =>
                    setUser((current) => ({
                      ...current,
                      country: e.target.value,
                    }))
                  }
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  value={user.phone}
                  onChange={(e) =>
                    setUser((current) => ({
                      ...current,
                      phone: e.target.value,
                    }))
                  }
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload"></div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleUpdate();
                }}
                className="userUpdateButton"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
