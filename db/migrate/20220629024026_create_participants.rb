class CreateParticipants < ActiveRecord::Migration[7.0]
  def change
    create_table :participants do |t|
      t.string :first_name
      t.string :last_name
      t.string :sex
      t.date :dob
      t.string :city
      t.string :state
      t.string :email
      t.integer :user_id

      t.timestamps
    end
  end
end
