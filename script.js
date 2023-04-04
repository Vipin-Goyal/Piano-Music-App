const Keys=document.querySelectorAll('.key')
Keys.forEach(key =>{
    key.addEventListener('click',()=> PlayNote(key))
})
function PlayNote(key){
    const noteAudio =document.getElementById(key.dataset.note)
    noteAudio.currentTime=0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended',()=>{
        key.classList.remove('active')
    })
}