import Birds from "../model/user"

export async function getUsers(req,res) {
    try{
        const users = await Birds.find({})

        if(!users) return res.status(404).json({error: "Data not found"})
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({error: "Error while fetching data"})
    }
}

export async function postUser(req,res){
    try{
        const formData = req.body;
        if(!formData) return res.status(404).json({error : "Form data not provided"})
        Birds.create(formData, function(err,data){
            return res.status(200).json(data)
        })
    } catch (error) {
        return res.status(404).json({error})
    }
}

export async function putUser(req,res){
    try{
        const {userId} = req.query
        const formData = req.body
        if(userId && formData) {
            const user = await Birds.findByIdAndUpdate(userId, formData)
            res.status(200).json(formData)
        }
        res.status(404).json({error: "User not detected"})
    } catch (error) {
        res.status(404).json({error: "Error while updating the data"})
    }
}