import UserContext from "./context/userContext"
import UserInfo from "./components/UserInfo"
import Header from "./components/Header"


export default function App() {
  const user = {
    name: 'guilherme',
    email: 'gui@gmail.com',
  }

  return (
    <>
      <UserContext.Provider value={user}>
        <Header />
        <h2>Utilizando UseContext</h2>
        <UserInfo />
      </UserContext.Provider>
    </>
  )
}