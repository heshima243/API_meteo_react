const Humidity = ({data}) => {
    return ( 
        <div>
             <img src={data.image} alt="" />
            <div className="humidity">
              <p>{Math.round( data.humidity)}%</p>
              <p>Humidity</p>
            </div>
        </div>
     );
}
 
export default Humidity;