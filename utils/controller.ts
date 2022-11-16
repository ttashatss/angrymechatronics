import Birds from "../model/user"

export async function getUsers(req:any,res:any) {
    try {
        const users = await Birds.find({})
        res.status(200).json(users)
    }    
    catch(err) {
        res.status(500).json(err)
    }
}

export async function postUser(req:any,res:any){
    try{
        const formData = req.body;
        if(!formData) return res.status(404).json({error : "Form data not provided"})
        Birds.create(formData, function(err:any,data:any){
            return res.status(200).json(data)
        })
    } catch (error) {
        return res.status(404).json({error})
    }
}

export async function putUser(req:any,res:any){
    try{
        const {userId} = req.query
        const formData:any = req.body
        if(userId && formData) {
            const user:any = await Birds.findByIdAndUpdate(userId, formData)
            res.status(200).json(formData)
        }
        res.status(404).json({error: "User not detected"})
    } catch (error) {
        res.status(404).json({error: "Error while updating the data"})
    }
}