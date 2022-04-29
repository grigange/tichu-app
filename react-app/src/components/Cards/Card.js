import React, { useEffect, useState } from "react";

function Card(props) {
  var initialCount = parseInt(props.num);
  
  var classcard = `Card card-${props.value}${props.suit}`

  if(props.suit == "magic"){
    var classcard = `Card  card-${props.value}`

  }
  const [count,setCount] = useState(initialCount);
    return (
      <div className={classcard} style={props.styles}>
      </div>
    );
  }
  export default Card