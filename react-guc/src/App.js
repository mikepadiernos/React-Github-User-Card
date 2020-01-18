import React from 'react';
// import logo from './logo.svg';
// import './css/App.css';

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
          name={this.state.user.name}
          bio={this.state.user.bio}
          avatar_url={this.state.user.avatar_url}
          login={this.state.user.login}
          url={this.state.user.url}
          repos_url={this.state.user.repos_url}
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
