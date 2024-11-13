import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function WashroomDetails() {
  const { id } = useParams()
  const [washroom, setWashroom] = useState(null)

  useEffect(() => {
    async function fetchWashroom() {
      const response = await fetch(`/api/washrooms/${id}`)
      if (response.status === 200) {
        const washroomData = await response.json()
        setWashroom(washroomData)
      }
    }
    fetchWashroom()
  }, [id])

  if (!washroom) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>{washroom.name}</h2>
      <p>Coordinates: {washroom.location.coordinates.join(', ')}</p>
      {/* Add more details as needed */}
    </div>
  )
}

export default WashroomDetails