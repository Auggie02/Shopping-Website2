var Prof={
    Name:'Augustine',
    Age:18,
    Gender:'Male',
    Phone:'7004181681',
    Email:'augustineg017@gmail.com',
    Dob:'15:08:2004'
};

function handleclick(event){
    const currPage=document.querySelector('[class="active"]');
    currPage.classList='passive';

    const page=document.getElementById(event);
    page.classList='active';
}

function handleProfile(){
    
    for (const key in this.Prof) {
        let element=document.getElementById(key);   
        element.innerHTML=`<input Id=${key}-input type="text" value=${this.Prof[key]} onchange="handleChangeVal('${key}')">`;
    }
    let element=document.getElementById('EditProf');
    if(element.innerHTML==='Save Profile'){
        this.loadProfileData();
    }else{
        element.innerHTML='Save Profile';
    }
     
}

function loadProfileData(){
    console.log('Json=>'+JSON.stringify(this.Prof));
    for (const key in this.Prof) {
        let element=document.getElementById(key);
        if(element){
            element.innerHTML=this.Prof[key];
        }
    }
     let element=document.getElementById('EditProf');
     element.innerHTML='Edit Profile';
}

function handleChangeVal(event){
    this.Prof[event]=document.getElementById(event+'-input').value;

}

function changepic(event){
    var preview = document.querySelector('[class="profile-img"]');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    console.log(JSON.stringify(reader.result));
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
  console.log(JSON.stringify(preview.src));

}