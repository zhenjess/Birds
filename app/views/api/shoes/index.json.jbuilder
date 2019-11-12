@shoes.each do |shoe|
    json.set! shoe.id do 
        json.extract! shoe, :id, :model, :gender

        #to extract each material: wool or tree
        shoe.materials.each do |material|
            
        end
    end
end

