import Link from 'next/link'
import styled from 'styled-components'
import { InlineForm, InlineTextField } from 'react-tinacms-inline'

export interface NavProps {
  
}

export const Nav = ({ } : NavProps) => {
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
          <InlineTextField name={'title'} />
        </Title>

        <NavigationLink>
          <Link href="/contact">
            Contact
          </Link>
        </NavigationLink>

        <NavigationLink>
          <Link href="/contact">
            Something else
          </Link>
        </NavigationLink>
      </Header>
  )
}

const Title = styled.div`
  font-size: 3em;
  font-weight: bold;
`

const NavigationLink = styled.div`
`

const Header = styled.div`
  height: 10em;
  display: flex;
  justify-content: space-around;
  align-items: center;
`