class AddColumnsToShoes < ActiveRecord::Migration[5.2]
  def change
    add_column :shoes, :color_id, :integer
    add_column :shoes, :material_id, :integer
  end
end
