class Size < ApplicationRecord
    validates :size, presence: true

    has_many :products
end