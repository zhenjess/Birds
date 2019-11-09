class Material < ApplicationRecord
    TYPES = [
        'tree',
        'wool'
    ].sort.freeze

    validates :material, presence: true
end