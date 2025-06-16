const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!\n");

  if (req.url === "/todos" && req.method === "GET") {
    // Here you would typically fetch todos from a database
    const todos = [
      { id: 1, task: "Learn Node.js", completed: false },
      { id: 2, task: "Build a ToDo app", completed: false },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(todos));
  }
  if (req.url === "/todos" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString(); // Convert Buffer to string
    });
    req.on("end", () => {
      const todo = JSON.parse(body);
      // Here you would typically save the todo to a database
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Todo created", todo }));
    });
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});

// To run this server, save the code in a file named server.js and run it using Node.js:
// node server.js