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
                    <a href="product-details.html">
                        <h6>naming</h6>
                    </a>
                </div>
            </div>
        </div>`;
        var rate=22000
        for (var i=0;i<json.length;i++){
            var myContent = document.createElement('div');
            myContent.className='col-12 col-sm-6 col-md-12 col-xl-6';
            var customizedContent = productContent
            let itemPrice=json[i].Price*rate
            customizedContent=customizedContent.replace('pricing',itemPrice.toLocaleString("en-US")+ "L.L.")
            customizedContent=customizedContent.replace('imagesource','src="' + json[i].Image+'"')
            customizedContent=customizedContent.replace('naming',json[i].Name)
            myContent.innerHTML=customizedContent;
            product.appendChild(myContent);
        }
    })