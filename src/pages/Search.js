import Card from "../components/Card"
import useFetch from "../Hooks/useFetch"
import { useSearchParams } from "react-router-dom"

function Search({ apiPath }) {
  const [searchParams] = useSearchParams()
const query = searchParams.get('q')
  const { data: movies } = useFetch(apiPath, query)
  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 ml-6">{movies.length === 0 ? `No Result ${query}` : `Result: ${query}`}</p>
      </section>

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

export default Search
