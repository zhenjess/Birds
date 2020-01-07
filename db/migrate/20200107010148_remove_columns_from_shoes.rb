class RemoveColumnsFromShoes < ActiveRecord::Migration[5.2]
  def change
    remove_column :shoes, :model
    remove_column :shoes, :gender
  end
end
