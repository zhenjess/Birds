class Material < ApplicationRecord
    TYPES = [
        'tree',
        'wool'
        #sugarcane and synthetic for accessories and shoe insole
    ].sort.freeze

    validates :material, presence: true, inclusion: { in: TYPES }

    belongs_to :material
end