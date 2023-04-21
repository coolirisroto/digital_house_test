import React from 'react'
import MoneyCard from '../../src/components/MoneyCard'
import { render, screen } from "@testing-library/react-native";

const defaultProps = {
    points: 500
}

describe('Money Card component', () => {
  describe('render', () => {
    it('renders a default Money Card Component', () => {
        const tree = render(<MoneyCard {...defaultProps} />)
        expect(tree).toBeDefined()
    })
    it("Get points of Money Card", () => {
        render(<MoneyCard {...defaultProps} />);
        const points = screen.getByTestId('points')
        expect(points.props.children).toEqual('500.00 pts')
      });
  })
})
