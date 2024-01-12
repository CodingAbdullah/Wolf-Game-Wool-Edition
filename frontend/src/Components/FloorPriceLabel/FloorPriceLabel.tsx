import FloorPriceLabel from '../../types/FloorPriceLabelType';

// Label representing collection floor price
const FloorPriceLabel = (props: FloorPriceLabel) => {

    return (
        <div className='floor-price-label'>
            <h1>{ props.heading }</h1>
            <p>Floor Price: ${ props.price + "USD" }</p>
        </div>
    )
}

export default FloorPriceLabel;