import React from 'react'
import Product from '../../src/components/Product'
import { render, screen, fireEvent } from "@testing-library/react-native";

const defaultProps = {
    item: {
        "createdAt": "2022-12-09T10:20:00.909Z",
        "product": "Fantastic Granite Bacon",
        "points": 42416,
        "image": "https://loremflickr.com/640/480/technics",
        "is_redemption": false,
        "id": "3"
    },
    onPress: () => null
}

describe('Product component', () => {
  describe('render', () => {
    it('renders a default Product Component', () => {
        const tree = render(<Product {...defaultProps} />)
        expect(tree).toBeDefined()
    })
    it("button onPress method", () => {
        const onPressQuoterModalSpy = jest.fn()
        render(<Product {...defaultProps} onPress={onPressQuoterModalSpy} />);
        const button = screen.getByTestId('button')
        fireEvent.press(button);
        expect(onPressQuoterModalSpy).toHaveBeenCalled()
      });
      it("Get text of Product Card", () => {
        render(<Product {...defaultProps} />);
        const title = screen.getByTestId('title')
        const date = screen.getByTestId('date')
        const isRedemption = screen.getByTestId('isRedemption')
        expect(title.props.children).toEqual('Fantastic Granite Bacon')
        expect(date.props.children).toEqual('09 de diciembre , 2022')
        expect(isRedemption.props.children).toEqual('+')
      });
  })
})
