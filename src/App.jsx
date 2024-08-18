import PDF from "./PDF";
import { PDFDownloadLink } from "@react-pdf/renderer";

import "./App.css";
import { useState } from "react";

function App() {
  const [student, setStudent] = useState("John Doe");
  const [project, setProject] = useState("MATHEMATICS PROJECT");
  const [subject, setSubject] = useState("Mathematics");
  const [teacher, setTeacher] = useState("Steve Smith");
  const [year, setYear] = useState("2025");

  return (
    <>
      <header>
        <img className="logo" src="/gps.png" alt="GPS logo" />
        <h1>Project Front Page Generator</h1>
      </header>
      <main>
        <form>
          <h2>Project Details</h2>
          <div className="fields">
            <div className="field">
              <label>Student</label>
              <input
                type="text"
                value={student}
                onChange={(event) => setStudent(event.target.value)}
                required
              />
            </div>
            <div className="field">
              <label>Project</label>
              <input
                type="text"
                value={project}
                onChange={(event) => setProject(event.target.value)}
                required
              />
            </div>
            <div className="field">
              <label>Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                required
              />
            </div>
            <div className="field">
              <label>Teacher</label>
              <input
                type="text"
                value={teacher}
                onChange={(event) => setTeacher(event.target.value)}
                required
              />
            </div>
            <div className="field">
              <label>Year</label>
              <input
                type="number"
                value={year}
                onChange={(event) => setYear(event.target.value)}
                required
              />
            </div>
          </div>
          <PDFDownloadLink
            document={
              <PDF
                studentName={student}
                projectName={project}
                subject={subject}
                teacher={teacher}
                year={year}
              />
            }
            fileName={`${subject} Project Front Pages`}
            style={{ textDecoration: "none" }}
          >
            <button className="download">
              <img src="/pdf.svg" alt="Download PDF" />
              <p>Download PDF</p>
            </button>
          </PDFDownloadLink>
        </form>
      </main>
    </>
  );
}

export default App;
