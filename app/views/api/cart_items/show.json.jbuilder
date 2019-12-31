unitPrice = @item['price']
itemPrice = (unitPrice * @cart_item.quantity)

json.cartItems do 
    json.set! @cart_item.id do
        json.extract! @cart_item, :id, :quantity, :item_id
        json.unitPrice unitPrice
        json.itemPrice itemPrice
    end 
end