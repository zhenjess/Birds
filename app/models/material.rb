class Material < ApplicationRecord
    TYPES = [
        'tree',
        'wool'
        #sugarcane and synthetic for accessories and shoe insole
    ].sort.freeze

    validates :material, presence: true

    belongs_to :material
end