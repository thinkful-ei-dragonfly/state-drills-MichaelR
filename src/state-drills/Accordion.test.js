import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-adapter-react-16';

import Accordion from './Accordion';

configure({adapter: new Adapter()});

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

describe('<Accordion />', () => {

  it('renders without crashing [snapshot test]', () => {
    // Render this component as JSON
    const tree = renderer.create(<Accordion />).toJSON();
    // Checks wether this matches the previous snapshot
    // The previous snapshot will be stored in __snapshots__/Accordion .test.js
    expect(tree).toMatchSnapshot();
  })

  it('renders empty given no sections', () => {
    // const wrapper = shallow(<Accordion />);
    // toJson(wrapper);
    // expect(toJson(wrapper)).toMatchSnapshot()
    const wrapper = shallow(<Accordion />);
    // toJson(wrapper);
    // expect(toJson(wrapper)).toMatchSnapshot()
  })
})