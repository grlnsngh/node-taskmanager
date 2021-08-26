if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb+srv://gurleen:qwertyuiop@cluster0.pdyen.mongodb.net/Cluster0?retryWrites=true&w=majority'}
} else {
  module.exports = {mongoURI: 'mongodb+srv://gurleen:qwertyuiop@cluster0.pdyen.mongodb.net/Cluster0?retryWrites=true&w=majority'}
}