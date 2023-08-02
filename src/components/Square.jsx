/* eslint-disable react/prop-types */


const Square = ({ value }) => {
    // eslint-disable-next-line react/prop-types
    return(
        <button type="button" className="square">
            {value}
        </button>
        ) 
};

export default Square