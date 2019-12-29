class Cart < ApplicationRecord
    validates :cart, presence: true
    
    has_many :cart_items
    
    belongs_to :user
end