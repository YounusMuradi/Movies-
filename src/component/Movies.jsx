import { useState } from "react";
import { getMovies } from './../service/fakeMovieService';
import Like from "./common/Like";

function Movies() {
    const [movies , setMovies]=useState(getMovies)
    const deleteHandle =(index) =>{
        const update =(movies.filter((n)=> n._id !== index))
        setMovies(update);
    }

    return(
        <div className="flex items-start justify-center h-1 min-h-screen py-10 bg-gray-100 ">
            <div className="w-full max-w-5xl p-6 bg-white rounded-lg shadow-md ">
<p className="my-6 text-center text-gray-600 ">
                    {movies.length>0 
                       ? `There are ${movies.length} movies in the list`
                        :"no movies available"
                    }
                    </p>
         <table className="min-w-full overflow-hidden border border-gray-300 rounded-lg first-letter:marker: ">
         <thead className="text-green-700 bg-gray-300 ">    
        <tr>
           
                <th className="px-4 py-3 text-left"><i className="fa-solid fa-heart"></i> Title</th>
                <th className="px-4 py-3 text-left">Gener</th>
                <th className="px-4 py-3 text-left">Stock</th>
                <th className="px-4 py-4 text-left">Rate</th>
                <th></th>
                <th className="px-4 py-3 text-center">Action</th>
                
          
        </tr>
          </thead>
        <tbody>
            {movies.map((movie,_id)=> (
                <tr key={movie._id} className="transition border-t hover:bg-green-50">
            <td className="px-4 py-3 font-medium text-gray-800">{movie.title}</td>
            <td className="px-4 py-3 text-gray-600">{movie.genre.name}</td>
            <td className="px-4 py-3 text-gray-600">{movie.numberInStock}</td>
            <td className="px-4 py-3 text-gray-600">{movie.dailyRentalRate}</td>
            <td><Like/></td>
            <td className="px-4 py-3 text-center">
                <button className="px-3 py-1 font-semibold text-white transition bg-red-500 rounded hover:bg-red-600" onClick={()=>deleteHandle(movie._id)
                    
                }>
Delete
                </button>
            </td>
               </tr>
  ))}
        
        </tbody>
    </table> 
      </div>
        </div>
    )
}

export default Movies;