// import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import Sliders from "./Sliders"

const ShowCase = ({jewelery}) => {
    // const selector = useSelector(store => store.cart);
    const dispatch = useDispatch()
  return (
    <section>
        <div className="container">
            <div className="slides">
                <div className="left-sec">
                    <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat distinctio accusantium consequuntur quam nisi delectus eos saepe. Ab, qui omnis.</p>
                    <button className="btn-buy">Buy Now</button>
                </div>
                <div className="right-sec">
                        <Sliders jewelery={jewelery}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowCase