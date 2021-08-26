if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb+srv://<username>:<password>@cluster0.pdyen.mongodb.net/<DBName>?retryWrites=true&w=majority'}
} else {
  module.exports = {mongoURI: 'mongodb+srv://<username>:<password>@cluster0.pdyen.mongodb.net/<DBName>?retryWrites=true&w=majority'}
}