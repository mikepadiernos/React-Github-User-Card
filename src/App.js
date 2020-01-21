import React from 'react';
// import logo from './logo.svg';
import './css/App.css';

// IMPORT: Reusable components
import User from "./Components/User/User";
import FollowerList from "./Components/Followers/FollowerList";
import Search from "./Components/Search/Search";

class App extends React.Component {

  state = {
    user: [],
    followers: [],
    searchFollowers: [],
    searchTerm: ""
  };

  componentDidMount() {

    fetch(" https://cors-anywhere.herokuapp.com/https://api.github.com/users/mikepadiernos")
      .then(res => res.json())
      .then(user => {
        console.log("fetch: user: ", user);
        this.setState({
          ...this.state,
          user: user
        });
      })
      .catch(err => console.log("error on fetch: ", err));

    fetch(" https://cors-anywhere.herokuapp.com/https://api.github.com/users/mikepadiernos/followers")
      .then(res => res.json())
      .then(followers => {
        console.log("fetch: followers: ", followers);
        this.setState({
          ...this.state,
          followers: followers,
          searchFollowers: followers
        });
      })
      .catch(err => console.log("error on fetch: ", err));

  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("SearchTerm: we have a state change!");

      const followee = this.state.searchFollowers.filter(people =>
        people.login.toLowerCase().includes(this.state.searchTerm.toLowerCase()),
      );
      this.setState({
        followers: followee,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header role="banner" className="banner banner-container">
          <User
            avatar_url={this.state.user.avatar_url}
            bio={this.state.user.bio}
            blog={this.state.user.blog}
            followers={this.state.user.followers}
            following={this.state.user.following}
            html={this.state.user.html_url}
            location={this.state.user.location}
            login={this.state.user.login}
            name={this.state.user.name}
            public_repos={this.state.user.public_repos}
            repos_url={this.state.user.repos_url}
            url={this.state.user.url}
          />
        </header>
        <main role="main" id="main-content" className="main-content">
          <Search
            handleChange={this.handleChange}
            searchTerm={this.state.searchTerm}
          />
          <FollowerList
            followers={this.state.followers}
            login={this.state.followers.login}
            avatar_url={this.state.followers.avatar_url}
            html_url={this.state.followers.html_url}
          />
        </main>
      </div>
    );
  }

}

export default App;
