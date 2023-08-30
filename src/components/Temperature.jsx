const Temperature = ({data}) => {
    return ( 
        <div>
            <img className="cloud" src={data.image} alt="" />
          <h1>{Math.round (data.celcius)}°c</h1>
          <h2>{data.name}</h2>
        </div>
     );
}
 
export default Temperature;