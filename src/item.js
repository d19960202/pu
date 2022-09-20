const Item = ({ sno, sna}) => {
  
    return (
      <div className="item">
        <div>
          <p>{sno}</p>
          <p> {sna} </p>
        </div>
  
      </div>
    );
  };

  export default Item