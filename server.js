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


app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})
