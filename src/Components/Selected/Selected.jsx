/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const Selected = ({select, handleRemove}) => {
    // console.log(select);
    return (
        <div onClick={()=>handleRemove(select)}>
            {/* <h1 className="text-center text-3xl font-bold">Total Budget: $20000</h1>
            <hr /> */}
            {/* <h1>Length: {select.length}</h1> */}
            <div className="flex items-center gap-2 border rounded-xl mb-1">
            <img className="rounded-full h-14 w-14" src={select.image} alt="" />
            <h1>{select.name}</h1>
            </div>
        </div>
    );
};

export default Selected;