body {
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background-color: #f4f4f4;
  margin: 0;
  padding: 20px;
  line-height: 1.6;
}

.container {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 100%;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

.options {
  margin-bottom: 20px;
  text-align: left;
}

.option-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
}

button {
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}

.output {
  margin-top: 30px;
  padding: 15px;
  background-color: #e9e9e9;
  border-radius: 4px;
  text-align: left;
  word-wrap: break-word;
  position: relative; /* Needed for absolute positioning of the copy button */
  padding-bottom: 50px; /* Make space for the copy button */
}

.output h2 {
  margin-top: 0;
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

#prompt-output {
  color: #666;
  font-size: 1rem;
  white-space: pre-wrap;
  margin-bottom: 10px; /* Space between prompt and button */
}

.copy-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 8px 15px;
  background-color: #28a745; /* Green color */
  font-size: 0.9rem;
  margin-top: 0;
}

.copy-button:hover {
  background-color: #218838; /* Darker green */
}

.history {
  margin-top: 30px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.history h2 {
  margin-top: 0;
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}

#prompt-history {
  list-style: none;
  padding: 0;
  margin: 0;
}

#prompt-history li {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  word-wrap: break-word;
  white-space: pre-wrap;
  font-size: 0.95rem;
  color: #555;
  border: 1px solid #eee;
}

#prompt-history li:last-child {
  margin-bottom: 0;
}