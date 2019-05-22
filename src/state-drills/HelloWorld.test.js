import React from 'react';
import renderer from 'react-test-renderer';

import HelloWorld from './HelloWorld';

describe('<HelloWorlds />', () => {
  it('renders without crashing [snapshot test]', () => {
    // Render this component as JSON
    const tree = renderer.create(<HelloWorld />).toJSON();
    // Checks wether this matches the previous snapshot
    // The previous snapshot will be stored in __snapshots__/HelloWorlds .test.js
    expect(tree).toMatchSnapshot();
  })
})