import FloorPriceLabelType from '../../types/FloorPriceLabelType';

// Label representing collection floor price and collection link
const FloorPriceLabel = (props: FloorPriceLabelType) => {

    return (
        <div className='floor-price-label'>
            <h1 style={{ marginTop: '1.5rem' }}>{ props.heading[0] }</h1>
            <p>{ props.heading[1] } Floor Price: {  Number(props.price[0])/1000000000000000000 + " ETH" }</p>
            <a target="_blank" href={ String(props.heading[2]) }>Collection Link</a>
        </div>
    )
}

export default FloorPriceLabel;