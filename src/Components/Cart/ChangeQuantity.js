function ChangeQuantity({ quantity, setQuantity }) {
    const addPcs = ()=> {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removePcs = ()=> {
        if (quantity<=1) return true;
        const newQuantity = quantity -1;
        setQuantity(newQuantity)
    }

  return (
    <div>
      <button onClick={removePcs} className="plus btn">-</button>
      <span>{quantity}</span>
      <button onClick={addPcs} className="minus btn">+</button>
    </div>
  );
}

export default ChangeQuantity;
