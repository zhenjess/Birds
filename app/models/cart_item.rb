class CartItem < ApplicationRecord
    validates :quantity, presence: true

    belongs_to :item

    belongs_to :cart,
        class_name: "Cart", 
        primary_key: :id,
        foreign_key: :cart_id

    has_one :shoe_option, 
        through: :item,
        source: :shoe_option
end