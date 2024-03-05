import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('test GifGrid', () => {

  const category = 'One Punch';

  test('should show the loading', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando ...'));
    expect(screen.getByText(category));

  })

  test('should show items when images are charged by useFetchGifs', () => {

    useFetchGifs.mockReturnValue({
      images: [{
        id: 'ABC',
        title: 'goku',
        url: 'https://goku/goku.gif'
      },
      {
        id: '123',
        title: 'saitama',
        url: 'https://saitama/saitama.gif'
      }],
      isLoading: false
    })
    render(<GifGrid category={category} />);
    screen.debug();
    expect(screen.getAllByRole('img').length).toBe(2);

  })

})
