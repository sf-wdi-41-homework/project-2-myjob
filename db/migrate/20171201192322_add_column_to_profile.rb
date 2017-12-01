class AddColumnToProfile < ActiveRecord::Migration[5.1]
  def change
    add_column :profiles, :linkin_url, :string
  end
end
