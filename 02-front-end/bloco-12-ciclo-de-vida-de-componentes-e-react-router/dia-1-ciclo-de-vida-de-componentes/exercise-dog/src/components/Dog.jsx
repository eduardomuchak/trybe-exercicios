import React, { Component } from 'react';
import './Dog.css';

class Dog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true,
    };

    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  /* shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.message.includes('terrier')) {
      return false;
    }
    return true;
  } */

  fetchDog() {
    const { data } = this.state;
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((result) => { this.setState({ data: [...data, result], loading: false }); });
  }

  render() {
    const { data, loading } = this.state;
    if (loading === true) {
      return (
        <h1>Loading...</h1>
      );
    }
    return (
      <div className="container-main">
        <div className="container-button">
          <p>Doguinhos</p>
          <button type="button" onClick={ this.fetchDog }>New Dog</button>
        </div>
        <div className="container-images">
          { data.map((dog) => (
            <img
              src={ dog.message }
              alt="Doguinho"
              key={ dog.message }
            />)) }
        </div>
      </div>
    );
  }
}

export default Dog;
