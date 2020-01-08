json.extract! @shoe, :id, :model, :gender, :color_id, :material_id

json.photoUrls @shoe.photos.map { |file| url_for(file) }

