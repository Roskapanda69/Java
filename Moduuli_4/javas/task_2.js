const form = document.querySelector('form');
const search_value = document.querySelector('#query');

form.addEventListener('submit', function(evt) {
  evt.preventDefault()
  console.log(search_value)
  search_things()
})


async function search_things() {
  try {
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${search_value.value}`)
    if (!response.ok) throw new Error("Invalid input!")
    const response_json = await response.json()
    console.log(response_json)

  }  catch (error){
      console.log(error.message)
    }

}
