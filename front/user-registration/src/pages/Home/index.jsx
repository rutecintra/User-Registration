import './style.css'
import Trash from '../../assets/icons-trash.svg'

function Home() {

  const users = [
    {
      id: '5465113',
      name: 'Leticya',
      age: '27',
      email: 'leticya@email'
    },
    {
      id: '54564564',
      name: 'Rute',
      age: '27',
      email: 'rute@email'
    },
    {
      id: '45645465',
      name: 'Teste',
      age: '27',
      email: 'teste@email'
    }
  ]

  return (
    
    <div className='container'>

      <form>

        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='name' type='text'/>
        <input placeholder='Idade' name="age" type='number'/>
        <input placeholder='E-mail' name="email" type='email'/>
        <button type='button'>Cadastrar</button>

      </form>

      {users.map(user => (

        <div key = {user.id} className='card'>

          <div>

            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>E-mail: <span>{user.email}</span></p>

          </div>

          <button>
            <img src={Trash} />
          </button>

        </div>

      ))}

      
    </div>
  )
}

export default Home
