@shoes.each do |shoe|
    json.set! shoe.id do 
        json.extract! shoe, :id, :model, :gender
    end
end

