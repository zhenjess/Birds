class Color < ApplicationRecord
    validates :hue, presence: true

    belongs_to :color
end