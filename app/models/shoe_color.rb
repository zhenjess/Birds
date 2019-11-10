class ShoeColor < ApplicationRecord
    has_many :shoe_id, :hue_id
end