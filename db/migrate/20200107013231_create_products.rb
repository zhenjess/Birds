class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :product_code, null: false
      t.integer :gender_id, null: false
      t.integer :color_id, null: false
      t.integer :material_id, null: false
      t.integer :style_id, null: false
      t.integer :size_id, null: false
    end
    add_index :products, :product_code, :unique => true
  end
end
