class ChangeAColumnNameOfItems < ActiveRecord::Migration[5.2]
  def change
    rename_column :items, :shoe_option_id, :shoe_id
  end
end
