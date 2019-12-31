@items = json.items do
    @cart.items.each do |item|
        json.set! item.id do
            json.extract! item, :id, :shoe_option_id, :size, :price
        end
    end
end

@items ||= {}

@cart_items = json.cartItems do
    @cart.cart_items.each do |item|
        if (@items["#{item.item_id}"])
            json.set! item.id do 
                json.extract! item, :id, :cart_id, :item_id, :quantity

                unitPrice = @items["#{item.item_id}"]['price']
                itemPrice = (unitPrice * item.quantity)
                
                json.itemPrice itemPrice
                json.unitPrice unitPrice
            end
        end
    end
end

@cart_items ||= {}

# json.carts do
#     @carts.each do |cart|
#         json.set! cart.id do
#             json.extract! cart, :id, :user_id, :status
#         end 
#     end
# end

json.cartItems do 
    @cart_items.each do |cart_item|
        json.set! cart_item.id do
            json.extract! cart_item, :id, :item_id, :cart_id, :quantity

            if cart_item.photo.attached? 
                json.photoUrl url_for(cart_item.photo)
            end
        end 
    end
end