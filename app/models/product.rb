class Product < ApplicationRecord
    validates :product_code, presence: true

    belongs_to :gender

    belongs_to :color

    belongs_to :material

    belongs_to :style

    belongs_to :size

    has_one_attached :photo
end








# class Shoe < ApplicationRecord
#     validates :model, :gender, presence: true

#     # #belongs_to: :shoe_option

#     has_many :shoe_options

#     has_many :materials, 
#         through: :shoe_options, 
#         source: :material

#     has_many :colors, 
#         through: :shoe_options, 
#         source: :color

#     #has_many :shoe_options

#     has_many :items,
#         through: :shoe_options, 
#         source: :items
#     # # has_many :items

#     has_many_attached :photos
# end
