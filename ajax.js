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
                str += `<li> ${obj[key]}</li>`;
                list.innerHTML = str;
            }
        } else {
            console.log("Some Error Occured");
        }
    }

    xhr.send();
    console.log("We are fucked up");
}