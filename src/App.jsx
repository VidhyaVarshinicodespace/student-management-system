import Header from "./Header";
import StudentProfile from "./StudentProfile";
import Footer from "./Footer";
import "./App.css";

function App() {

  // Student 1 details
  const student1Name = "Anu";
  const student1Department = "CSE";
  const student1Year = "3rd Year";

  // Student 2 details
  const student2Name = "Bala";
  const student2Department = "Computer Science";
  const student2Year = "3rd Year";

  return (
    <div>
      <Header />

      <h3>Student 1</h3>
      <StudentProfile
        name={student1Name}
        department={student1Department}
        year={student1Year}
      />

      <h3>Student 2</h3>
      <StudentProfile
        name={student2Name}
        department={student2Department}
        year={student2Year}
      />

      <Footer />
    </div>
  );
}

export default App;