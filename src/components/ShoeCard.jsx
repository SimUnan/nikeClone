import React from 'react'

const ShoeCard = ({imgUrl, changeBigShoeImage, bigShoeImg}) => {

    const handleClick = () => {
        if(bigShoeImg !== imgUrl.bigShoe){
            changeBigShoeImage(imgUrl.bigShoe)
        }
    }

    return (
        <div className={`border-[1px] ${bigShoeImg === imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'} rounded-xl bg-card bg-cover bg-center bg-no-repeat max-sm:flex-1`} onClick={handleClick}>

            <div className='flex items-center justify-center cursor-pointer max-sm:p-1 p-2'>
                <img src={imgUrl.thumbnail} alt="" className='max-sm:w-50 max-sm:h-20 sm:w-40 sm:h-40 max-sm:p-1'/>
            </div>
        </div>
    )
}

export default ShoeCard
