import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Form from '../Form'

it('Form component should match snapshot', () => {
  const tree = renderer.create( < Form / > ).toJSON()
  expect(tree).toMatchSnapshot()
});

describe('Form component', () => {
  it('should render component content', () => {
    expect(shallow(<Form/>).find('form').length).toEqual(1)
    expect(shallow(<Form/>).find('h1').length).toEqual(1)
    expect(shallow(<Form/>).find('p').length).toEqual(2)
    expect(shallow(<Form/>).find('label').length).toEqual(9)
    expect(shallow(<Form/>).find('input').length).toEqual(9)
    expect(shallow( < Form / > ).find('button').length).toEqual(1)
  })
})
