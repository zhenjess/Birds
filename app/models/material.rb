class Material < ApplicationRecord
    TYPES = [
        'Tree',
        'Wool'
    ].sort.freeze

    validates :material, presence: true, inclusion: { in: TYPES }

    has_many :products
end

    # has_many :shoe_materials
    
    # has_many :shoes,
    #  through: :shoe_materials,
    #  source: :shoe

    #sugarcane and synthetic for accessories and shoe insole