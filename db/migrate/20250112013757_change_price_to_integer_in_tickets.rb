class ChangePriceToIntegerInTickets < ActiveRecord::Migration[7.1]
  def change
    add_column :tickets, :price_int, :integer

    Ticket.reset_column_information
    Ticket.find_each do |ticket|
      ticket.update_column(:price_int, ticket.price.to_i) if ticket.price.present?
    end

    remove_column :tickets, :price

    rename_column :tickets, :price_int, :price
  end
end
