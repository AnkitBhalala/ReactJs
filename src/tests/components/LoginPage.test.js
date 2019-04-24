import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";

test("should render LoginPage component correctly", () => {
  const Wrapper = shallow(<LoginPage />);
  expect(Wrapper).toMatchSnapshot();
});

test("should render LoginPage component correctly", () => {
  const startLogin = jest.fn();
  const Wrapper = shallow(<LoginPage startLogin={startLogin} />);
  Wrapper.find("button").simulate("click");
  expect(startLogin).toHaveBeenCalled();
});
