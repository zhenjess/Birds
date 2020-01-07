#add cart items key
json.cartItems do 
    @cart_items.each do |item|
        json.set! item.id do 
            json.extract! item, :id, :product_id
        end
    end
end
