import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import { Stats } from "./Pages/Stats";
import { User } from "./Pages/User";

const WebRoutes = () => {
  return (
    <Routes>
      //home route
      <Route path="/" />
      //route about
      <Route path="/about" element={<About />} />
      //route user
      <Route path="/user" element={<User />} />
      //route stats
      <Route path="/stats" element={<Stats />} />
    </Routes>
  );
};

export default WebRoutes;
