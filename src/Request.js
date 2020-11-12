import { useEffect, useState } from "react"

const Request = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const url = "https://5f8b68dd8453150016706735.mockapi.io/users"

  const fetchData = async () => {
    const request = await fetch(url)
    if (request.status >= 200 && request.status <= 299) {
      const data = await request.json()
      setIsLoading(false)
      setIsError(false)
      return data
    } else {
      setIsLoading(false)
      setIsError(true)
      return request.statusText
    }
  }

  useEffect(() => {
    fetchData()
      .then((resp) => {
        if (!isError) {
          setData(resp)
        }
      })
      .catch((error) => {
        setIsLoading(false)
        setIsError(true)
      })
  }, [])

  if (isLoading) {
    return "Loading..."
  }
  if (isError) {
    return "There was an Error"
  }
  if (data) {
    return data
  }
}

export default Request
