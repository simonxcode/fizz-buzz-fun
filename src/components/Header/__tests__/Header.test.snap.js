import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Header from '../Header'

it('Header component should match snapshot', () => {
  const tree = renderer.create( <Header />).toJSON()
  expect(tree).toMatchSnapshot()
});

describe('Header component', () => {
  it('should render component content', () => {
    expect(shallow(<Header/>).find('div').length).toEqual(1)
  })
})
