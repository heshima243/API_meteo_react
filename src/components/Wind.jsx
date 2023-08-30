const Wind = ({data}) => {
  return (
    <div className="col">
      <img src={data.image} alt="" />
      <div className="wind">
        <p>{Math.round(data.speed)}2 km/h</p>
        <p>Wind</p>
      </div>
    </div>
  );
};

export default Wind;
