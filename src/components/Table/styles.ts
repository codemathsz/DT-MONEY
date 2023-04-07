import styled from 'styled-components'
import * as ContextMenu from '@radix-ui/react-context-menu'

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin: 1.5rem 0;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

export const ContextMenuContent = styled(ContextMenu.Content)`
  min-width: 8rem;
  min-height: 1.5rem;
  background-color: ${(props) => props.theme['gray-900']};
  border-radius: 6px;
  overflow: hidden;
  padding: 5px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`

export const ContextMenuItem = styled(ContextMenu.Item)`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => props.theme['red-300']};
  cursor: pointer;
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
