/**
 * @format
 */

import 'react-native';
import React from 'react';
import CircularWidget from '../src/components/CircularWidget';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('circular widget renders correctly', () => {
  renderer.create(<CircularWidget />);
});
