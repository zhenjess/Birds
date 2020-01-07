#add genders key
json.genders do 
    @genders.each do |gender|
        json.set! gender.id do
            json.extract! gender, :id, :gender
        end
    end
end

#add colors key
json.colors do 
    @colors.each do |color|
        json.set! color.id do 
            json.extract! color, :id, :color
        end
    end
end

#add materials key
json.materials do 
    @materials.each do |material|
        json.set! material.id do 
            json.extract! material, :id, :material
        end
    end
end

#add style key
json.styles do 
    @styles.each do |style|
        json.set! style.id do
            json.extract! style, :id, :style
        end
    end
end

#add size key
json.sizes do 
    @sizes.each do |size|
        json.set! size.id do 
            json.extract! size, :id, :size
        end
    end
end

#return key and {} returns populated products
json.products do 
    @products.each do |product|
        json.set! product.id do
            json.extract! product, :id, :product_code, :gender_id, :color_id, :material_id, :style_id, :size_id
            if product.photo.attached?
                json.photoUrl url_for(product.photo)
            end
        end
    end
end

# #add cart items key
# json.cartItems do 
#     CartItem.all.each do |item|
#         json.set! item.id do 
#             json.extract! item, :id, :product_id
#         end
#     end
# end