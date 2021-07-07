const express = require('express');
const app = express();
const port = 3000;



app.get("/authors/1", (req, res) => {
    res.send(`name : ${authors[1].name}  nationality: ${authors[1].nationality}`);
});

// Exo 2

app.get("/authors/2", (req, res) => {
    res.send(`name : ${authors[2].name}  nationality: ${authors[2].nationality}`);
    
});

app.get("/authors/3", (req, res) => {
    res.send(`name : ${authors[3].name}  nationality: ${authors[3].nationality}`);
});

app.get("/authors/4", (req, res) => {
    res.send(`name : ${authors[4].name}  nationality: ${authors[4].nationality}`);
});



//   Exo 3

app.get("/authors/1/books", (req, res) => {
    res.send(`${authors[1].books}`);

}); 

app.get("/authors/2/books", (req, res) => {
    res.send(`${authors[2].books}`);

}); 

app.get("/authors/3/books", (req, res) => {
    res.send(`${authors[3].books}`);

}); 

app.get("/authors/4/books", (req, res) => {
    res.send(`${authors[4].books}`);

}); 


//   Exo   04


app.get('/json/authors/:id', function (req, res,) {
    const id = req.params.id;
    res.json({name : authors[id].name, nationality: authors[id].nationality,});
})


app.get('/json/authors/:id/books', function (req, res,) {
    const id = req.params.id;
    res.json({books : authors[id].books});
});







var authors = [
    {

    },
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]






app.listen(3000, () => {
    console.log("Listening on port 3000");
});