import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BaseButton from 'components/BaseButton';

configure({ adapter: new Adapter() });

describe('Check if button with every appereance variant renders', () => {
  test('action button renders', () => {
    const wrapper = shallow(
      <BaseButton
        appearance="action"
        label="Action button"
        onClick={() => {}}
      />,
    );
    expect(wrapper.exists()).toBeTruthy;
  });
  test('warning button renders', () => {
    const wrapper = shallow(
      <BaseButton
        appearance="warning"
        label="Warning button"
        onClick={() => {}}
      />,
    );
    expect(wrapper.exists()).toBeTruthy;
  });
  test('primary button renders', () => {
    const wrapper = shallow(
      <BaseButton
        appearance="primary"
        label="Primary button"
        onClick={() => {}}
      />,
    );
    expect(wrapper.exists()).toBeTruthy;
  });
  test('default button renders', () => {
    const wrapper = shallow(
      <BaseButton label="Default button" onClick={() => {}} />,
    );
    expect(wrapper.exists()).toBeTruthy;
  });
});
