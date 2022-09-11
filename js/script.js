"use strict";
// Доработать список альбомов из предыдущего задания.

// Добавить к каждому LI еще и кнопку “Delete”. При нажатии на эту кнопку должно происходить удаление конкретного альбома (LI).

// Применить подход: делегирование событий

// Примечание: будьте внимательны, и не забывайте что вы работает с API запросом - а значит ваш код асинхронный!


const url = "https://jsonplaceholder.typicode.com/albums";
const ul = document.getElementById("albums");

fetch(url)
    .then((response) => response.json())
    .then((result) => {
        result.map(function (album) {

            let li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML = album.title;
            li.classList.add("album_title");

            let button = document.createElement('button');
            li.appendChild(button);
            button.innerHTML = "Delete";
            button.classList.add("remove-button");


            const ulNode = document.querySelector("ul");

            ulNode.addEventListener("click", (event) => {

                const isRemoveButton = event.target.className === "remove-button";

                if (isRemoveButton) {
                    const removeButton = event.target;
                    const album_title = removeButton.closest(".album_title");
                    album_title.remove();
                }
            })
            

            const listNode = document.querySelector("ul");
            
            listNode.onclick = (event) => {
            const node = event.target;

            if (node.nodeName === "LI") {
                node.classList.toggle("active");
            }
            };

        })
            
     .catch((error) => console.log(error))
    })
