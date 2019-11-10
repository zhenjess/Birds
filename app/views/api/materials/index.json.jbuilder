@material.each do |material|
    json.set! material.id do 
        json.extract! material, :id
    end
end