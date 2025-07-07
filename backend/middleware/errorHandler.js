const {constants} = require('./../constants')
const errorhandler = (err, req,res) => {
    
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
            title: 'Validation Error',
            message : err.message,
            stackTrace : err.stackTrace
        })
        break;
        case constants.NOT_FOUND:
            // creating response.json
        res.json({
            title: 'Not Found',
            message : err.message,
            stackTrace : err.stackTrace
        })
        break;
        case constants.UNAUTHORIZED:
            // creating response.json
        res.json({
            title: 'Unauthorized access',
            message : err.message,
            stackTrace : err.stackTrace
        })
        break;
        case constants.FORBIDDEN:
            // creating response.json
        res.json({
            title: 'Access Forbidden',
            message : err.message,
            stackTrace : err.stackTrace
        })
        break;
        case constants.SERVER_ERROR:
        // creating response.json
        res.json({
            title: 'Server Error',
            message : err.message,
            stackTrace : err.stackTrace
        })
        break;
        default:
            console.log('No Error, All Good!');
            

    }
    

    
}

module.exports = errorhandler;