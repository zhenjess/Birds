
    @items.each do |item|
        json.set! item.id do
            json.extract! item, :id, :shoe_id, :size
            
            if item.photo.attached? 
                json.photoUrl url_for(item.photo)
            end
        end 
    end
