import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <form action="http://localhost:8083/add" method="POST" encType="multipart/form-data">
        <input type="text" name="title" placeholder="Nom du film"/>
        <input type="text" name="release" placeholder="Date de sortie"/>
        <input type="text" name="director" placeholder="Réalisateur"/>
        <input type="file" name="image"/>
        <button type="submit">Ajouter votre film</button>
      </form>
    );
  }

}

export default Form;