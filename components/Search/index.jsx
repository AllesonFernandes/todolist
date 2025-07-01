import React, { useState } from 'react';

export default function Search({ searchTask, setSearchTask }) {

    

    return (
        <div className="">
            <h1 className="mb-1 font-medium text-2xl">Procurar tarefas</h1>
            
            <div className="flex mb-4 items-end gap-2">
                <div className="flex flex-col flex-1">
                    <label htmlFor="search">Pesquisar</label>
                    <input id="search" className="bg-white rounded-lg px-2 py-1" type="text" placeholder="Pesquise seus tarefas" value={searchTask} onChange={(e) => setSearchTask(e.target.value)} />
                </div>
                
            </div>
            
        </div>
    )
}