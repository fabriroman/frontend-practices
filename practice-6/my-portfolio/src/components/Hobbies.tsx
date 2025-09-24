type HobbiesProps = {
  hobbies: string[];
}

const Hobbies = ({ hobbies }: HobbiesProps) => {
  return (
    <aside className="hobbies-section">
      <h2>Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </aside>
  )
}

export default Hobbies;
