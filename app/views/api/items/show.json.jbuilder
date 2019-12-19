json.extract! @item, :id, :shoe_option_id, :size, :price

json.photoUrls @item.photos.map { |file| url_for(file) }