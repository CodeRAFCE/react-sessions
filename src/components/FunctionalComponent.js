
const FunctionalComponent = ({ user }) => {
  return (
    <div className="user-card">
        <h2>Name: {user.name} Function</h2>
        <h3>Age: {user.age}</h3>
        <p>Occupation: {user.occupation}</p>
    </div>
  )
}

export default FunctionalComponent