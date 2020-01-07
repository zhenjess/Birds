class Item < ApplicationRecord
    validates :size, :price, :shoe_option_id, presence: true

    belongs_to :shoe_option
end

    # has_one :shoe,
    #     through: :shoe_option,
    #     source: :shoe



#     has_many :cart_items
#    # belongs_to :shoe_option
#    has_many :shoes
#     through: :shoe_option
#     source: :shoe

#     has_one_attached :photo #do active storage here

#     # ShoeOption.joins(:items, :shoe)
    # def self.find_by_gender(search_id)
    #     Item.joins(:shoe_option, :shoe) 
    #     .where("item.shoe_option_id = shoe_option.id", "shoe_option.shoe_id = shoe.id", shoes: {gender: search_id})
    #     .select("items.id", :size, :price, :shoe_id, :model, :gender, :shoe_option_id, :color_id, :material_id)
    # end
    

# Item.joins(:shoe_option, :shoe) 
#         .where("item.shoe_option_id = shoe_option.id", "shoe_option.shoe_id = shoe.id", shoes: {gender: search_id})
#         .select("items.id", :size, :price, :shoe_id, :model, :gender, :shoe_option_id, :color_id, :material_id)
        # Shoe.joins(:shoe_options, :items)
        # .where(gender: 'men')
        # .select("items.id", :size, :price, :shoe_id, :model, :gender, :shoe_option_id, :color_id, :material_id)