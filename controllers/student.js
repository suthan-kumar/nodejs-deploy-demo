const Student = require("../models/student");

// Business Logic

// Get All Students
const getStudents = (req, res) => {
  res.status(200).send(new Student().findAll());
};

// Get Student By Id
const findStudentById = (req, res) => {
  const { id } = req.params;
  res.status(200).send(new Student().findOne(id));
};

// Create new Student
const createStudent = (req, res) => {
  const data = req.body;
  new Student().save(data);
  res.status(201).send(data);
};

// Update Student
const updateStudent = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  new Student().updateOne(id, data);
  res.sendStatus(204);
};

// Delete Student
const deleteStudent = (req, res) => {
  const { id } = req.params;
  new Student().deleteOne(id);
  res.sendStatus(204);
};

module.exports = {
  getStudents,
  findStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
