import React, { useState, useEffect ,setSearchQuery, searchQuery , students } from 'react';
import './style.css'; 

//import './App.css';

const AttendanceMarkingSystem = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentDay, setCurrentDay] = useState('');

  useEffect(() => {
    
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);
    const formattedDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(today);

    setCurrentDate(formattedDate);
    setCurrentDay(formattedDay);
  }, []);



  const handleSubjectChange = (event) => {
    const newSelectedSubject = event.target.value;
    setSelectedSubject(newSelectedSubject);
  };
  

  const handleCheckboxChange = (event) => {
    const target = event.target;
    const isChecked = target.checked;
    const name = target.name;

    console.log(`Checkbox with name ${name} is ${isChecked ? 'checked' : 'unchecked'}`);
  };
  
  const handleSubmitAttendance = () => {
   
    const checkboxes = document.querySelectorAll('input[name="attendance"]');
    const attendanceData = [];
  
    checkboxes.forEach((checkbox) => {
      const studentName = checkbox.parentNode.previousSibling.textContent;
      const attendanceStatus = checkbox.checked ? 'absent' : 'present';
      attendanceData.push({ studentName, attendanceStatus });
    });
  
    const absentStudents = attendanceData.filter(({ attendanceStatus }) => attendanceStatus === 'absent').length;

    alert(`Number of students absent: ${absentStudents}`);

    console.log(attendanceData);
  };
  const handleSearchChange = (event) => {
    const { value } = event.target;
  
  
    setSearchQuery(value);
  
    // Perform search logic using the searchQuery value
    const filteredStudents = students.filter((student) =>
      student.toLowerCase().includes(value.toLowerCase())
    );
  

    console.log('Filtered Students:', filteredStudents);
  };
  

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  
    // Perform search logic using the searchQuery value
    const filteredStudents = students.filter((student) =>
      student.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Display or process the filtered results
    console.log('Filtered Students:', filteredStudents);
  
    // Reset the search query
    setSearchQuery('');
  };
  

  return (
    <div className="top">
      <div className="container-1">
        <div className="dept">
          <h1>ELECTRONICS AND COMMUNICATION</h1>
        </div>
        <h1>Attendance Marking System</h1>
        <p id="date">{currentDate}</p>
        

        <label htmlFor="subjects">Select Subject:</label>
        <select
          id="subjects"
          name="subjects"
          value={selectedSubject}
          onChange={handleSubjectChange}
          
        >
          <option value="math">18**71</option>
          <option value="math">18**72</option>
          <option value="math">18**73</option>
          <option value="math">18**74</option>
          <option value="math">18**75</option>
        </select>
      </div>

      <div className="topnav">
      <div className="search-container">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit" id="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>

      <div>
        <h3>*Tick mark the absentees</h3>
      </div>

      <div id="attendance-table" className="table-row-column">
        <table>
          <tbody>
            <tr>
              <th>STUDENT NAME</th>
              <th>ATTENDANCE</th>
            </tr>
            <tr>
              <td>Abhishek</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th>STUDENT NAME</th>
              <th>ATTENDANCE</th>
            </tr>
            <tr>
              <td>Ujwal </td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th>STUDENT NAME</th>
              <th>ATTENDANCE</th>
            </tr>
            <tr>
              <td>Dheeraj</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>17</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>18</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
            <tr>
              <td>19</td>
              <td>
                <input type="checkbox" name="attendance" value="present" onChange={handleCheckboxChange} />
              </td>
            </tr>
          </tbody>
        </table>
        


        
      </div>
      <button className="submit" onClick={handleSubmitAttendance}>
          Submit Attendance
        </button>
    </div>
  );
};

export default AttendanceMarkingSystem;
