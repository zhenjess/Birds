class ShoeColor < ApplicationRecord
    belongs_to :shoe

    belongs_to :color, 
        foreign_key: :hue_id, 
        class_name: :Color
end