class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|

      t.string :address
      t.string :fullname
      t.bigint :cardnumber, :limit => 16
      t.integer :cvc
      t.float :price
      t.integer :items
      t.boolean :alreadysent

      t.timestamps
    end
  end
end
