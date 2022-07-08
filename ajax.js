console.log("Heyy");

let vegetables = document.getElementById("vegetables");
vegetables.addEventListener('click', vegetablespopup)

function vegetablespopup() {
    console.log("clicked");

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'vegetables.json', true);

    xhr.onprogress = function() {
        console.log('On Progress');
    }

    xhr.onload = function() {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);

            let list = document.getElementById('list');
            str = "";
            for (key in obj) {
                str += `<li> ${obj[key].vegetables}</li>`;
                list.innerHTML = str;
            }
        } else {
            console.log("Some Error Occured");
        }
    }

    xhr.send();
    console.log("We are fucked up");
}


// For Fruits

let fruits = document.getElementById("fruits");
fruits.addEventListener('click', fruitspopup)

function fruitspopup() {
    console.log("clicked");

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'fruits.json', true);

    xhr.onprogress = function() {
        console.log('On Progress');
    }

    xhr.onload = function() {
        if (this.status === 200) {
            let obj1 = JSON.parse(this.responseText);
            console.log(obj1);

            let list1 = document.getElementById('list1');
            str = "";
            for (key in obj1) {
                str += `<li> ${obj1[key].fruits}</li>`;
                list1.innerHTML = str;
            }
        } else {
            console.log("Some Error Occured");
        }
    }

    xhr.send();
    console.log("We are fucked up");
}