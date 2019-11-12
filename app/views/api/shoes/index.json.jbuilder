# returns key and {} returns shoes and {what populates obj}
json.shoes do 
    @shoes.each do |shoe|
        json.set! shoe.id do 
            json.extract! shoe, :id, :model, :gender
        end
    end
end

#add materials key
json.materials do
    #access instance variable set in shoes controller
    @materials.each do |material|
        json.set! material.id do #use id as outer key
            json.extract! material, :id, :material
        end
    end
end

#link shoe materials to shoes
json.shoeMaterials do 
    @shoe_materials.each do |shoe_material|
        json.set! shoe_material.id do
            json.extract! shoe_material, :id, :shoe_id, :material_id
        end
    end
end

#add colors(hue) key
.json.colors do
    @colors.each do |color|
        json.set! color.id do 
            json.extract! color, :id, :hue
        end
    end
end

#link shoe colors to shoes

.json.shoeColors do 
    @shoe_colors.each do |shoe_color|
        json.set! shoe_color.id do 
            json.extract! shoe_color, :id, :shoe_id, :hue_id 
        end
    end
end