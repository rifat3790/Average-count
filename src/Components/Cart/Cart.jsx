/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
const Cart = ({cart, handleAdd}) => {
    // console.log(cart);
    return (
        <div>
            <div className="card border  border-red-400 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={cart.image} alt="Shoes" className="h-16 w-16 rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{cart.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="flex gap-10">
                    <h3>Salary: ${cart.salary}</h3>
                    <p>{cart.role}</p>
                </div>
                <div className="card-actions">
                <button onClick={()=>handleAdd(cart)} className="btn btn-primary">Select</button>
                </div>
            </div>
            </div>
            {/* <h2>hello i am form cart</h2> */}
        </div>
    );
};

export default Cart;