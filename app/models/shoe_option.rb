class ShoeOption < ApplicationRecord
    # validates :shoe_id, :color_id, :material_id, presence: true

    belongs_to :color
    belongs_to :material
    belongs_to :shoe

end