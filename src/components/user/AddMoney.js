import { useState } from 'react';
import Input from '../form/Input';

function AddMoney() {
  const [value, setValue] = useState(0);

  const doSubmit = () => {};

  return (
    <main>
      <h1>AddMoney</h1>
      <form onSubmit={doSubmit}>
        <Input
          name="Value"
          type="number"
          placeholder="Enter the value ..."
          setValue={setValue}
          value={value}
        />
      </form>
      <button className="btn btn-primary">Add</button>
    </main>
  );
}

export default AddMoney;
