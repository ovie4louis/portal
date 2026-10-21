import {createPortal} from "react-dom"

const PopupContent = ({copied}) => {
  return createPortal(<section>

    {copied && ( 
        <div style={{position : 'absolute', bottom : "3rem"}}>copide clickboard</div>
    )}
        
    </section>,
    document.querySelector("#popu-content")
    )
}

export default PopupContent