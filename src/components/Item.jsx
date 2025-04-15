function Item({item, handleDeleteItem, onToogleItem}) {
    return (
      <>
      <li>
      <input type="checkbox" 
             value={item.packed}
             onChange={()=> onToogleItem(item.id)}
      ></input>
  
        <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={()=> handleDeleteItem(item.id)}>❌</button>
      </li>
      </>
    )
  }

export default Item