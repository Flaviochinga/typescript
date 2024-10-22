/*console.log("hello world")
let myname: string;

myname = 'John Doe';
console.log(myname)*/
/*type UserType = {

    username: string;
    password: string;
    status: number;
    permissions: string[];

}

const user: UserType = {

    username: 'admin',
    password: 'admin',
    status: 1,
    permissions: ['read', 'write', 'delete']

}

console.log(user.username); //admin

type RolesType = 'Admin'|'Guest';

const role: RolesType='Admin';
console.log(role);*/

type UserType =  {
    username: String;
    password: String;
    status: Number;
    permissions: string[];
    orders?: OrderType[];
}

type OrderType = {
    id: number;
    total: number;
    imponibile: number;
    iva: number;
    products: string[];
}

function createUser(username: string, password: string, status: number, permissions: string[]): UserType {
    return {
        username,
        password,
        status,
        permissions
    };
}

function createOrder(id: number, total: number, imponibile: number, iva: number, products: string[]): OrderType {
    return {
        id,
        total,
        imponibile,
        iva,
        products
    };
}

const newUser = createUser('newUser', 'password123', 1, ['read', 'write']);

const order1 = createOrder(1, 32, 12, 12, ['pomodoro', 'mela']);

const order2 = createOrder(2, 21, 7, 17, ['the', 'formaggio']);

newUser.orders = [order1, order2];

console.log(newUser.orders);