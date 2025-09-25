import { useState } from "react";

type UserCardProps = {
  name: string;
  age: number;
  onClick: () => void;
};

export const UserCard = ({ name, age, onClick }: UserCardProps) => {
  const [greeted, setGreeted] = useState(false);

  const handleClick = () => {
    onClick();
    setGreeted(true);
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <h1>{name}</h1>
      <p>{age}</p>
      {greeted && <p>Hello {name}</p>}
    </div>
  );
};
