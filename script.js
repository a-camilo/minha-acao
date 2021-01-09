
let res = document.getElementById('clice')
res.addEventListener('click',minhaAcao)
res.style.height='30px'
res.style.fontSize='20pt'
res.style.fontStyle='italic'
res.style.borderRadius='8px'
res.style.color='white'
res.style.background='rgb(221, 26, 162)'
res.style.display='flex'
res.style.textAlign='center'
res.style.outline='none'

var div = document.getElementById('res')
div.style.justifyContent='center'
div.style.alignItems='center'
div.style.fontSize='18pt'
div.style.padding='30px'

function minhaAcao() {
    var vcal = document.getElementById('vca')
    var vCot = document.getElementById('valCot')
    var qtd = document.getElementById('qtdCot')
    var n1 = Number.parseFloat(vCot.value)
    var n2 = Number.parseInt(qtd.value)
    var n3 = Number.parseFloat(vcal.value)
    var res = document.getElementById('res')
    let acoes = document.getElementById('acao').value
    var s = n1*n2
    res.innerHTML=`O valor total de ${acoes} é de ${s} Reais` 
    
    if( n1< n3){
       var lucro = n3-n1
       var lucro2 = n2*lucro
       res.innerHTML=`Você lucrou ${lucro2} Reais em ${acoes}` 
       
    }else if(n1>n3){
        var onus = n1-n3
        var onus2 = n2*onus  
        res.innerHTML=`Você perdeu ${onus2} Reais em ${acoes}` 
        
    }    
    
}
