import React from 'react'
import renderer from 'react-test-renderer'
import Form from '../Form'

it('Form component should match snapshot', () => {
  const tree = renderer.create( < Form / > ).toJSON()
  expect(tree).toMatchSnapshot()
});
