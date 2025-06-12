# Node.js CLI To-Do Manager

A minimalist, extensible command-line to-do list manager built with Node.js. This project demonstrates robust file I/O, modular design, and command-line argument parsing—making it an excellent foundation for learning or extending with more advanced features.

---

## Features

- **Add Tasks:** Quickly add new tasks from the command line.
- **List Tasks:** Display all current tasks with index-based ordering.
- **Remove Tasks:** Delete tasks by their index.
- **Persistent Storage:** Tasks are stored in a local JSON file (`tasks.json`), ensuring data persists between sessions.
- **Error Handling:** Gracefully handles missing or malformed data files.
- **Simple, Readable Codebase:** Easy to understand and extend for new features.

---

## Usage

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher recommended)

### Running Commands

From your project directory, use:

```sh
node todo.js add "Your new task"
node todo.js list
node todo.js remove 2
```

- `add "Task description"`: Adds a new task.
- `list`: Lists all tasks.
- `remove <index>`: Removes the task at the given index (1-based).

---

## Example

```sh
$ node todo.js add "Finish Node.js project"
Task Added  Finish Node.js project

$ node todo.js list
1-Finish Node.js project

$ node todo.js remove 1
Task Removed from index :  1
```

---

## Code Highlights

- **Modular Functions:** Each operation (add, list, remove, load, save) is encapsulated for clarity and maintainability.
- **Robust File Handling:** Uses try/catch to handle missing or corrupt `tasks.json` files.
- **Command-Line Parsing:** Leverages `process.argv` for flexible CLI usage.

---

## Extending This Project

- Add task completion status or due dates.
- Implement search or filter functionality.
- Integrate with a database for multi-user support.
- Add unit tests for reliability.
- Package as an npm CLI tool for global use.

---

## License

MIT License

---

## Author

[Aayush Yadav](https://github.com/aayush130405)

---
