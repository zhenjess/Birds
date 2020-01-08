@items.each do |item|
    json.set! item["id"] do
        json.extract! item, :id, :size, :shoe_id, :color_id, :material_id, :model, :gender
        json.photoUrl url_for(item.photo)
    end 
end

    