class CreateRepairs < ActiveRecord::Migration[5.0]
  def change
    create_table :repairs do |t|
      t.references :customer, foreign_key: true
      t.integer :status
      t.float :price
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
