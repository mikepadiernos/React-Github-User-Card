import React from 'react';
// import logo from './logo.svg';
import './css/App.css';

// IMPORT: Sample data
import MyData from "./Data/MyData";

// IMPORT: utility components
import axios from 'axios';

// IMPORT: Reusable components
import User from "./Components/User/User";

class App extends React.Component {

  state = {
    user: []
  };

  componentDidMount() {
    const myData = MyData;
    this.setState({ ...this.state, user: myData });
  }

  render() {
    return (
      <div className="App">
        <User
          avatar_url={this.state.user.avatar_url}
          bio={this.state.user.bio}
          blog={this.state.user.blog}
          login={this.state.user.login}
          name={this.state.user.name}
          repos_url={this.state.user.repos_url}
          url={this.state.user.url}
        />
        <main role="main">
          <section>
          </section>
        </main>
      </div>
    );
  }

}

export default App;
