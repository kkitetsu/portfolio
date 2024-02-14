
var colorArray = ["red", "orange", "yellow", "green", "blue", "violet"]
var index = 0

const updateColor = () => {
    let allList1 = document.getElementsByClassName("button1")
    let allList2 = document.getElementsByClassName("button2")
    console.log(allList1.length)
    for (let i = 0; i < allList1.length; i++) {
        allList1[i].style.color = colorArray[index]
        allList2[i].style.color = colorArray[index]
    }
    index = (index + 1) % colorArray.length
}

setInterval(updateColor, 1000)
