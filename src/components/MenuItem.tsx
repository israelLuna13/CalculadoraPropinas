import { Dispatch } from "react"
import type { MenuItem} from "../types"
import { OrderActions } from "../useReducer/user-reducer"

//definimos el tipo de datos de los props , porque cuando viajan al componentes pierden el tipo de dato
type MenuItemProps = {
  item:MenuItem
  dispatch: Dispatch<OrderActions>
}

export default function MenuItem({item,dispatch}:MenuItemProps) {
  return (
    <button
    className="border-2 border-teal-400
     hover:bg-teal-200 w-full p-3 flex justify-between"
     onClick={()=>dispatch({type:'add-item',payload:{item}})}
    >
    <p>{item.name}</p>
    <p className="font-blanck">{item.price}</p>
    </button>
  )
}
