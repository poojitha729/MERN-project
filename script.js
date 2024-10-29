// Sample log data to simulate storage
const logs = [
    { date: "2024-10-01", content: "Learned about arrays in JavaScript." },
    { date: "2024-10-02", content: "Reviewed CSS Flexbox layouts." }
  ];
  
  // Show a section based on navigation
  function showSection(sectionId) {
    document.querySelectorAll(".section").forEach((section) => {
      section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
  }
  

   
   // Save a new daily log entry
   function saveLog(event) {
    event.preventDefault();
    const logContent = document.getElementById("logContent").value;
    const date = new Date().toISOString().split("T")[0];
    logs.push({ date, content: logContent });
    document.getElementById("logContent").value = "";
    updateLogList();
  }
  
  // Display the progress log entries
  function updateLogList() {
    const logList = document.getElementById("logList");
    logList.innerHTML = "";
    logs.forEach((log) => {
      const logItem = document.createElement("li");
      logItem.textContent = `${log.date}: ${log.content}`;
      logList.appendChild(logItem);
    });
  }
  
  // Initialize with existing logs
  updateLogList();
  