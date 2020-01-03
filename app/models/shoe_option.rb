class ShoeOption < ApplicationRecord
    # validates :shoe_id, :color_id, :material_id, presence: true

    belongs_to :shoe
    belongs_to :color
    belongs_to :material

    has_one_attached :photo #do active storage here

    has_many :items

    # #has_many :shoes

    # has_many :items

end

