import "./App.css";
import Notices from "./components/Notices";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NoticesList from "./components/pages/noticesList/NoticesList";
import CategoryList from "./components/pages/categoryList/CategoryList";
import RoleList from "./components/pages/roleList/RoleList";
import NewUser from "./components/pages/newUser/NewUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer />

      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/notices">
            <Notices />
          </Route>
          <Route path="/noticesList">
            <NoticesList />
          </Route>
          <Route path="/categoryList">
            <CategoryList />
          </Route>
          <Route path="/roleList">
            <RoleList />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
