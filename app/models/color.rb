class Color < ApplicationRecord
    validates :hue, presence: true

    has_many :shoe_colors
    has_many :shoes, 
        through: :shoe_colors
        source: :shoe
end