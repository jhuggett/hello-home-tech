import { TinaCMS } from "tinacms"
import styled from "styled-components"

export interface EditLinkProps {
  cms: TinaCMS
}

export const EditLink = ({ cms }: EditLinkProps) => {
  return (
    <div>
      <Button onClick={() => cms.toggle()}>
        {cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}
      </Button>
    </div>
  )
}

const Button = styled.div`

`