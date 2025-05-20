
import { useState } from "react"
import { categories } from "../data/categories"
import type { ChangeEvent , SyntheticEvent , FormEvent } from "react"
import type { Activity } from "../types"

export default function Form() {

const [ activity , setActivity ] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0
    })
    
const handleChange = (e: ChangeEvent<HTMLInputElement> | SyntheticEvent<HTMLSelectElement, Event>) => {
    
    const isNumberField = [ 'category','calories' ].includes(e.target.id)
    setActivity({
        ...activity,
        [ e.target.id ]: isNumberField ? +e.target.value : e.target.value
    })
}

const isValidActivity = () => {
    const { name , calories } = activity
    return name.trim() !== '' && calories > 0
}

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Submit...')
}

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg"
        onSubmit={handleSubmit}
    >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categoria:</label>
            <select  
                className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                id="category"
                value={activity.category}
                onChange={handleChange}
            >
                {categories.map( category => (
                    <option 
                        key={category.id}
                        value={category.id}
                    >
                        {category.name}
                    </option>
                ) )}
            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Actividad:</label>
                <input 
                    id="name"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Comida, Jugo de Naranja, Ejercicio, Bicicleta"
                    value={activity.name}
                    onChange={handleChange}
                />
        </div>

        <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorias:</label>
                <input 
                    id="calories"
                    type="number"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Total de Calorias (300 , 500)"
                    value={activity.calories}
                    onChange={handleChange}
                />
        </div>

        <input 
            type="submit" 
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-30"
            value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio' }
            disabled={!isValidActivity}
        />
    </form>
  )
}
