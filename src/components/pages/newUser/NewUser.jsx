import "./newUser.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewUser() {
  const [newUser, setNewUser] = useState({});

  useEffect(() => {
    console.log(newUser);
  }, []);

  const handleNewUser = () => {
    console.log(newUser);
    axios
      .post("http://localhost:5000/api/auth/signup", newUser)
      .then((r) => {
        toast.success("User Created Successfully");
      })
      .catch(function (e) {
        console.error(e.message); // "oh, no!"
        toast.error("Unfortunately User Not Created", e.message);
      });
  };

  return (
    <div className="newUser">
      <ToastContainer />
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>First Name</label>
          <input
            type="text"
            placeholder="first"
            onChange={(e) =>
              setNewUser((current) => ({
                ...current,
                firstName: e.target.value,
              }))
            }
          />
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="last"
            onChange={(e) =>
              setNewUser((current) => ({
                ...current,
                lastName: e.target.value,
              }))
            }
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="abc@gmail.com"
            onChange={(e) =>
              setNewUser((current) => ({
                ...current,
                email: e.target.value,
              }))
            }
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) =>
              setNewUser((current) => ({
                ...current,
                password: e.target.value,
              }))
            }
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="text"
            placeholder="03123456789"
            onChange={(e) =>
              setNewUser((current) => ({
                ...current,
                phone: e.target.value,
              }))
            }
          />
        </div>
        <div className="newUserItem">
          <label>CNIC</label>
          <input
            type="text"
            placeholder="3310012122237"
            onChange={(e) =>
              setNewUser((current) => ({
                ...current,
                CNIC: e.target.value,
              }))
            }
          />
        </div>
        <div className="newUserItem">
          <label>City</label>
          <input
            type="text"
            placeholder="city"
            onChange={(e) =>
              setNewUser((current) => ({
                ...current,
                city: e.target.value,
              }))
            }
          />
        </div>
        <div className="newUserItem">
          <label>Country</label>
          <input
            type="text"
            placeholder="country"
            onChange={(e) =>
              setNewUser((current) => ({
                ...current,
                country: e.target.value,
              }))
            }
          />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input
            type="text"
            placeholder="House#, Street#, "
            onChange={(e) =>
              setNewUser((current) => ({
                ...current,
                address: e.target.value,
              }))
            }
          />
        </div>

        <div className="newUserItem">
          <label>User Role</label>
          <select
            className="newUserSelect"
            name="active"
            id="active"
            onChange={(e) =>
              setNewUser((current) => ({
                ...current,
                roleID: e.target.value,
              }))
            }
          >
            <option type="number" value="1">
              Admin
            </option>
            <option type="number" value="2">
              Publisher
            </option>
          </select>
        </div>
        <button
          className="newUserButton"
          onClick={(e) => {
            e.preventDefault();
            handleNewUser();
          }}
        >
          Create
        </button>
      </form>
    </div>
  );
}
