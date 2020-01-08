class Shoe < ApplicationRecord
    validates :model, :gender, presence: true

    belongs_to :color
    belongs_to :material

    has_many :items

    has_many_attached :photos
end