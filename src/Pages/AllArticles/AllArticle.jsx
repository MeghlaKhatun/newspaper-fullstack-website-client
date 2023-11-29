
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const AllArticle = (article) => {
    const { _id,name, title, image, description } = article.data
    console.log(article.data)
    return (
        

        <div>
            <div className=" border-2 p-6 md:h-[650px] border-[#8a2121]">
                <h2 className="card-title font-bold py-6 text-xl">{title}</h2>
                <div className=' h-1/2'>
                    <img className='w-full h-full' src={image} alt="car!" />
                </div>
                <div className="card-body">
                    <h2 className="card-title font-bold text-[18px]">Publisher: {name}</h2>

                    {
                        description.length > 200 ? <p className='font-medium text-[15px]'>{description.slice(0, 200)}.........</p> : <p className='font-medium text-[15px]'>{description}</p>
                    }
                    <div className="pt-4 flex justify-center">
                        <Link to={`/allArticles/${_id}`}>
                            <button className="py-2 md:py-3 text-white font-bold px-10 rounded-tl-3xl  rounded-br-3xl  bg-[#952727]">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

AllArticle.propTypes = {
    article: PropTypes.object,
}

export default AllArticle