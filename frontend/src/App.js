import {Route, Switch} from "react-router-dom";
import {Typography} from "@material-ui/core";

import ArtistsList from "./containers/ArtistsList/ArtistsList";
import AlbumsList from "./containers/AlbumsList/AlbumsList";

const App = () => {
  return (
      <Switch>
          <Route path="/" exact component={ArtistsList} />
          <Route path="/artists" component={ArtistsList} />
          <Route path="/albums" component={AlbumsList} />
          <Route render={() => <Typography variant="h4">Not found</Typography>} />
      </Switch>
  );
};

export default App;