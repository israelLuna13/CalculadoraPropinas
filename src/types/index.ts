// creamos un alias para los datos
export type MenuItem = {
    id:number,
    name:string,
    price:number
}
// a menuItem se colocamos otro atributo con su tipo de dato
export type OrderItem = MenuItem & {
    quantity:number
}