let gamecount = 1;

$('#add-game').on('click', ()=>{
    console.log('add game title');

    $('#gameslist-container').append(`<input type="text" class="input-field" name="games" placeholder="Game title">`);


})