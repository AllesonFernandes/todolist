


export default function Card({ id, title, category, completed, completedTask, removeId, onClick }) {
    return (
        <div className="flex flex-col justify-center items-center p-4 bg-white shadow-md rounded-lg mb-4 sm:flex-row sm:justify-between" style={{ backgroundColor: completed ? "#fca5a5" : "" }}>
            <div className="flex flex-col mb-2 items-center sm:items-start">
                <h2 className="text-xl font-semibold m-2">{title}</h2>
                <p className="font-bold m-2">({category})</p>
            </div>
            <div className="flex flex-col items-center justify-end gap-1.5 sm:flex-row sm:justify-between sm:items-center">
                <button className="py-1 px-2 bg-green-700 text-white rounded-lg hover:bg-green-900 transition-discrete duration-300 cursor-pointer" onClick={() => completedTask(id)}>Completar</button>
                <button className="py-1 px-3 bg-red-500 text-white rounded-lg ml-2.5 hover:bg-red-700 transition-discrete duration-300 cursor-pointer" onClick={() => removeId(id)}>X</button>
            </div>
        </div>
    )
}