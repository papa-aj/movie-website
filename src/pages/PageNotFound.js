import React from 'react'

function PageNotFound() {
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
        <p>404 , Oops! page is noT founded</p>
        </div>
        <div className='flex flex-col items-center my-4'>
          <img src="https://image.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg" alt="404"  className='w-96 '/>
        </div>
      </section>
    </main>
  )
}

export default PageNotFound
