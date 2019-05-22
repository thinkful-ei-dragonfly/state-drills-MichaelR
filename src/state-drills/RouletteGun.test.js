import React from 'react';
import renderer from 'react-test-renderer';

import RouletteGun from './RouletteGun';

describe('<RouletteGuns />', () => {
  it('renders without crashing [snapshot test]', () => {
    // Render this component as JSON
    const tree = renderer.create(<RouletteGun />).toJSON();
    // Checks wether this matches the previous snapshot
    // The previous snapshot will be stored in __snapshots__/RouletteGuns .test.js
    expect(tree).toMatchSnapshot();
  })
})