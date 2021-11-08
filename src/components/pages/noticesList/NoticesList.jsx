import "./noticesList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UserList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/notices/all-notices")
      .then((r) => {
        setData(r.data);
      })
      .catch(function (e) {
        console.error(e.message); // "oh, no!"
      });
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "userID",
      headerName: "USER ID",
      width: 150,
    },
    { field: "categoryID", headerName: "CATEGORY ID", width: 150 },
    {
      field: "title",
      headerName: "TITLE",
      width: 200,
    },
    {
      field: "date",
      headerName: "Date",
      width: 200,
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
                aboutProps: { userInfo: params.row },
              }}
            >
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
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
