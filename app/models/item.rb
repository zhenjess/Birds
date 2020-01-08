class Item < ApplicationRecord
    validates :size, :price, :shoe_option_id, presence: true

    has_many :cart_items
    belongs_to :shoe_option
    #has_one_attached :photo #do active storage here

    # ShoeOption.joins(:items, :shoe)

    def self.find_by_gender(search_id)
        Item.joins(:shoe_option, :shoe) 
        .where("item.shoe_option_id = shoe_option.id", "shoe_option.shoe_id = shoe.id", shoes: {gender: search_id})
        .select("items.id", :size, :price, :shoe_id, :model, :gender, :shoe_option_id, :color_id, :material_id)
    end
    
end