import "./TrackerTable.scss";
import { useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react"; // Import useState and useEffect

const data = [
  {
    id: 1,
    company_name: "Vanguard",
    role: "Front-end Developer",
    job_link: "https://www.linkedin.com/jobs/view/3707651771",
    connection_name: "Jane Doe",
    connection_contact: false,
    date_applied: "09/16/2023",
    response: false,
    date_response: null,
    interview: null,
  },
  {
    id: 2,
    company_name: "Assurant",
    role: "Front-end Developer",
    job_link: "https://www.linkedin.com/jobs/view/3707651771",
    connection_name: "Jane Doe",
    connection_contact: true,
    date_applied: "08/27/2023",
    response: true,
    date_response: "09/15/2023",
    interview: false,
  },
];


function TrackerTable() {
  const { user } = useUser();
  const user_email = user.emailAddresses[0].emailAddress;
  const applicationsUrl = `http://localhost:3001/applications?user_email=${user_email}`;

  // Define state to store the combined data
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    // Fetch the applications data and combine it with the existing data
    fetch(applicationsUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse response JSON
      })
      .then((responseData) => {
        // Combine the existing data with the fetched data
        const newData = [...data, ...responseData];
        setCombinedData(newData); // Update the state with the combined data
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [applicationsUrl]); // Empty dependency array to fetch data once when the component mounts

  console.log(combinedData)

  return (
    <section className="tracker-section">
      <h1>Job Tracker</h1>
      <div className="tracker-section__table">
        <div className="tracker-section__table--row">
          <h2>Company Name</h2>
          <h2>Role</h2>
          <h2>Job Link</h2>
          <h2>Connection Name(s)</h2>
          <h2>Contacted?</h2>
          <h2>Date Applied</h2>
          <h2>Response?</h2>
          <h2>Date of Response</h2>
          <h2>Interview Request?</h2>
        </div>
        {combinedData.map((item) => {
          return (
            <div className="tracker-section__table--row" key={item.id}>
              <p>{item.company_name}</p>
              <p>{item.role_name ? item.role_name : "---"}</p> {/* Use the correct key */}
              <p>{item.job_link ? item.job_link : "---"}</p>
              <p>{item.connection_name ? item.connection_name : "---"}</p>
              <div className={`colored-box ${item.connection_contact ? "green" : "red"}`}>
                <p>{item.connection_contact ? "YES" : "NO"}</p>
              </div>
              <p>{item.date_applied}</p>
              <div className={`colored-box ${item.response ? "green" : "red"}`}>
                <p>{item.response ? "YES" : "NO"}</p>
              </div>
              <p>{item.date_response ? item.date_response : "---"}</p>
              <div
                className={`colored-box ${
                  item.interview
                    ? "green"
                    : item.interview === false
                    ? "red"
                    : ""
                }`}
              >
                <p>
                  {item.interview
                    ? item.interview
                    : item.interview === false
                    ? "NO"
                    : "---"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TrackerTable;
