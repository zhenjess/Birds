class Shoe < ApplicationRecord
    validates :model, :gender, presence: true

    has_many :shoe_options

    has_many :materials, 
        through: :shoe_options, 
        source: :material

    has_many :colors, 
        through: :shoe_options, 
        source: :color
end