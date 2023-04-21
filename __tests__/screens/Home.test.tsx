import React from 'react'
import Home from '../../src/screens/Home'
import { render } from "@testing-library/react-native";

const defaultProps = {
    navigation: {
        navigate: jest.fn()
      },
}

describe('Money Home Screen', () => {
  describe('render', () => {
    it('renders a default Home Screen', () => {
        const tree = render(<Home {...defaultProps} />)
        expect(tree).toBeDefined()
    })
  })
})
