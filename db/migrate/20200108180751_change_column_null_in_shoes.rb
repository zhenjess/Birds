class ChangeColumnNullInShoes < ActiveRecord::Migration[5.2]
  def change
    change_column_null :shoes, :color_id, false, 1
    change_column_null :shoes, :material_id, false, 1
  end
end
