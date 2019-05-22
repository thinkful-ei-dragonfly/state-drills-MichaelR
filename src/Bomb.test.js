import React from 'react';
import renderer from 'react-test-renderer';

import Bomb from './Bomb';

describe('<Bombs />', () => {
  it('renders without crashing [snapshot test]', () => {
    // Render this component as JSON
    const tree = renderer.create(<Bomb />).toJSON();
    // Checks wether this matches the previous snapshot
    // The previous snapshot will be stored in __snapshots__/Bombs .test.js
    expect(tree).toMatchSnapshot();
  })
})