import React from 'react';
// import logo from './logo.svg';
import './css/App.css';

// IMPORT: Sample data
import MyData from "./Data/MyData";

// IMPORT: utility components
import axios from 'axios';

// IMPORT: Reusable components
import User from "./Components/User/User";
import FollowerList from "./Components/Followers/FollowerList";
import Follower from "./Components/Followers/Follower";

class App extends React.Component {

  state = {
    user: [],
    followers: []
  };

  // componentDidMount() {
  //   const myData = MyData;
  //   this.setState({ ...this.state, user: myData });
  // }

  componentDidMount() {
    fetch("https://api.github.com/users/mikepadiernos")
      .then(res => res.json())
      .then(user => {
        console.log("fetch: user: ", user);
        this.setState({ ...this.state, user: user });
      })
      .catch(err => console.log("error on fetch: ", err));
    fetch("https://api.github.com/users/mikepadiernos/followers")
      .then(res => res.json())
      .then(followers => {
        console.log("fetch: followers: ", followers);
        this.setState({ ...this.state, followers: followers });
      })
      .catch(err => console.log("error on fetch: ", err));
  }

  render() {
    return (
      <div className="App">
        <User
          avatar_url={this.state.user.avatar_url}
          bio={this.state.user.bio}
          blog={this.state.user.blog}
          followers={this.state.user.followers}
          following={this.state.user.following}
          location={this.state.user.location}
          login={this.state.user.login}
          name={this.state.user.name}
          public_repos={this.state.user.public_repos}
          repos_url={this.state.user.repos_url}
          url={this.state.user.url}
        />
        <main role="main" id="main-content" className="main-content">
          <FollowerList
            followers={this.state.followers}
            login={this.state.followers.login}
            avatar_url={this.state.followers.avatar_url}
          />
        </main>
      </div>
    );
  }

}

export default App;
