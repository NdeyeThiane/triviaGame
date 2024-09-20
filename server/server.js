const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8080;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
});

app.get("/quiz", async(req, res) =>{
    
        const response = await fetch("https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=boolean")
        const data = await response.json();
        // const data = {
        //     "response_code": 0,
        //     "results": [
        //       {
        //         "type": "boolean",
        //         "difficulty": "easy",
        //         "category": "Entertainment: Video Games",
        //         "question": "In Resident Evil 4, the Chicago Typewriter has infinite ammo.",
        //         "correct_answer": "True",
        //         "incorrect_answers": [
        //           "False"
        //         ]
        //       },
        //       {
        //         "type": "boolean",
        //         "difficulty": "easy",
        //         "category": "Entertainment: Video Games",
        //         "question": "The PlayStation was originally a joint project between Sega and Sony that was a Sega Genesis with a disc drive.",
        //         "correct_answer": "False",
        //         "incorrect_answers": [
        //           "True"
        //         ]
        //       },
        //       {
        //         "type": "boolean",
        //         "difficulty": "easy",
        //         "category": "Entertainment: Video Games",
        //         "question": "&quot;Metal Gear Solid 3: Snake Eater&quot; was released in 2004.",
        //         "correct_answer": "True",
        //         "incorrect_answers": [
        //           "False"
        //         ]
        //       },
        //       {
        //         "type": "boolean",
        //         "difficulty": "easy",
        //         "category": "Entertainment: Video Games",
        //         "question": "English new wave musician Gary Numan founded the video game development company Facepunch Studios in March 2009.",
        //         "correct_answer": "False",
        //         "incorrect_answers": [
        //           "True"
        //         ]
        //       }
        //     ]
        //   };
        res.send(data.results);
    

});


app.listen(port, () => {
    console.log(`server start at http://localhost:${port}`)
});

