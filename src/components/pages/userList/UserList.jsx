import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function UserList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUserList();
  }, []);
  const getUserList = () => {
    axios
      .get("http://localhost:5000/api/user/user-list")
      .then((r) => {
        setData(r.data);
      })
      .catch(function (e) {
        console.error(e.message); // "oh, no!"
      });
  };

  const handleDelete = (userDelete) => {
    axios
      .delete("http://localhost:5000/api/user/delete-user", {
        data: userDelete,
      })
      .then((r) => {
        getUserList();
        toast.success(r.data);
      })
      .catch(function (e) {
        console.error(e.message); // "oh, no!"
      });
    console.log(userDelete);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 110 },
    {
      field: "user",
      headerName: "User Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.firstName} {params.row.lastName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "CNIC",
      headerName: "CNIC",
      width: 150,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.CNIC}</div>;
      },
    },
    {
      field: "role",
      headerName: "Phone",
      width: 150,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.phone}</div>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{
                pathname: `/user/${params.row.id}`,
                state: { userDetails: params.row },
              }}
            >
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <ToastContainer />

      {data?.length > 0 && (
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      )}
    </div>
  );
}
