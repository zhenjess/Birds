class Shoe < ApplicationRecord
    validates :model, :gender, presence: true

    belongs_to :shoe
end