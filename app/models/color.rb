class Color < ApplicationRecord
    validates :color, presence: true

    has_many :products
end

#  has_many :shoe_colors
#     has_many :shoes, 
#         through: :shoe_colors,
#         source: :shoe