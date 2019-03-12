class Email < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :message, null: false
    end
  end
end
