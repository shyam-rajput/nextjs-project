const { usernamee, passwordd } = process.env;

export const connectionStr = "mongodb+srv://" + usernamee + ":" + passwordd + "@cluster0.bnho5qm.mongodb.net/productDB?retryWrites=true&w=majority"

