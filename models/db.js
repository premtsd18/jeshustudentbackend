const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
MONGODB_URL="mongodb+srv://admin:admin@cluster0.dthgp.mongodb.net/student?retryWrites=true&w=majority"
mongoose.connect(MONGODB_URL, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});


require('./user.model');
require('./student.model')