import "./cards.css"

function Cards() {

  const word = "paris"
  const a = Array(word.length).fill(0).map((_, i) => i);
  return (
    <>
      {a.map((i) => 
          <div  className="cell"></div>
      )} 
    </>
  )
}

export default Cards