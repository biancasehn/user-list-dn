import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from "./pages/Home";

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} element={<Home />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
