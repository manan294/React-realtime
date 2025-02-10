import React, { useState } from "react";
import { app } from "./firebase";
import { getDatabase, ref, remove, set, update } from "firebase/database";
import './App.css'; 

const db = getDatabase(app);

function App() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userId, setUserId] = useState("");
  const [alertMessage, setAlertMessage] = useState(""); 

  const resetForm = () => {
    setUserName("");
    setUserAge("");
    setUserCity("");
    setUserId("");
  };

  const addData = () => {
    if (!userName || !userAge || !userCity || !userId) {
      return;
    }

    set(ref(db, `users/${userName}`), {
      id: userId,
      name: userName,
      age: userAge,
      city: userCity,
    })
      .then(() => {
        console.log("Data Added Successfully");
        setAlertMessage(""); 
        resetForm();
      })
      .catch((err) => {
        console.log(err);
        setAlertMessage("Error adding data");
      });
  };

  const deleteData = () => {
    if (!userName) {
      return;
    }

    const userRef = ref(db, `users/${userName}`);

    remove(userRef)
      .then(() => {
        console.log("Data Deleted Successfully");
        setAlertMessage("");
        resetForm(); 
      })
      .catch((err) => {
        console.log(err);
        setAlertMessage("Error deleting data");
      });
  };

  const updateData = () => {
    if (!userName || !userAge || !userCity || !userId) {
      return;
    }

    const userRef = ref(db, `users/${userName}`);

    update(userRef, {
      id: userId,
      name: userName,
      age: userAge,
      city: userCity,
    })
      .then(() => {
        console.log("Data Updated Successfully");
        setAlertMessage(""); 
        resetForm();
      })
      .catch((err) => {
        console.log(err);
        setAlertMessage("Error updating data");
      });
  };

  return (
    <div className="container">
      <div>
        <input
          className="form-input"
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          className="form-input"
          type="text"
          placeholder="Enter Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="form-input"
          type="number"
          placeholder="Enter Age"
          value={userAge}
          onChange={(e) => setUserAge(e.target.value)}
        />
        <input
          className="form-input"
          type="text"
          placeholder="Enter City"
          value={userCity}
          onChange={(e) => setUserCity(e.target.value)}
        />
      </div>
      <button className="button" onClick={addData}>Add Data</button>
      <button className="button" onClick={updateData}>Update Data</button>
      <button className="button" onClick={deleteData}>Delete Data</button>
      {alertMessage && <div className="alert-message">{alertMessage}</div>}
    </div>
  );
}

export default App;
