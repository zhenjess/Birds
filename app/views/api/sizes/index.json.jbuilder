@size.each do |size|
    json.set! size.id do
        json.extract! size, :id
    end
end