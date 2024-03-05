import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('test gifItem', () => {

    const tittle = 'tituloImagen';
    const url = 'https://urlimagen/';

    test('should to do match with snapshot', () => {
        const { container } = render(<GifItem title={tittle} url={url} />);
        expect(container).toMatchSnapshot();
    })

    test('should show image with URL and Alt indicated', () => {
        render(<GifItem title={tittle} url={url} />);
        expect(screen.getByRole('img').src).toBe(url);
        expect(screen.getByRole('img').alt).toBe(tittle);
    })
    

})
