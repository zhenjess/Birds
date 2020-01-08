class Item < ApplicationRecord
    validates :size, :shoe_id, presence: true

    has_many :cart_items
    belongs_to :shoe
    has_one_attached :photo #do active storage here

    def self.find_by_gender(search_id)
        Item.joins(:shoe)
        .where(shoes: { gender: search_id })
        .select("items.id", :size, :shoe_id, :color_id, :material_id, :model, :gender)
    end    
end