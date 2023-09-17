import "./TrackerTable.scss";

const data = [
  {
    id: 1,
    company_name: "Vanguard",
    role: "Front-end Developer",
    job_link: "https://www.linkedin.com/jobs/view/3707651771",
    connection_name: "Jane Doe",
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
    date_applied: "08/27/2023",
    response: true,
    date_response: "09/15/2023",
    interview: false,
  },
];

function TrackerTable() {
  return (
    <section className="tracker-section">
      <h1>Job Tracker</h1>
      <div className="tracker-section__table">
        <div className="tracker-section__table--row">
          <h2>Company Name</h2>
          <h2>Role</h2>
          <h2>Job Link</h2>
          <h2>Connection Name(s)</h2>
          <h2>Date Applied</h2>
          <h2>Response?</h2>
          <h2>Date of Response</h2>
          <h2>Interview Request?</h2>
        </div>
        {data.map((item) => {
          return (
            <div className="tracker-section__table--row">
              <p>{item.company_name}</p>
              <p>{item.role}</p>
              <p>{item.job_link}</p>
              <p>{item.connection_name}</p>
              <p>{item.date_applied}</p>
              <p>{item.response ? "YES" : "NO"}</p>
              <p>{item.date_response ? `${item.date_response}` : "---"}</p>
              <p>
                {item.interview
                  ? item.interview
                  : item.interview === false
                  ? "NO"
                  : "---"}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TrackerTable;
