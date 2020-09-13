const express = require('express')
const app = express();
const port = 8080

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
]

app.get('/users', function(request, response) {
    response.json({
        success: true,
        message: 'Successfully got users',
        users: mockUserData
    })
})

app.get('/users/:id', function(request, response) {
    response.json({
        success:true,
        message: 'Got one User',
        user: mockUserData[request.params.id]
    })
})


app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})
