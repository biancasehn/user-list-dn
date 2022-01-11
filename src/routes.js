import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Home, NewUser, EditUser } from "./pages";


function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} element={<Home />} />
          <Route path={"/new"} element={<NewUser />} />
          <Route path={"/edit"} element={<EditUser />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
