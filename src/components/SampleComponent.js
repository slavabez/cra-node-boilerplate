import React from "react";
import styled from "styled-components";

import ping from "../api/ping";

const SCWrapper = styled.div`

`;

class SampleComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      loadedMessage: null
    };
  }

  async componentDidMount(){
    const response = await ping();
    this.setState({
      loadedMessage: response.message,
      isLoading: false
    })
  }

  render(){
    return <SCWrapper>
      {(this.state.isLoading) ? "Loading..." : null}
      <h3>{this.state.loadedMessage}</h3>
    </SCWrapper>
  }
}

export default SampleComponent;