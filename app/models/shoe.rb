class Shoe < ApplicationRecord
    validates :model, :gender, presence: true

    has_many :shoe_materials
    has_many :materials, through: :shoe_materials
end