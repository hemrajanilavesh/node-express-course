const checkTokenExists = function(request, response, next) {
    let token = request.headers['authorization']

    console.log('Verifying Authorization Token...')
    if (token) {
        console.log('Token Verified.')
        next()
    } else {
        console.log('Token Not Found. Returning.')
        response.json({
            success: false,
            message: 'Token not found in Request Header'
        })
    }
}

module.exports = {
    checkTokenExists:checkTokenExists
}