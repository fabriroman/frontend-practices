import { ControlledUncontrolledForm } from './components/ControlledUncontrolledForm'
import { KeyboardControlledCounter } from './components/KeyboardControlledCounter'
import { UserList } from './components/UserList'
import { UserCard } from './components/UserCard'

function App() {

  const userCardProps = {
    name: 'John Doe',
    age: 30,
    onClick: () => console.log('Card clicked')
  }

  return (
    <>
      <ControlledUncontrolledForm />
      <UserCard {...userCardProps} />
      <UserList />
      <KeyboardControlledCounter />
    </>
  )
}

export default App
