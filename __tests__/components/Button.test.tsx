import React from 'react'
import Button from '../../src/components/Button'
import { render, screen, fireEvent } from "@testing-library/react-native";

const defaultProps = {
  text: 'Default Text',
  onPress: () => null,
}

describe('Button component', () => {
  describe('render', () => {
    it('renders a default Button Component', () => {
      const tree = render(<Button {...defaultProps} />)
      expect(tree).toBeDefined()
    })
    it("button onPress method", () => {
        const onPressQuoterModalSpy = jest.fn()
        render(<Button {...defaultProps} onPress={onPressQuoterModalSpy} />);
        const button = screen.getByTestId('button')
        fireEvent.press(button);
        expect(onPressQuoterModalSpy).toHaveBeenCalled()
      });
  })
})
