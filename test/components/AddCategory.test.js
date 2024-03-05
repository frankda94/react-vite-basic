import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('test AddCategory', () => {

    test('should change input tex', () => {
        render(<AddCategory onNewCategory={() => { }} />)
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'saitama' } });

        expect(input.value).toEqual('saitama');
        // screen.debug();
    })

    test('should call onNewCategory if input has a value', () => {

        const inputValue = 'saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })

    test('should not call onNewCategory if input has not a value', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />)
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
      
    })
    


})
