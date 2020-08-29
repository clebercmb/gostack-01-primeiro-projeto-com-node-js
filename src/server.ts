import express from 'express';

const app = express();
app.use(express.json());

app.get('/users', (request, response) => {

    const {name, email} = request.body;

    const userls = {
        name,
        email
    };

    return response.json(user);
    //return response.json({message: 'Hello World!'})
})


app.listen(3333, () => {
    console.log('Server started on port 3333!!')
})