let next = $('#next')
let prev = $('#prev')
let satu = $('#satu')
let dua = $('#dua')
let tiga = $('#tiga')
let empat = $('#empat')
let lima = $('#lima')
let enam = $('#enam')
let container = $('#container_slide')
let x = 0
container.css({
  left: x+"%"
})

next.on('click', function(){
  // x = (x<200) ? (x+100) : 0
  if(x<500){
    x = x+100
  }else{
    x = 0
  }
  container.css({
    left : -x+"%"
  })
})

prev.on('click', function(){
  // x = (x>0) ? (x-100) : 200
  if(x>0){
    x = x-100
  }else{
    x = 500
  }
  container.css({
    left: -x+"%"
  })
})

satu.on('click',function(){
  // x = (x>0) ? x+100 : 0
  if(x==100){
      x-=100
  }
  else {
      x=0
  }
  container.css({
      left: -x+"%"
  })
})

dua.on('click',function(){
  if(x==0){
      x+=100
  }
  else {
      x=100
  }
  container.css({
      left: -x+"%"
  })
})

tiga.on('click',function(){
  if(x==0){
      x+=200
  }
  else {
      x=200
  }
  container.css({
      left: -x+"%"
  })
})

empat.on('click',function(){
  if(x==0){
      x+=300
  }
  else {
      x=300
  }
  container.css({
      left: -x+"%"
  })
})

lima.on('click',function(){
  if(x==0){
      x+=400
  }
  else {
      x=400
  }
  container.css({
      left: -x+"%"
  })
})

enam.on('click',function(){
  if(x==0){
      x+=500
  }
  else {
      x=500
  }
  container.css({
      left: -x+"%"
  })
})