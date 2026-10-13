const express = require("express");
const app = express();

app.use(express.json());
let students = [
    { id: 1, name: "Sai", marks: 85 },
    { id: 2, name: "Ravi", marks: 90 }
];

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/:id", (req, res) => {
    res.json(students.find(s => s.id == req.params.id));
});

app.post("/students", (req, res) => {
    students.push(req.body);
    res.send("Student added");
});

app.put("/students/:id", (req, res) => {
    let s = students.find(s => s.id == req.params.id);
    Object.assign(s, req.body);
    res.send("Student updated");
});

app.delete("/students/:id", (req, res) => {
    students = students.filter(s => s.id != req.params.id);
    res.send("Student deleted");
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});