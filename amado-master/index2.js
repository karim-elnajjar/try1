
fetch('https://karim-naj-first-api.herokuapp.com/')
    .then(response=> response.json())
    .then(json=>{
        var product=document.getElementById('product-row-list')
        var productContent =`
        <div class="single-product-wrapper">
            <!-- Product Image -->

            <!-- Product Description -->
            <div class="product-description d-flex align-items-center justify-content-between">
                <!-- Product Meta Data -->
                <div class="product-meta-data">
                    
                        <h4>naming</h4>              
                    <p class="product-price">pricing</p>
                
            </div>
        </div>`
    
        rate=22000
        for (var i=0;i<json.length;i++){
            var myContent = document.createElement('div');
            myContent.className='col-12 col-sm-12 col-md-12 col-xl-12';
            var customizedContent = productContent
            let itemPrice=json[i].Price*rate
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
 