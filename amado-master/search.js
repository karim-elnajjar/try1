function displayResult(){
    fetch('https://karim-naj-first-api.herokuapp.com/')
    .then(response=> response.json())
    .then(json=>{
        var display = document.getElementById('product-display')
        var myDiv=document.createElement('div')
        myDiv.className='row';
        var productDisplay = `
        <div class="col-12 col-lg-7">
            <div class="single_product_thumb">
                <div id="product_details_slider" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <a class="gallery_img" href="zoom-image">
                                <img class="d-block w-100" src="display-image" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-5">
            <div class="single_product_desc">
                <!-- Product Meta Data -->
                <div class="product-meta-data">
                    <div class="line"></div>
                    <p class="product-price">pricing</p>
                    <a href="product-details.html">
                        <h6>naming</h6>
                    </a>
                    
                    <!-- Avaiable -->
                    <p class="avaibility"><i class="fa fa-circle"></i> In Stock</p>
                </div>
    
                <div class="short_overview my-5">
                    <p>display-descriprion</p>
                </div>
            </div>
        </div>`

var searchResult = document.getElementById('mySearch')
display.innerHTML=' '

    for (let j=0;j<json.length;j++){

        const Words = json[j].Name.split(" ")
        customizedDisplay=productDisplay;
        if (searchResult.value.toLowerCase() == json[j].Name.toLowerCase()){
                
                customizedDisplay=customizedDisplay.replace('zoom-image', json[j].Image)
                customizedDisplay=customizedDisplay.replace('display-image', json[j].Image)
                customizedDisplay=customizedDisplay.replace('pricing', json[j].Price+"$")
                customizedDisplay=customizedDisplay.replace('naming', json[j].Name)
                myDiv.innerHTML=customizedDisplay
                display.appendChild(myDiv)
        }
        else if (searchResult.value.toLowerCase() == json[j].Type.toLowerCase()){
                
            customizedDisplay=customizedDisplay.replace('zoom-image', json[j].Image)
            customizedDisplay=customizedDisplay.replace('display-image', json[j].Image)
            customizedDisplay=customizedDisplay.replace('pricing', json[j].Price+"$")
            customizedDisplay=customizedDisplay.replace('naming', json[j].Name)
            myDiv.innerHTML+=customizedDisplay
            display.appendChild(myDiv)
    }
        else {
            for (let i=0;i<Words.length;i++){
                while (searchResult.value.toLowerCase() == Words[i].toLowerCase()){
                    customizedDisplay=customizedDisplay.replace('zoom-image', json[j].Image)
                    customizedDisplay=customizedDisplay.replace('display-image', json[j].Image)
                    customizedDisplay=customizedDisplay.replace('pricing', json[j].Price+"$")
                    customizedDisplay=customizedDisplay.replace('naming', json[j].Name)
                    myDiv.innerHTML+=customizedDisplay
                    display.appendChild(myDiv)
                    break;
            }
            
            }
        }
    }

});

}

