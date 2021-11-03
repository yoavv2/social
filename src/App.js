import Feed from "./Feed/Feed";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import CreatePost from "./CreatePost/CreatePost";
import Register from "./Register/Register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/create/post">
              <CreatePost />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Feed />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
