import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList, UserEdit, UserCreate } from "./users";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

class App extends Component {
  render() {
    return (
      <Admin dataProvider={dataProvider}>
        <Resource
          name="users"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
        />
      </Admin>
    );
  }
}

export default App;
