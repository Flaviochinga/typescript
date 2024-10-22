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
function createUser(username, password, status, permissions) {
    return {
        username: username,
        password: password,
        status: status,
        permissions: permissions
    };
}
function createOrder(id, total, imponibile, iva, products) {
    return {
        id: id,
        total: total,
        imponibile: imponibile,
        iva: iva,
        products: products
    };
}
var newUser = createUser('newUser', 'password123', 1, ['read', 'write']);
var order1 = createOrder(1, 64, 25, 24, ['pane', 'pesce']);
var order2 = createOrder(2, 42, 14, 34, ['vino', 'bufula']);
newUser.orders = [order1, order2];
console.log(newUser.orders);
