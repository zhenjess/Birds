# json.extract! @item, :id, :shoe_option_id, :size, :price

# json.photoUrls @item.photos.map { |file| url_for(file) }

@items.each do |item|
    json.set! item["id"] do
        json.extract! item, :id, :shoe_option_id, :color, :model, :material, :price, :gender
        json.photoUrl url_for(item.photo)
    end
end