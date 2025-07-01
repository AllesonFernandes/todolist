import { useState } from "react";

export default function NewTask({ addTask }) {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !category) {

            setError('Por favor, preencha todos os campos.');
            return;
            
        }
        setError('');
        addTask(title, category);
        setTitle('');
        setCategory('');

    };

    

    return (
        <div className="flex bg-gray-300 rounded-lg p-4">
            <form id="adicaoTask" className="w-full" onSubmit={handleSubmit}>
                <h1 className="mb-1 font-medium text-2xl">Adicionar nova tarefa</h1>
                {error && (
                    <div className="flex flex-col items-center justify-center bg-red-400 p-4 m-4 rounded-lg">
                    <p className="text-white">{error}</p>
                    </div>)}
                <div className="flex flex-col mb-4">
                    <label htmlFor="addTitles" id="tasks" >Tarefa</label>
                    <input id="addTitles" className="bg-white rounded-lg px-2 py-1" type="text" placeholder="Título da tarefa" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="categoryTask" id="category">Categorias</label>
                    <select id="categoryTask" className="block bg-white rounded-lg px-2 py-1"  placeholder="Selecione uma categoria" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Selecione uma categoria</option>
                        <option value="Mercado">Mercado</option>
                        <option value="Estudos">Estudos</option>
                        <option value="Saúde">Saúde</option>
                    </select>
                </div>
                <button className="w-full py-2 px-4 bg-blue-700 text-white rounded-lg hover:bg-blue-900 transition-discrete duration-300 cursor-pointer">Criar tarefa</button>
            </form>
        </div>
    )
}