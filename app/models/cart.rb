class Cart < ApplicationRecord
    belongs_to :user

    has_many :cart_items,
        class_name: "CartItems", 
        primary_key: :id, 
        foreign_key: :cart_id
    
    has_many :items, 
        through: :cart_items, 
        source: :item
end