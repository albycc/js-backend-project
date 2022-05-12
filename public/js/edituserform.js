const editForm = $('#edituser-form')

console.log(editForm)

$('#edituser-form').on('submit', async(e)=>{
    e.preventDefault();

    const formData = new FormData(document.getElementById('edituser-form'))

    const data = {}

    for(var key of formData.keys()){
        if(!formData.get(key)){
            alert('Fill in empty fields.');
            return;
        }
        data[key] = formData.get(key)
    }


    const id = editForm.data('id')

    data.games = [];
    data.games = Array.from(document.querySelectorAll('.input-field[name="games"]')).map(input => input.value).filter(game => game !== '')

    await fetch(`/edituser/${id}`, {
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(response => {
        if(response.status == 200){
            alert('Updated user')
            window.location.href = `http://localhost:3000/user/${id}`
        }
    })
    .catch(err=>{
        console.log(err)
    })

})

$('#add-game').on('click', ()=>{
    console.log('add game title');

    $('#gameslist-container').append(`<input type="text" class="input-field" name="games" placeholder="Game title">`);


})