fetch('https://karim-naj-first-api.herokuapp.com/')
    .then(response=> response.json())
    .then(json=>{
        var product=document.getElementById('product-row')
        var productContent =`
        <div class="single-product-wrapper">
            <!-- Product Image -->
            <div class="product-img">
                <img imagesource alt="">
            </div>

            <!-- Product Description -->
            <div class="product-description d-flex align-items-center justify-content-between">
                <!-- Product Meta Data -->
                <div class="product-meta-data">
                    <div class="line"></div>
                    <p class="product-price">pricing</p>
                        <h6>naming</h6>
                   
                </div>
            </div>
        </div>`
    
       rate=22000
      
        for (var i=0;i<json.length;i++){
            var myContent = document.createElement('div');
            myContent.className='col-6 col-sm-6 col-md-6 col-xl-4';
            var customizedContent = productContent
            let itemPrice=json[i].Price* rate
            if (itemPrice%1000 >=500){
                itemPrice+=1000-itemPrice%1000
            }
            else{
                itemPrice-=itemPrice%1000
            }

            customizedContent=customizedContent.replace('pricing',itemPrice.toLocaleString("en-US")+ "L.L.")
            customizedContent=customizedContent.replace('imagesource','src="' + json[i].Image+'"')
            customizedContent=customizedContent.replace('naming',json[i].Name)
            myContent.innerHTML=customizedContent;
            product.appendChild(myContent);
        }
    })
 