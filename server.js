const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
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


app.post('/login',function(req,res){
	// Typically passwords are encrypted using something like bcrypt before sending to database
	const username=req.body.username;
	const password=req.body.password;

	// This should come from the database
	const mockUsername="billyTheKid";
	const mockPassword="superSecret";

	if (username===mockUsername && password===mockPassword){
		// In practice, use JSON web token sign method here to make an encrypted token
		res.json({
			success: true,
			message: 'password and username match!',
			token: 'encrypted token goes here'
		})
	} else {
		res.json({
			success: false,
			message: 'password and username do not match'
		})
	}

})

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})
