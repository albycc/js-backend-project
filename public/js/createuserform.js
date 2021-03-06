let gamecount = 1;
const form = document.getElementById('createuser-form');

$('#add-game').on('click', ()=>{
    console.log('add game title');

    $('#gameslist-container').append(`<input type="text" class="input-field" name="games" placeholder="Game title">`);


})

$('#createuser-form').on('submit', async(e)=>{
    e.preventDefault();

    const formData = new FormData(document.getElementById('createuser-form'))

    const data = {}

    for(var key of formData.keys()){
        if(!formData.get(key)){
            alert('Fill in empty fields.');
            return;
        }
        data[key] = formData.get(key)
    }

    data.games = [];
    data.games = Array.from(document.querySelectorAll('.input-field[name="games"]')).map(input => input.value).filter(game => game !== '')


    await fetch('/users/register', {
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(response => {
        if(response.status == 200){
            alert('User created succesful')
            $('.input-field[name="games"]').remove()
        }
    })
    .catch(err=>{
        console.log(err)
    });

    form.reset()

})