const ascendingCheckbox = $('#ascending')
const descendingCheckbox = $('#descending')

$('#search-name-field').on('input', ()=>{
    console.log('typed');
})

$('#ascending').on('click', ()=>{
    if(descendingCheckbox.is(':checked')){
        console.log('disable descending ')
        descendingCheckbox.prop('checked', false)
    }
})
$('#descending').on('click',()=>{
    if(ascendingCheckbox.is(':checked')){
        console.log('diable ascending')
        ascendingCheckbox.prop('checked', false)
    }
})