
import Card from '../components/Card'
import useFetch from '../Hooks/useFetch'
function MovieList({apiPath}) {

const {data: movies} = useFetch(apiPath)
  return (
    <main>
      <section className="max-w-7xl py-7">
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>

          {movies.map((movie,index) => (
  
            <Card key={index} movie={movie} />
))}
        
  

        </div>
        
     </section>
      </main>
          )
}

export default MovieList
