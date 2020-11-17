import Link from 'next/link'
import styled from 'styled-components'

export interface NavProps {
  title: string
}

export const Nav = ({ title } : NavProps) => {
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
          {title}
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