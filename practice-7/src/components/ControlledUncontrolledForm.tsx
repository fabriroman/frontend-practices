import { useRef, useState } from 'react';

export const ControlledUncontrolledForm = () => {
  const [controlledValue, setControlledValue] = useState<string>('');
  const uncontrolledRef = useRef<HTMLInputElement>(null);

  const handleLogValues = () => {
    const uncontrolledValue = uncontrolledRef.current?.value ?? '';
    console.log({ controlledValue, uncontrolledValue });
  };

  return (
    <div>
      <h1>Controlled Uncontrolled Form</h1>
      <div>
        <label htmlFor="controlled-input">Controlled: </label>
        <input
          id="controlled-input"
          type="text"
          value={controlledValue}
          onChange={(e) => setControlledValue(e.target.value)}
          placeholder="Write something..."
        />
      </div>

      <div>
        <label htmlFor="uncontrolled-input">Uncontrolled: </label>
        <input
          id="uncontrolled-input"
          type="text"
          ref={uncontrolledRef}
          placeholder="Write something..."
        />
      </div>

      <button type="button" onClick={handleLogValues}>Log values</button>
    </div>
  );
}



