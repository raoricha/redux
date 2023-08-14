import { MobileFriendlyOutlined } from "@material-ui/icons"
const Home = ()=>{
    return (
        <>
        <div className="addtocart">
            CART
        </div>
        <div className="cart-wrapper">
            <div className="img-wrapper">
                <MobileFriendlyOutlined/>
            </div>
            <div className="text-wrapper">
                <span>phone</span>
                <span>Price $1000.00</span>
            </div>
            <div className="btn-wrapper">
                <button>Add to cart</button>
            </div>
        </div>
        </>
    )
}

export default Home