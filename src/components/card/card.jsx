import Button from "../myButton/button";


function Card({ flight, click }) {

    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        width: '300px',
        margin: '20px',
    };

    const clickHandler = () => {
        click(flight.id)
    }


    return (
        <div style={cardStyle}>
            <p>airline company: <b>{flight.airlineCompany}</b></p>
            <p>destination: <b>{flight.destination}</b></p>
            <p>originCountry: <b>{flight.originCountry}</b></p>
            {/* <button onClick={()=>{click(flight.id)}}>Delete item</button> */}
            <button onClick={clickHandler}>Delete item</button>
            <Button>delete item</Button >
        </div>
    )
}

export default Card;

