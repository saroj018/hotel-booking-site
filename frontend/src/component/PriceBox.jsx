
const PriceBox = () => {
    return (
        <div className='max-w-[40%] w-full border-2 border-neutral-400 rounded-md h-fit p-5 mt-10 shadow-md'>
            <div className='flex items-start gap-5 p-4'>
                <img className='w-[30%] rounded-md' src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D" alt="" />
                <div>
                    <p>Entire Villa</p>
                    <h1 className='text-2xl'>Eternia 3 Bedroom Villa near Reis Magos</h1>
                </div>
            </div>
            <hr />
            <div>
                <h1 className='text-2xl font-bold my-3'>Price Details</h1>
                <div className='flex justify-between items-center'>
                    <p className='text-xl'>$556.64 x 9 nights</p>
                    <p className='text-2xl'>$600</p>
                </div>
                <div className='flex justify-between items-center my-2'>
                    <p className='text-xl'>Taxes</p>
                    <p className='text-2xl'>$100</p>
                </div>
            </div>
            <hr />
            <div className='flex justify-between my-4 items-center'>
                <h1 className='text-2xl font-bold'>Total</h1>
                <p className='text-2xl my-2'>$556</p>
            </div>
        </div>
    )
}

export default PriceBox