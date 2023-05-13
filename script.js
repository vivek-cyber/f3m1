const btn=document.getElementById("btn")
let tab=document.getElementById("tbo")
let tab2=document.getElementById("tbo2")
let tab3=document.getElementById("tbo3")
btn.addEventListener("click",func1)


async function func1()
{
    //first promise
    const prom1=await promiseAPI1()
    if(prom1===true)
    {
        //second promise
        const prom2=await promiseAPI2()
        if(prom2===true)
        {
                //third promise
                const prom3=await promiseAPI3()
                    
        }
    }
    
}


async function promiseAPI1()
{
    return await new Promise(async (resolve)=>{
        let response= await fetch("https://dummyjson.com/posts");
        let jsondata= await response.json();
        console.log(jsondata.posts)
        for(let i in jsondata.posts)
        {
            display(jsondata.posts[i])
        }
       setTimeout(()=>{resolve(true)}, 1000)
    })
}

async function promiseAPI2()
{
    return new Promise(async (resolve)=>{
        let response= await fetch("https://dummyjson.com/products");
        let jsondata= await response.json();
        console.log(jsondata)
        //print the jsondata
        for(let i in jsondata.products)
        {
            display2(jsondata.products[i])
        }
        //
        setTimeout(()=>{resolve(true)},2000)
    })
}

async function promiseAPI3()
{
    return new Promise(async (resolve)=>{
        let response= await fetch("https://dummyjson.com/todos");
        let jsondata= await response.json();
        console.log(jsondata.todos)
        //print the jsondata
        for(let i in jsondata.todos)
        {
            display3(jsondata.todos[i])
        }
        //
        setTimeout(()=>{resolve(true)},3000)
    })
}


// body:"His of the group of people he was talking to made him change his mind."
// id: 1
// reactions : 2
// tags :  ['history', 'american', 'crime']
// title : "His mother had always taught him"
// userId : 9

// {/* <td id="ID">ID</td>
// <td id="uid">User ID</td>
// <td id="title">title</td>
// <td id="body">Body</td>
// <td id="reac">reactions</td>
// <td id="tags">Tags</td> */}

function display(obj)
{

let tab=document.getElementById("tbo")
let newrow=document.createElement("tr");

let td1=document.createElement("td");
td1.innerText=obj["id"]
newrow.appendChild(td1)


let td2=document.createElement("td");
td2.innerText=obj["userId"]
newrow.appendChild(td2)

let td3=document.createElement("td");
td3.innerText=obj["title"]
newrow.appendChild(td3)

let td4=document.createElement("td");
td4.innerText=obj["body"]
newrow.appendChild(td4)

let td5=document.createElement("td");
td5.innerText=obj["reactions"]
newrow.appendChild(td5)


let td6=document.createElement("td");
for(let i in obj["tags"])
{
    td6.innerText=td6.innerText+obj["tags"][i]+" "
}
newrow.appendChild(td6)



tab.appendChild(newrow)
}



/* <td id="id">ID</td>
<td id="cat">Category</td>
<td id="brand">Brand</td>
<td id="title">Title</td>
<td id="des">Description</td>
<td id="dis">Discount</td>
<td id="imgs">Images</td>
<td id="price">Price</td>
<td id="rating">Rating</td>
<td id="stock">Stock</td>
<td id="thumb">Thumbnail</td> */

// brand:"Apple"
// category:"smartphones"
// description: "An apple mobile which is nothing like apple"
// discountPercentage:12.96
// id:1
// images:(5) ['https://i.dummyjson.com/data/products/1/1.jpg', 'https://i.dummyjson.com/data/products/1/2.jpg', 'https://i.dummyjson.com/data/products/1/3.jpg', 'https://i.dummyjson.com/data/products/1/4.jpg', 'https://i.dummyjson.com/data/products/1/thumbnail.jpg']
// price:549
// rating:4.69
// stock: 94
// thumbnail:"https://i.dummyjson.com/data/products/1/thumbnail.jpg"
// title:"iPhone 9"

function display2(obj)
{
    let tab2=document.getElementById("tbo2")



let newrow=document.createElement("tr");

let td1=document.createElement("td");
td1.innerText=obj["id"]
newrow.appendChild(td1)


let td2=document.createElement("td");
td2.innerText=obj["category"]
newrow.appendChild(td2)

let td3=document.createElement("td");
td3.innerText=obj["brand"]
newrow.appendChild(td3)

let td4=document.createElement("td");
td4.innerText=obj["title"]
newrow.appendChild(td4)

let td5=document.createElement("td");
td5.innerText=obj["description"]
newrow.appendChild(td5)

let td6=document.createElement("td");
td6.innerText=obj["discountPercentage"]
newrow.appendChild(td6)

let td7=document.createElement("td");
for(let i in obj["images"])
{
    let p= document.createElement('img')
    p.src=obj["images"][i]
    p.height="70";
    p.alt="product image"
    td7.appendChild(p);
    p.style.border="1px solid black"
}
newrow.appendChild(td7)

let td8=document.createElement("td");
td8.innerText=obj["price"]
newrow.appendChild(td8)

let td9=document.createElement("td");
td9.innerText=obj["rating"]
newrow.appendChild(td9)

let td10=document.createElement("td");
td10.innerText=obj["stock"]
newrow.appendChild(td10)



let td11=document.createElement("td");
let im=document.createElement("img")
im.src=obj["thumbnail"]
td11.appendChild(im)
im.style.border="1px solid black"
im.height=70
newrow.appendChild(td11)

tab2.appendChild(newrow)
}


// completed:true
// id:1
// todo:"Do something nice for someone I care about"
// userId:26

function display3(obj)
{

let tab=document.getElementById("tbo3")
let newrow=document.createElement("tr");

let td1=document.createElement("td");
td1.innerText=obj["id"]
newrow.appendChild(td1)


let td2=document.createElement("td");
td2.innerText=obj["userId"]
newrow.appendChild(td2)

let td3=document.createElement("td");
td3.innerText=obj["todo"]
newrow.appendChild(td3)


tab.appendChild(newrow)
}


