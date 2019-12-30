json.extract! @shoe, :id, :model, :gender

json.photoUrls @shoe.photos.map { |file| url_for(file) }

