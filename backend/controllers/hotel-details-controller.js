import z from 'zod'
import { uploadImageOnCloudinary } from '../utils/cloudinary.js'
import { hotelDetailsModel } from '../model/hotel-details-model.js'

const hotelDetailsValidation=z.object({
    homeType:z.string({
        required_error:"HomeType is required"
    }).trim(),
    roomType:z.string({
        required_error:"RoomType is required"
    }).trim(),
    houseTitle:z.string({
        required_error:"HouseTitle is required"
    }).trim().min(10).max(100),
    aboutHome:z.string({
        required_error:"AboutHome is required"
    }).trim(),
    description:z.string({
        required_error:"Description is required"
    }).trim().min(500).max(2000),
    bookingType:z.string({
        required_error:"BookingType is required"
    }).trim(),
    price:z.string({
        required_error:"Price is required"
    }).trim(),
    discount:z.string({
        required_error:"Discount is required"
    }).trim(),
    customerNumber:z.object({
        bed:z.number(),
        guest:z.number(),
        bathroom:z.number()
    }),
    offerServices:z.array(z.string().trim()),
    locatedPlace:z.object({
        lat:z.number(),
        lan:z.number()
    })
,})



export const hotelDetailsController=async(req,resp)=>{
   try {
    let{homeType,roomType,houseTitle,aboutHome,offerServices,description,customerNumber,bookingType,price,discount,locatedPlace}=req.body
    let hotelImage=req.files

    offerServices=JSON.parse(offerServices)
    customerNumber=JSON.parse(customerNumber)
    locatedPlace=JSON.parse(locatedPlace)
    discount=JSON.parse(discount)
    roomType=JSON.parse(roomType)
    houseTitle=JSON.parse(houseTitle)
    price=JSON.parse(price)
    const validateDetails=hotelDetailsValidation.safeParse({homeType,roomType,houseTitle,aboutHome,offerServices,description,customerNumber,bookingType,price,discount,locatedPlace})
   
    if(validateDetails.error){
        return resp.json({error:validateDetails.error.format()})
    }

    const uploadImage=await uploadImageOnCloudinary(hotelImage,'hotelDetails')
    console.log('see:  ',uploadImage);
    
    if(!uploadImage || uploadImage.length === 0){
        throw new Error("Image not uploaded")
    }
    let hotelImagesUrl=uploadImage.map((item)=>item.url)
    console.log(hotelImagesUrl);
    const uploadedBy=req.user._id
    
    const hotelDataOnDb=await hotelDetailsModel.create({uploadedBy,hotelImagesUrl,homeType,roomType,houseTitle,aboutHome,offerServices,description,customerNumber,bookingType,price,discount,locatedPlace})
    if(!hotelDataOnDb){
        return resp.json({success:false,message:"Details are not store in db"})
    }

        return resp.json({success:true,message:"Hotel's details add successfully",hotelDetails:hotelDataOnDb})
   } catch (error) {
    return resp.json({success:false,error:error.message})
   }
    
    
}


export const getHotelDetailsController=async(req,resp)=>{
    try {
        const hotelDetails=await hotelDetailsModel.find({uploadedBy:req.user._id})
        
        if(!hotelDetails){
            return resp.json({success:false,message:"There is no hotel register by this user"})
        }

        console.log(hotelDetails);
        return resp.json({success:true,detals:hotelDetails})
    } catch (error) {
        resp.json({success:false,message:"Error: "+error.message})
    }
}

export const deleteHotelController=async(req,resp)=>{
    const id=req.params.id
    console.log('id: ',id);
    try {
        if(!id){
            return resp.json({success:false,message:"Please provide id"})
        }
    
        const result=await hotelDetailsModel.deleteMany({_id:{$in:id}})

        if(!result){
            return resp.json({success:false,message:"Details not found"})
        }

        console.log('deleted');
        return resp.json({success:true,message:"Deleted Successfully",details:result})
    } catch (error) {
        return resp.json({success:false,message:"Error: "+error.message})
    }
}