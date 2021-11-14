import {Route, Switch} from "react-router-dom";
import {Typography} from "@material-ui/core";

import ArtistsList from "./containers/ArtistsList/ArtistsList";
import AlbumsList from "./containers/AlbumsList/AlbumsList";
import TracksList from "./containers/TracksList/TracksList";
import Layout from "./components/UI/Layout/Layout";
import Registration from "./containers/Registration/Registration";
import Login from "./containers/Login/Login";

const App = () => {
  return (
      <Layout>
          <Switch>
              <Route path="/" exact component={ArtistsList} />
              <Route path="/artists" component={ArtistsList} />
              <Route path="/albums/:artist" component={AlbumsList} />
              <Route path="/tracks/:album" component={TracksList} />
              <Route path="/register" component={Registration}/>
              <Route path="/login" component={Login}/>
              <Route render={() => <Typography variant="h4">Not found</Typography>} />
          </Switch>
      </Layout>
  );
};

export default App;