import './App.css';
import NavBar from './Navbar.jsx';
import EmployeeList from './EmployeeList.jsx'; // Import EmployeeList component

function App() {
  const user = {
    age: 18,
    isLoggedIn: true,
    isAdmin: true,
    darkMode: false,
  };

  const employees = [
    {
      name: 'James King',
      title: 'President and CEO',
      officePhone: '+1 (555) 555-1212',
      mobileNumber: '+1 (555) 555-5555',
      sms: '+1 (555) 555-7777',
      email: 'james.king@company.com',
    },
    {
      name: 'Julie Taylor',
      title: 'VP of Marketing',
      officePhone: '+1 (555) 555-2323',
      mobileNumber: '+1 (555) 555-6666',
      sms: '+1 (555) 555-8888',
      email: 'julie.taylor@company.com',
    },
  
  ];

  return (
     <div className={user.darkMode ? 'darkMode' : 'lightMode'}>
        <NavBar userData={user} />
  
        <Homepage> {/* Wrap content in Homepage component */}
          <Header>
            <h1>Employee Directory</h1> {/* Header title */}
            <SearchBar employees={employees} /> {/* Include SearchBar component */}
          </Header>
  
          <EmployeeList employees={employees} /> {/* Pass employee data */}
        </Homepage>
      </div>
    );
  
}

export default App;
