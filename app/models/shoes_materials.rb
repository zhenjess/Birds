class ShoesMaterials < ApplicationRecord
    has_many :shoe_id, :material_id

end