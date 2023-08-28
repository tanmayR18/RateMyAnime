import React, { useEffect, useState } from 'react'
import { toMMDDYYY } from '../../service/inFormalDate'
import {AiFillLike} from "react-icons/ai"
import { apiConnector } from '../../service/apiconnector'
import { ratingAndReview } from '../../service/apis'
import { useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'


const ReviewsCard = ({review}) => {

    const userData = useSelector( state => state.auth)
    const [liked, setLiked] = useState(() => userData ? (review.likes.filter( (like) => like === userData.user._id).length === 0): false)

    async function likeHandler(){

        setLiked( (prevState) => !prevState)

        const urlBody = {
            reviewId: review._id,
            token: userData.token
        }
        try{
            const response = await apiConnector("PUT", ratingAndReview.ADD_OR_REMOVE_LIKE, urlBody)
        } catch(error){
            console.log(error)
        }
    }

  return (
    <div className='flex gap-4 text-sm text-richwhite-100 items-start'>
        {/* IMages */}
        <div className=' w-8 rounded-full overflow-hidden'>
            <img className=' object-cover' src={review.userId.image} />
        </div>

        {/* Review */}
        <div className=' flex flex-col gap-1'>
            {/* USername and date of creation */}
            <div className='flex gap-4 '>
                <div className=' font-bold text-[16px]'>{review.userId.userName}</div>
                <div className=' text-richwhite-5'>{toMMDDYYY(review.createdAt)}</div>
            </div>

            {/* User Review */}
            <div className=' opacity-90'>
                {
                    review.review
                }
            </div>

            {/* Likes */}
            <div className='flex items-center gap-1'>
                <AiFillLike
                className={` ${
                    liked ?
                    " text-richwhite-100":
                    " text-richyellow-50"
                } cursor-pointer`}
                onClick={() => userData ? likeHandler : toast.error("Please Login or SignUp")} />
                {
                    review.likes.length
                }
                
            </div>

        </div>
    </div>
  )
}

export default ReviewsCard