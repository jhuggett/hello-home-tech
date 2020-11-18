import Link from 'next/link'
import styled from 'styled-components'
import { InlineForm, InlineTextField } from 'react-tinacms-inline'
import { EditLink } from './EditLink'

export interface NavProps {
  data: any
  cms;
}

export const Nav = ({data, cms} : NavProps) => {
  
  return (
      <Header>
          <NavigationLink>
            <Link href="/services">
              Services
            </Link>
          </NavigationLink>
          <NavigationLink>
            <Link href="/testimonials">
              Testimonials
            </Link>
          </NavigationLink>

          <Title>
            {data.title}
          </Title>

          <NavigationLink>
            <Link href="/contact">
              Contact
            </Link>
          </NavigationLink>

          <NavigationLink>
            <Link href="/edit">
              <EditLink cms={cms} />
            </Link>
          </NavigationLink>
        </Header>
  )
}

const Title = styled.div`
  font-size: 3em;
  font-weight: bold;
  @media (max-width: 1000px) {
    order: 1;
  }
`

const NavigationLink = styled.div`
@media (max-width: 1000px) {
  order: 2;
}
`

const Header = styled.div`
  height: 10em;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1000px) {
    justify-content: center;
    flex-direction: column;
  }
`