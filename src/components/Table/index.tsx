import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import {
  ContextMenuContent,
  ContextMenuItem,
  PriceHighlight,
  TableContainer,
} from './styles'
import * as ContextMenu from '@radix-ui/react-context-menu'
import { Trash } from 'phosphor-react'

export function Table() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const deleteTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.deleteTransaction
    },
  )

  async function handleDeleteTransaction(id: number) {
    await deleteTransaction(id)
  }

  return (
    <TableContainer>
      <tbody>
        {transactions.map((transactions) => {
          return (
            <ContextMenu.Root key={transactions.id}>
              <ContextMenu.Trigger asChild>
                <tr>
                  <td width="50%">{transactions.description}</td>
                  <td>
                    <PriceHighlight variant={transactions.type}>
                      {transactions.type === 'outcome' && '- '}
                      {priceFormatter.format(transactions.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transactions.category}</td>
                  <td>
                    {transactions.createdAt &&
                      dateFormatter.format(new Date(transactions.createdAt))}
                  </td>
                </tr>
              </ContextMenu.Trigger>

              <ContextMenu.Portal>
                <ContextMenuContent>
                  <ContextMenuItem
                    onClick={() => {
                      handleDeleteTransaction(transactions.id)
                    }}
                  >
                    <Trash size={24} />
                    Deletar
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu.Portal>
            </ContextMenu.Root>
          )
        })}
      </tbody>
    </TableContainer>
  )
}
