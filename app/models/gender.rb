class Gender < ApplicationRecord
    validates :gender, presence: true

    has_many :products
end