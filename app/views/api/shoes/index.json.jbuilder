json.shoes do # returns key and {} returns shoes and {what populates obj}


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
            json.extract! shoe_material, :shoe_id, :material_id, :id
        end
    end
end