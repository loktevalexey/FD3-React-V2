"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import CounterButton from '../components/CounterButton';

test('работа CounterButton', () => {

  const component = renderer.create(
    <CounterButton />
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  componentTree.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  componentTree.props.onClick();
  
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
    
});
