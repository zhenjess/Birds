class Item < ApplicationRecord
    has_many :cart_items
    belongs_to :shoe
    has_one_attached :photo #do active storage here

    # def self.find_by_gender(search_id)
    #     Item.joins(:show_option)
    #         .where(shoes_option: { gender: search_id })
    #         .select("items.id", :shoe_option_id, :color, :model, :material, :gender, :price)
    # end
    def self.find_by_gender(search_id) 
        Item.joins(:shoe)
            .where(shoes: {gender: search_id})
            .select('items.id', :color, :model, 'shoes.title', :material, :gender, :price, :shoe_option_id, :shoe_id)
    end
end