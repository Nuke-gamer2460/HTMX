//import the express dependency
import express from 'express';


const app = express();

//Set static Folder
app.use(express.static('public'));

//Parse a URL-encoded bodies(as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

//Parse JSON bodies(as sent by API Clients)
app.use(express.json());

//
app.get('/users', async (req, res) => {
    // const users = [
    //     { id: 1, name: 'John Doe' },
    //     { id: 2, name: 'Bob Williams' },
    //     { id: 3, name: 'Shannon Jackson' },
    // ]
    setTimeout(async() => {
        const limit = +req.query.limit || 10;

        const respones = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`);
        const users = await respones.json();
    
        res.send(`
        <h2>Users</h2>
        <ul class="list-group">
        ${users.map((user) => `<li class="list-group-item">${user.name}</li>`).join('')}
        </ul>
        `)
    }, 2000);
});

//Start Server
app.listen(3000, () => {
    console.log('Server listening on port 3000')
});

