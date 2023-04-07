import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { Table } from '../../components/Table'
import { SearchForm } from './components/SearchForm'
import { TransactionsContainer } from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <Table />
      </TransactionsContainer>
    </div>
  )
}
