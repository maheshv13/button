import React, { useState } from "react";
import type { UserProps } from "../../types/UserType/UserType";

interface AddUserProps {
  onAdd: (newUser: UserProps) => void;
  disabled?: boolean; // Add this line
}

const AddUserForm = ({onAdd, disabled}: AddUserProps) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if(!name || !lastname) return;

    const newUser: UserProps = {
      id: Date.now(), // Simple way to generate a unique ID
      name,
      lastname,
      status: "online", // Default status
    };

    onAdd(newUser);
    setName("");
    setLastname("");
  }

  return (
    <form
      className="flex p-6 my-6 border-purple-200 border rounded-md justify-center"
      onSubmit={handleSubmit}
      action="">

      <input
        disabled={disabled} // Disable inputs and button if 'disabled' is true
        id={name} 
        placeholder="First Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input
        disabled={disabled} // Disable inputs and button if 'disabled' is true
        id={name} 
        placeholder="Last Name" 
        value={lastname} 
        onChange={(e) => setLastname(e.target.value)} 
      />
      <button
        disabled={disabled} // Disable inputs and button if 'disabled' is true
        className="text-white bg-purple-950 p-2 rounded-lg transition-colors text-sm font-medium" 
        type="submit">
        Add User</button>
      
    </form>
  )

}

export default AddUserForm;