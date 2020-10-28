import React from "react";
import { Route } from "react-router-dom";
import { Auth } from "pages";

import { setTitleAndFaviconForAurora } from "./helpers";

const App = () => {
  return (
    <div className="wrapp">
      <Route
        exact
        path={["/", "/login"]}
        render={({ match }) => {
          setTitleAndFaviconForAurora("Login");
          return <Auth match={match} />;
        }}
      />
      <Route
        exact
        path="/register"
        render={({ match }) => {
          setTitleAndFaviconForAurora("Register");
          return <Auth match={match} />;
        }}
      />
    </div>
  );
};

export default App;
