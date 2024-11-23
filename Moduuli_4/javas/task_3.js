'use strict'

const form = document.querySelector('form');
const search_value = document.querySelector('#query');
const ressultshere = document.querySelector('#results');

form.addEventListener('submit', function(evt) {
  evt.preventDefault()
  search_things()
})

async function search_things() {
  try {
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${search_value.value}`)
    if (!response.ok) throw new Error("Invalid input!")
    const response_json = await response.json()
    ressultshere.innerHTML = ""
    console.log(response_json)

    for (let i = 0; i < response_json.length; i++) {
          const frame = document.createElement("article");

          const name = document.createElement("h2")
          name.textContent = response_json[i].show.name
          frame.appendChild(name)

          const img = document.createElement("img")
          img.src = response_json[i].show.image?.medium
          img.alt = `${response_json[i].show.name}`
          frame.appendChild(img)

          const text = document.createElement("div")
          text.innerHTML = response_json[i].show.summary
          frame.appendChild(text)

          const url = document.createElement("a")
          url.textContent = response_json[i].show.url
          url.target = "_blank"
          frame.appendChild(url)

          ressultshere.appendChild(frame)

    }

  }  catch (error){
      console.log(error.message)
    }

}



