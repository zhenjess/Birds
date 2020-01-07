@cartItems.each do |item|
    json.set! item["id"] do
        json.extract! item, :id, :product_id, :gender_id, :color_id, :material_id, 
                    :style_id, :size_id, :gender, :color, :material, :style, :size
        json.photoUrl url_for(item.photo) 
    end 
end



