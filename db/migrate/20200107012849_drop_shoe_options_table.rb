class DropShoeOptionsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :shoe_options
  end
end
