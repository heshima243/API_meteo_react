const Sirch = ({ setname, name, handleClick }) => {
    
  const handleChange = (e) => {
    setname(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="search">
      <input
        onChange={handleChange}
        value={name}
        placeholder="Enter City Name"
        type="text"
        name=""
        id=""
      />
      <button onClick={handleClick}>
        <img src="/image/searche.png" alt="" />
      </button>
    </div>
  );
};

export default Sirch;
