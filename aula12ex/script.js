function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano= document.getElementById('txtano') 
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert ('[ERRO] Verifique os dados')
   } else {
    var fsex = document.getElementByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >=0 && idade , 10) {
            //Child
            img.setAttribute('src', 'bebemasc.jpg')
        } else if (idade < 21) {
            //teenager
            img.setAttribute('src',)
        } else if (idade < 50) {
            // adult
            img.setAttribute('src',)
        } else {
            // old
            img.setAttribute('src',)
        }
        
    } else if (fsex[1].checked)
        genero = "Mulher"
        if (idade >=0 && idade , 10) {
            //Child
        } else if (idade < 21) {
            //teenager
        } else if (idade < 50) {
            // adult
        } else {
            // old
        }

   }

   res.innerHTML = ` Detectamos ${genero} com ${idade} anos. `
   res.appendChild(img)
 
}
