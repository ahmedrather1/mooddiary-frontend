import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./common/Header";
import Footer from "./common/Footer";
import HomePage from "./HomePage";
import EntriesPage from "./EntriesPage";
import AnalyticsPage from "./AnalyticsPage";
import SettingsPage from "./SettingsPage";
import AboutPage from "./AboutPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/entries" component={EntriesPage} />
        <Route path="/analytics" component={AnalyticsPage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
