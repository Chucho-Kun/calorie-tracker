import { categories } from "../data/categories"

export default function Form() {
  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categoria:</label>
            <select id="category" className="border border-slate-300 p-2 rounded-lg w-full bg-white">
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
                <label htmlFor="activity" className="font-bold">Actividad:</label>
                <input 
                    id="activity"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Comida, Jugo de Naranja, Ejercicio, Bicicleta"
                />
        </div>

        <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorias:</label>
                <input 
                    id="calories"
                    type="number"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Total de Calorias (300 , 500)"
                />
        </div>

        <input 
            type="submit" 
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
            value="Guardar comida o guardar ejercicio"
        />
    </form>
  )
}
