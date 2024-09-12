import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Pruebas en <GifItem />', () => { 

  const title = 'Saitama'
  const url = 'https://one-punch.com/saitama.jpg'

  test('debe de hacer match con el snapshot', () => {

    const {container} = render(<GifItem title= {title} url= {url} />)
    expect (container).toMatchSnapshot()
    
  })
  test('should Mostarr la imagen con el url y ALT indicado', () => { 

    render (<GifItem title= {title} url= {url} />);
    /* screen.debug(); */
    //expect (screen.getByRole('img').src).toBe(url);
    //expect (screen.getByRole('img').alt).toBe(title)
    const {src, alt} = screen.getByRole('img');
    expect (src).toBe(url)
    expect (alt).toBe(title)
    

   })

})