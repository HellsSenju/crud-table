import React, {useState} from 'react';
import './App.css';

const initialValues = {
  userName: '',
  userSurname: '',
  userSalary: ''
}

function App() {
  const [userData, setUserData] = useState(initialValues);
  console.log('userData: ', userData)
  return (
    <div className='wrapper'>
      <div className='content'>
        <div className='table-data'>
          <table>
            <th>#</th>
            <th>User Name</th>
            <th>User Surname</th>
            <th>User Salary</th>
            <th>Actions</th>

            <tbody>
            </tbody>
          </table>
        </div>

        <div className='form-data'>
          <form>
            <input placeholder='input your name' onChange={(e) => setUserData((prevState) => ({
              ...prevState,
              userName: e.target.value
            }))}></input>

            <input placeholder='input your surname' onChange={(e) => setUserData((prevState) => ({
              ...prevState,
              userSurname: e.target.value
            }))}></input>

            <input placeholder='input your salary' onChange={(e) => setUserData((prevState) => ({
              ...prevState,
              userSalary: e.target.value
            }))}></input>

            <div className='buttons-wrapper'>
              <button type='reset'>Clean</button>
              <button type='submit'>Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>


  );
}

export default App;
