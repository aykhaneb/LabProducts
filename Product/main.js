
const array = [
    {
        name: "Photo",
        src: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83498.jpg",
        price: "20$"
    },
];
let btn = document.querySelector(".btn")
let cards = document.querySelector(".cards")
function render() {
    cards.innerHTML=""
    array.forEach(item => {
        let div1 = document.createElement("div1")
        let div2 = document.createElement("div2")
        let img = document.createElement("img")
        let h3 = document.createElement("h3")
        let p = document.createElement("p")
        div1.classList.add("col-lg-3", "box")
        div2.classList.add("cntnt", "px-3")
        img.classList.add("w-75", "image")
        div1.append(div2)
        div2.append(img, h3, p)
        cards.append(div1)
        h3.innerHTML = `${item.name}`
        img.setAttribute("src", item.src)
        p.innerHTML = `${item.price}`
    });
}

btn.onclick = function Click() {
    let inp1 = document.querySelector("#inp1").value
    let inp2 = document.querySelector("#inp2").value
    let inp3 = document.querySelector("#inp3").value

    array.push({name:inp1,src:inp3,price:inp2})
    render()
}

    function Search() {
        let search=document.querySelector("#search").value
        array[item.name].includes(search).filter().some( )
    }

render();