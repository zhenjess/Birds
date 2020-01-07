json.extract! @product, :id, :product_code

json.photoUrls @product.photos.map { |file| url_for(file) }