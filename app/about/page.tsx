import React from 'react'

async function about() {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  if(!response.ok) throw new Error('Failed to fetch data');

  const albums = await response.json();
  

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols'> 
      {albums.map((album: { id: number; title: string }) => (
        <div key={album.id} className="m-4 p-6 border rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Album ID: {album.id}</h2>  
          <p className="text-gray-600">Title: {album.title}</p>
        </div>
      ))}
    </div>
  )
}

export default about
