
export default  function UserBlock() {
  const [data=[],isFetching]=useFetchUsersQuery(10);
  return (
    <div>
       <p> {data && data.length} Dogs fetched</p>
        <div>
          {data && data.map((breed) => (
            <li key={breed.id}>{breed.name}</li>
          ))}
    </div>
  )
}