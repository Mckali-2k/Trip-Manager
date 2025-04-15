function Stats({ items}) {

    if(!items.length) 
      return (
    <p className="stats">
      <em>Start adding some items to your packing list🚀</em>
    </p>
    )
  
    const itemNum = items.length;
    const packedItems = items.filter(item=> item.packed).length;
    const packedPercentage  = Math.round((packedItems / itemNum) * 100);
  
    return(
      <footer className="stats">
        {packedPercentage === 100 ? "You got everything! Ready to go ✈" :
        <em>
        `You have ${itemNum} item on your list, and you already packed 
        ${packedItems} (${packedPercentage}%)`</em>
        }
      </footer>
    )
  } 

export default Stats