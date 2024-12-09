import {render, screen} from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
    it('should render the heading', () => {
        //renderiza o compoente
        const {container} = render(<Main />)
        //busca o componente
        expect(screen.getByRole('heading', {name:/react avançado/i})).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render the colors correctly', () => {
        // renderiza o component
        const { container } = render(<Main />)
        // verifica se o background-color está correto
        expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
      })
})