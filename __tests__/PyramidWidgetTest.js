/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import PyramidWidget from '../src/components/PyramidWidget';

it('pyramid widget renders correctly', () => {
  renderer.create(<PyramidWidget />);
});
