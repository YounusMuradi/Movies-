import { useState } from "react";
import { getMovies } from './../service/fakeMovieService';

function Movies() {
    const [movies , setMovies]=useState(getMovies)
    const deleteHandle =(index) =>{
        const update =(movies.filter((n)=> n._id !== index))
        setMovies(update);
    }

    return(
        <div className="flex items-start justify-center min-h-screen py-10 bg-gray-100 ">
            <div className="w-full max-w-5xl p-6 bg-white rounded-lg shadow-md ">

                    {movies.length>0 &&(
                        <p className="my-6 text-center text-gray-600 ">There are {movies.length} movies in the list</p>
                    )}
         <table className="min-w-full overflow-hidden border border-gray-300 rounded-lg ">
         <thead className="text-green-700 bg-gray-300 ">    
        <tr>
           
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Gener</th>
                <th className="px-4 py-3 text-left">Stock</th>
                <th className="px-4 py-3 text-left">Rate</th>
                <th className="px-4 py-3 text-center">Action</th>
          
        </tr>
          </thead>
        <tbody>
            {movies.map((movie)=> (
                <tr key={movie._id} className="transition border-t hover:bg-green-50">
            <td className="px-4 py-3 font-medium text-gray-800">{movie.title}</td>
            <td className="px-4 py-3 text-gray-600">{movie.genre.name}</td>
            <td className="px-4 py-3 text-gray-600">{movie.numberInStock}</td>
            <td className="px-4 py-3 text-gray-600">{movie.dailyRentalRate}</td>
            <td className="px-4 py-3 text-center">
                <button className="px-3 py-1 font-semibold text-white transition bg-red-500 rounded hover:bg-red-600" onClick={()=>deleteHandle(movie._id)
                    
                }>
Delete
                </button>
            </td>
               </tr>
  ))}
         {movies.length ===0 && (
            <tr>
                <td colSpan="5" className="py-6 italic text-center text-green-500 ">there are no movies available</td>
            </tr>
         )}  
        </tbody>
    </table> 
      </div>
        </div>
    )
}

export default Movies;