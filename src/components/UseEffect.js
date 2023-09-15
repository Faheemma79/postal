
import react, { useEffect,useState } from "react";
function UseEffect(){
    const [number, setNumber] = useState(0);

    useEffect(()=> {
        console.log({number},'call UseEffect');
    });
function increment(){
    setNumber(number+1);
}

return(
<div>
    <h2>{number}</h2>
    <button onClick={increment}>Click</button>
</div>
);

}
export default UseEffect;