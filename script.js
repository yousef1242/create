let about = document.querySelector('.flex')
let ul = document.getElementById('ul')
let nav1 = document.querySelector('.nav1')
let nav2 = document.querySelector('.nav2')

//scroll
onscroll = function(){
    if(this.scrollY > 0){
        document.getElementById('home').style.color ='var(--blue-color)'
        document.getElementById('home2').style.color ='var(--blue-color)'
    }
   
    if(this.scrollY < 1000.7999877929688){
        document.getElementById('home').style.color ='var(--blue-color)'
        document.getElementById('work').style.color ='var(--main-color)'
        document.getElementById('work2').style.color ='var(--main-color)'
        document.getElementById('home2').style.color ='var(--blue-color)'
    }
    if(this.scrollY > 1000.7999877929688){
        document.getElementById('work').style.color ='var(--blue-color)'
        document.getElementById('work2').style.color ='var(--blue-color)'
        document.getElementById('home').style.color ='var(--main-color)'
        document.getElementById('home2').style.color ='var(--main-color)'
        document.getElementById('service').style.color = 'var(--blue-color)'
    }
    if(this.scrollY < 2635.199951171875){
        document.getElementById('service').style.color = 'var(--main-color)'
        document.getElementById('service2').style.color = 'var(--main-color)'
        
    }
    if(this.scrollY > 2635.199951171875){
        document.getElementById('service').style.color = 'var(--blue-color)'
        document.getElementById('service2').style.color = 'var(--blue-color)'
        document.getElementById('work').style.color ='var(--main-color)'
        document.getElementById('work2').style.color ='var(--main-color)'
    }
    if(this.scrollY > 3029.60009765625){
        document.getElementById('about').style.color = 'var(--blue-color)'
        document.getElementById('about2').style.color = 'var(--blue-color)'
        document.getElementById('work').style.color ='var(--main-color)'
        document.getElementById('work2').style.color ='var(--main-color)'
        document.getElementById('home').style.color ='var(--main-color)'
        document.getElementById('home2').style.color ='var(--main-color)'
        document.getElementById('service').style.color = 'var(--main-color)'
        document.getElementById('service2').style.color = 'var(--main-color)'

    }
    if(this.scrollY <3029.60009765625){
        document.getElementById('about').style.color = 'var(--main-color)'
        document.getElementById('about2').style.color = 'var(--main-color)'
    }
    if(this.scrollY > 4638.39990234375){
        document.getElementById('blog').style.color = 'var(--blue-color)'
        document.getElementById('blog2').style.color = 'var(--blue-color)'
        document.getElementById('about').style.color = 'var(--main-color)'
    }
    if(this.scrollY < 4638.39990234375){
        document.getElementById('blog2').style.color = 'var(--main-color)'
        document.getElementById('blog').style.color = 'var(--main-color)'
    }
    if(this.scrollY > 5486.39990234375){
        document.getElementById('contact').style.color = 'var(--blue-color)'
        document.getElementById('contact2').style.color = 'var(--blue-color)'
        document.getElementById('blog2').style.color = 'var(--main-color)'
        document.getElementById('blog').style.color = 'var(--main-color)'
    }
    if(this.scrollY < 5486.39990234375){
        document.getElementById('contact').style.color = 'var(--main-color)'
        document.getElementById('contact2').style.color = 'var(--main-color)'
    }

    if(this.scrollY > 50.400001525878906){
        nav2.classList.add('scroll')
    }
    else if(this.scrollY < 50.400001525878906){
        nav2.classList.remove('scroll')
    }
    
}
//onmouseover
document.getElementById('service').onmouseover = function(){
    document.getElementById('service').style.color = 'var(--blue-color)'
}
document.getElementById('service').onmouseleave = function(){
    document.getElementById('service').style.color = 'var(--main-color)'
}
document.getElementById('home').onmouseover = function(){
    document.getElementById('home').style.color = 'var(--blue-color)'
}
document.getElementById('home').onmouseleave = function(){
    document.getElementById('home').style.color = 'var(--main-color)'
}


document.getElementById('contact').onmouseover = function(){
    document.getElementById('contact').style.color = 'var(--blue-color)'
}
document.getElementById('contact').onmouseleave = function(){
    document.getElementById('contact').style.color = 'var(--main-color)'
}


document.getElementById('contact2').onmouseover = function(){
    document.getElementById('contact2').style.color = 'var(--blue-color)'
}
document.getElementById('contact2').onmouseleave = function(){
    document.getElementById('contact2').style.color = 'var(--main-color)'
}


document.getElementById('blog').onmouseover = function(){
    document.getElementById('blog').style.color = 'var(--blue-color)'
}
document.getElementById('blog').onmouseleave = function(){
    document.getElementById('blog').style.color = 'var(--main-color)'
}




document.getElementById('blog2').onmouseover = function(){
    document.getElementById('blog2').style.color = 'var(--blue-color)'
}
document.getElementById('blog2').onmouseleave = function(){
    document.getElementById('blog2').style.color = 'var(--main-color)'
}






document.getElementById('work').onmouseover = function(){
    document.getElementById('work').style.color = 'var(--blue-color)'
}
document.getElementById('work').onmouseleave = function(){
    document.getElementById('work').style.color = 'var(--main-color)'
}
document.getElementById('about').onmouseover = function(){
    document.getElementById('about').style.color = 'var(--blue-color)'
}
document.getElementById('about').onmouseleave = function(){
    document.getElementById('about').style.color = 'var(--main-color)'
}
document.getElementById('service2').onmouseover = function(){
    document.getElementById('service2').style.color = 'var(--blue-color)'
}
document.getElementById('service2').onmouseleave = function(){
    document.getElementById('service2').style.color = 'var(--main-color)'
}
document.getElementById('home2').onmouseover = function(){
    document.getElementById('home2').style.color = 'var(--blue-color)'
}
document.getElementById('home2').onmouseleave = function(){
    document.getElementById('home2').style.color = 'var(--main-color)'
}
document.getElementById('work2').onmouseover = function(){
    document.getElementById('work2').style.color = 'var(--blue-color)'
}
document.getElementById('work2').onmouseleave = function(){
    document.getElementById('work2').style.color = 'var(--main-color)'
}
document.getElementById('about2').onmouseover = function(){
    document.getElementById('about2').style.color = 'var(--blue-color)'
}
document.getElementById('about2').onmouseleave = function(){
    document.getElementById('about2').style.color = 'var(--main-color)'
}

about.onmouseover = function(){
    ul.style.display = 'block'
}
ul.onmouseleave = function(){
    ul.style.display = 'none'
}
document.getElementById('i').onclick = function(){
    document.querySelector('.nav3').classList.add('openn')
}
document.getElementById('wrong').onclick = function(){
    document.querySelector('.nav3').classList.remove('openn')
}
document.getElementById('op').onclick = function(){
    document.querySelector('.none').classList.toggle('opp')
    document.getElementById('op').classList.toggle('rotate')
}
