let students = [
  { id: "s1", name: "Steve", age: 23 },
  { id: "s2", name: "James", age: 25 },
  { id: "s3", name: "Peter", age: 23 },
];

// Data Access
class Student {
  save(student) {
    students.push(student);
  }

  findAll() {
    return students;
  }

  findOne(id) {
    return students.find((e) => e.id == id);
  }

  updateOne(id, data) {
    const index = students.findIndex((e) => e.id == id);
    students[index] = data;
  }

  deleteOne(id) {
    students = students.filter((e) => e.id != id);
  }
}

module.exports = Student;
