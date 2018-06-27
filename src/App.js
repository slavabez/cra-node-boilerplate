import React, { Component } from 'react';
import styled from "styled-components";
import SampleComponent from "./components/SampleComponent";

const AppWrapper = styled.div``;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <SampleComponent />
      </AppWrapper>
    );
  }
}

export default App;
