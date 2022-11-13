import mongoose from "mongoose"

const connectingMongo = async() => {
    try{
        const {connection} = await mongoose.connect('mongodb+srv://tss:database1234@cluster0.3wjnuhy.mongodb.net/?retryWrites=true&w=majority')
    
        if(connection.readyState == 1){
            console.log('database connected')
        }
    } catch(errors) {
        return Promise.reject(errors)
    }
}

export default connectingMongo