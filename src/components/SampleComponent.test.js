jest.mock("../api/ping");

import React from "react";
import { shallow } from "enzyme";
import SampleComponent from "./SampleComponent";

it("renders the <SampleComponent /> without crashing", () => {
  shallow(<SampleComponent />);
});
