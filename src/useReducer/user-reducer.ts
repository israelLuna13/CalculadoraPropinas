import { MenuItem, OrderItem } from "../types";

//metodos o acciones
//type : nombre de la accion 
//payload : datos que necesita la accion o metodo
export type OrderActions = 
{type : 'add-item', payload:{item:MenuItem}}|
{type : 'remove-item', payload:{item:MenuItem['id']}}|
{type : 'place-order'}|
{type: 'add-tip' , payload:{value:number}}

//tipo de dato de mi state
export type OrderState = {
    order:OrderItem[],
    tip:number
}

//state
export const initialState:OrderState = {
    order:[],
    tip:0
}

export const orderReducer = (
    //state puedo acceder a mi state (tip,order)
    //action: puedo acceder a mis accion o metodos
    state:OrderState = initialState,
    action:OrderActions
    )=>{
        //agregar orden
    if(action.type === 'add-item'){
        
    //validamos si lo que queremos seleccionar ya esta en el pedido
    const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id)

    let updateOrder:OrderItem[] = []

    if(itemExist){
        //actualizamos el pedido
        //si lo que queremos seleccionar ya esta en el pedidp
         updateOrder = state.order.map(orderItem => orderItem.id === action.payload.item.id
            //si se cumple
            ?
            //actualizamos la cantidad
             {...orderItem,quantity: orderItem.quantity + 1  }
             
             //si no se cumple mantenemos la el pedido igual
             : 
             orderItem)
    
    } else {
        //si no existe agregamos un nuevo pedido mas lo que ya tenia el pedido
    const newItem:OrderItem = {... action.payload.item, quantity:1}
    updateOrder = [...state.order,newItem]
    }
        return {
            ...state,
            order:updateOrder}
    }

    //eliminar orden
    if(action.type === 'remove-item'){
        //nos traemos los que sean diferentes al que queremos eliminar
        let updateOrder =state.order.filter(item =>item.id !== action.payload.item) 
        return {
            ...state,
            order:updateOrder
        }
    }

    //agregar propina
    if(action.type === 'add-tip'){
        const tip = action.payload.value
        return {
            ...state,
            tip
        }
    }

    //limpiar orden 
    if(action.type === 'place-order'){
        return {
            ...state,
            tip:0,
            order:[]
        }
    }

    return state

}