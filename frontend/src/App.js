import {Route, Switch} from "react-router-dom";
import {Typography} from "@material-ui/core";

import ArtistsList from "./containers/ArtistsList/ArtistsList";

const App = () => {
  return (
      <Switch>
          <Route path="/" exact component={ArtistsList} />
          <Route path="/artists" component={ArtistsList} />
          <Route render={() => <Typography variant="h4">Not found</Typography>} />
      </Switch>
  );
};

export default App;