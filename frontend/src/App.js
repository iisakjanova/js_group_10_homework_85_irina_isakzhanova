import {Route, Switch} from "react-router-dom";
import {Typography} from "@material-ui/core";

import ArtistsList from "./containers/ArtistsList/ArtistsList";
import AlbumsList from "./containers/AlbumsList/AlbumsList";
import TracksList from "./containers/TracksList/TracksList";
import Layout from "./components/UI/Layout/Layout";
import Registration from "./containers/Registration/Registration";
import Login from "./containers/Login/Login";
import TrackHistoryPage from "./containers/TrackHistory/TrackHistoryPage";

const App = () => {
  return (
      <Layout>
          <Switch>
              <Route path="/" exact component={ArtistsList} />
              <Route path="/artists" component={ArtistsList} />
              <Route path="/albums" component={AlbumsList} />
              <Route path="/tracks" component={TracksList} />
              <Route path="/register" component={Registration}/>
              <Route path="/login" component={Login}/>
              <Route path="/track_history" component={TrackHistoryPage}/>
              <Route render={() => <Typography variant="h4">Not found</Typography>} />
          </Switch>
      </Layout>
  );
};

export default App;