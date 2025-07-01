import { useState } from 'react'
import Card from '../components/Card'
import NewTask from '../components/NewTask'
import Search from '../components/Search';


function App() {
  const [tarefa, setTarefa] = useState([
    {
      id: 1,
      title: 'Comprar pão',
      category: 'Mercado',
      completed: false
    },
    {
      id: 2,
      title: 'Estudar React',
      category: 'Estudos',
      completed: false
    },
    {
      id: 3,
      title: 'Ir à academia',
      category: 'Saúde',
      completed: false
    }
  ])
  const addTask = (title, category) => {
    const newTask = [...tarefa,
      {
        id: Math.floor(Math.random() * 1000),
        title,
        category,
        completed: false
      },
    ];
    setTarefa(newTask);
  };

  const completedTask = (id) => {
    const newTask = [...tarefa];
    newTask.map(item => { item.id === id ? item.completed = !item.completed : item });
    setTarefa(newTask);
  };

  const removeId = (id) => {
    const newTask = [...tarefa]
    const filteredTasks = newTask.filter(item => item.id !== id ? item.id : null);
    setTarefa(filteredTasks);
  };

  const [search, setSearch] = useState('');


  return (
    <div className='flex flex-col sm:flex-row w-full items-start justify-center min-h-screen bg-gray-100 p-4 gap-3'>
  
      <div className='w-full'>
        <div className='mb-4 bg-gray-300 rounded-lg p-4'>
          <Search searchTask={search} setSearchTask={setSearch} />
        </div>
        <NewTask addTask={addTask} />
      </div>
      <div className='w-full max-x-xl bg-gray-300 shadow-md rounded-lg p-4 md:p-6'>
        <h1 className='mb-1 font-medium text-2xl'>Lista de tarefas</h1>
        {tarefa
          .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
          .map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            category={item.category}
            completed={item.completed}
            removeId={removeId}
            completedTask={completedTask}
          />
        ))}
      </div>
      
    </div>
  )
}

export default App
