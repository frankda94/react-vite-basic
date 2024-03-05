import { render, screen } from "@testing-library/react"
import GifExpertApp from "../src/GifExpertApp"

describe('test GifExpertApp', () => {

    // const categories = ['fistCategory'];
  
    test('should exist title ', () => {
      render(<GifExpertApp/>);
      screen.getByText('GifExpertApp');
    })
    
    // test('should exist title ', () => {
    //     render(<GifExpertApp/>);
    //     screen.getByText('GifExpertApp');
    //   })
})
