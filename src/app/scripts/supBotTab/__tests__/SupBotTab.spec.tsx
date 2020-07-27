import * as React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { Header } from "@fluentui/react-northstar";

import { SupBotTab } from "../SupBotTab";

describe("SupBotTab Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<SupBotTab />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<SupBotTab />);
        const divResult = component.containsMatchingElement(<Header content="This is your tab" />);

        expect(divResult).toBeTruthy();
    });

    // Mocking Sample
    it("should show alert on button click", () => {
        window.alert = jest.fn();

        const component = mount(<SupBotTab />);
        const button = component.find("button");
        button.simulate("click");

        expect(window.alert).toHaveBeenCalledWith("It worked!");

        component.unmount();
    });
});
