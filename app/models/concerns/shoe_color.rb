class ShoeColor < ApplicationRecord
    has_many :shoe_id, :color_id
end